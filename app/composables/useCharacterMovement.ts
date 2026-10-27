import { computed, onScopeDispose, ref, type Ref } from "vue";

export type WalkDirection = "left" | "right";

export interface UseCharacterMovementOptions {
  width: Ref<number>;
  height: Ref<number>;
  mobile: Ref<boolean>;
  onWalkStart?: (direction: WalkDirection) => void;
  onWalkEnd?: () => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
}

export interface CharacterMovement {
  x: Ref<number>;
  y: Ref<number>;
  isMoving: Ref<boolean>;
  isDragging: Ref<boolean>;
  home: { x: number; y: number };
  setElement: (element: HTMLElement | null) => void;
  refresh: () => void;
  walkTo: (targetX: number, onArrive?: () => void) => void;
  walkStep: (direction: WalkDirection, distance: number, onArrive?: () => void) => void;
  stop: () => void;
  returnHome: (onArrive?: () => void) => void;
  distanceFromHome: () => number;
  beginDrag: (offsetX: number, offsetY: number) => void;
  dragTo: (clientX: number, clientY: number) => void;
  endDrag: () => void;
  setPosition: (nextX: number, nextY: number) => void;
  dispose: () => void;
}

interface Insets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

const ZERO_INSETS: Insets = { top: 0, right: 0, bottom: 0, left: 0 };

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), Math.max(min, max));
}

/** Reads CSS safe-area insets by borrowing a hidden probe element. */
function readSafeInsets(): Insets {
  if (typeof document === "undefined") return ZERO_INSETS;
  const probe = document.createElement("div");
  probe.style.cssText = [
    "position:fixed",
    "top:0",
    "left:0",
    "width:0",
    "height:0",
    "visibility:hidden",
    "pointer-events:none",
    "padding-top:env(safe-area-inset-top,0px)",
    "padding-right:env(safe-area-inset-right,0px)",
    "padding-bottom:env(safe-area-inset-bottom,0px)",
    "padding-left:env(safe-area-inset-left,0px)",
  ].join(";");
  document.body.appendChild(probe);
  const style = getComputedStyle(probe);
  const insets = {
    top: Number.parseFloat(style.paddingTop) || 0,
    right: Number.parseFloat(style.paddingRight) || 0,
    bottom: Number.parseFloat(style.paddingBottom) || 0,
    left: Number.parseFloat(style.paddingLeft) || 0,
  };
  probe.remove();
  return insets;
}

/**
 * Fixed-overlay movement in viewport pixels.
 *
 * Coordinates are the top-left corner of the character frame. Position updates
 * go through transform: translate3d() and requestAnimationFrame; the state
 * machine only hears about walk start/end so sprite frames never overlap.
 */
export function useCharacterMovement(options: UseCharacterMovementOptions): CharacterMovement {
  const x = ref(0);
  const y = ref(0);
  const isMoving = ref(false);
  const isDragging = ref(false);

  let element: HTMLElement | null = null;
  let rafId: number | null = null;
  let initialized = false;
  let dragOffset = { x: 0, y: 0 };
  let viewport = { width: 0, height: 0 };
  let insets: Insets = ZERO_INSETS;

  const margin = computed(() => (options.mobile.value ? 10 : 20));
  const minY = computed(() => (options.mobile.value ? 68 : 78) + insets.top);
  const speed = computed(() => (options.mobile.value ? 36 : 54));

  const home = {
    get x() {
      return bounds().maxX;
    },
    get y() {
      return bounds().maxY;
    },
  };

  function bounds() {
    const maxX = viewport.width - options.width.value - margin.value - insets.right;
    const maxY = viewport.height - options.height.value - margin.value - insets.bottom;
    return {
      minX: margin.value + insets.left,
      maxX: Math.max(margin.value + insets.left, maxX),
      minY: minY.value,
      maxY: Math.max(minY.value, maxY),
    };
  }

  /**
   * Walking is intentionally confined to a short lane near the character's
   * home in the bottom-right gutter on desktop. It keeps the companion alive
   * without letting it wander across cards, forms, or navigation on the page.
   * Dragging still uses the full viewport bounds.
   */
  function walkBounds() {
    const area = bounds();
    if (options.mobile.value) return area;
    return { ...area, minX: Math.max(area.minX, area.maxX - 110) };
  }

  function applyTransform() {
    if (!element) return;
    element.style.transform = `translate3d(${Math.round(x.value)}px, ${Math.round(y.value)}px, 0)`;
  }

  function clampPosition(nextX: number, nextY: number) {
    const area = bounds();
    return {
      x: clamp(nextX, area.minX, area.maxX),
      y: clamp(nextY, area.minY, area.maxY),
    };
  }

  function setPosition(nextX: number, nextY: number) {
    const next = clampPosition(nextX, nextY);
    x.value = next.x;
    y.value = next.y;
    applyTransform();
  }

  function setElement(nextElement: HTMLElement | null) {
    element = nextElement;
    if (element) applyTransform();
  }

  function cancelWalk(notify: boolean) {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    if (isMoving.value) {
      isMoving.value = false;
      if (notify) options.onWalkEnd?.();
    }
  }

  function walkTo(targetX: number, onArrive?: () => void) {
    if (isDragging.value) return;
    const area = walkBounds();
    const destination = clamp(targetX, area.minX, area.maxX);
    const wasMoving = isMoving.value;

    cancelWalk(false);

    if (Math.abs(destination - x.value) < 1) {
      if (wasMoving) options.onWalkEnd?.();
      onArrive?.();
      return;
    }

    isMoving.value = true;
    options.onWalkStart?.(destination < x.value ? "left" : "right");

    let last = performance.now();

    const step = (now: number) => {
      const delta = Math.min(0.06, (now - last) / 1000);
      last = now;
      const remaining = destination - x.value;
      const distance = speed.value * delta;

      if (Math.abs(remaining) <= distance) {
        x.value = destination;
        applyTransform();
        rafId = null;
        isMoving.value = false;
        options.onWalkEnd?.();
        onArrive?.();
        return;
      }

      x.value += Math.sign(remaining) * distance;
      applyTransform();
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
  }

  function walkStep(direction: WalkDirection, distance: number, onArrive?: () => void) {
    const area = walkBounds();
    const sign = direction === "left" ? -1 : 1;
    let target = x.value + sign * distance;

    // Bounce inward instead of walking into a viewport edge.
    if (target > area.maxX || target < area.minX) {
      target = x.value - sign * distance;
    }

    walkTo(target, onArrive);
  }

  function stop() {
    cancelWalk(true);
  }

  function returnHome(onArrive?: () => void) {
    walkTo(home.x, onArrive);
  }

  function distanceFromHome() {
    return Math.abs(home.x - x.value);
  }

  function beginDrag(offsetX: number, offsetY: number) {
    cancelWalk(true);
    isDragging.value = true;
    dragOffset = { x: offsetX, y: offsetY };
    options.onDragStart?.();
  }

  function dragTo(clientX: number, clientY: number) {
    if (!isDragging.value) return;
    setPosition(clientX - dragOffset.x, clientY - dragOffset.y);
  }

  function endDrag() {
    if (!isDragging.value) return;
    isDragging.value = false;
    options.onDragEnd?.();
  }

  function refresh() {
    if (typeof window === "undefined") return;
    viewport = { width: window.innerWidth, height: window.innerHeight };
    insets = readSafeInsets();

    if (!initialized) {
      initialized = true;
      setPosition(home.x, home.y);
      return;
    }

    if (isDragging.value) {
      const next = clampPosition(x.value, y.value);
      setPosition(next.x, next.y);
      return;
    }

    // Stop a walk that is now outside the new viewport, then re-clamp.
    if (isMoving.value) cancelWalk(true);
    const next = clampPosition(x.value, y.value);
    setPosition(next.x, next.y);
  }

  function dispose() {
    cancelWalk(false);
    element = null;
  }

  onScopeDispose(dispose);

  return {
    x,
    y,
    isMoving,
    isDragging,
    home,
    setElement,
    refresh,
    walkTo,
    walkStep,
    stop,
    returnHome,
    distanceFromHome,
    beginDrag,
    dragTo,
    endDrag,
    setPosition,
    dispose,
  };
}
