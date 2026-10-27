import { computed, onScopeDispose, ref, type ComputedRef, type Ref } from "vue";
import {
  ANIMATIONS,
  spriteForFrame,
  type CharacterAnimation,
  type CharacterState,
  type SpriteRecord,
} from "~/data/character-animations";

export interface PlayOptions {
  /** Bypass priority, min-duration and interruptibility guards. */
  force?: boolean;
  /** Called when a timed state finishes and returns to idle. */
  onComplete?: () => void;
}

export interface CharacterAnimationController {
  currentState: Ref<CharacterState>;
  currentAnimation: ComputedRef<CharacterAnimation>;
  frameName: ComputedRef<string>;
  sprite: ComputedRef<SpriteRecord | undefined>;
  frameIndex: Ref<number>;
  paused: Ref<boolean>;
  play: (next: CharacterState, options?: PlayOptions) => boolean;
  setPaused: (value: boolean) => void;
  start: () => void;
  dispose: () => void;
}

/**
 * Small sprite state machine.
 *
 * Animation frames are advanced with self-correcting timers; continuous
 * movement lives in `useCharacterMovement` and uses requestAnimationFrame.
 * Priority + interruptibility prevent conflicting states (sleeping cannot
 * start mid-drag, random reactions cannot stomp a landing, etc.).
 */
export function useCharacterAnimation(initial: CharacterState = "IDLE"): CharacterAnimationController {
  const currentState = ref<CharacterState>(initial);
  const frameIndex = ref(0);
  const paused = ref(false);
  const currentAnimation = computed(() => ANIMATIONS[currentState.value]);
  const frameName = computed(() => {
    const frames = currentAnimation.value.frames;
    return frames[Math.min(frameIndex.value, frames.length - 1)] ?? frames[0] ?? "idle_1";
  });
  const sprite = computed(() => spriteForFrame(frameName.value));

  let frameTimer: ReturnType<typeof setTimeout> | undefined;
  let stateTimer: ReturnType<typeof setTimeout> | undefined;
  let started = false;
  let stateStartedAt = 0;
  let disposed = false;
  let activePlayToken = 0;

  function clearFrameTimer() {
    if (frameTimer) clearTimeout(frameTimer);
    frameTimer = undefined;
  }

  function clearStateTimer() {
    if (stateTimer) clearTimeout(stateTimer);
    stateTimer = undefined;
  }

  function scheduleNextFrame() {
    clearFrameTimer();
    if (paused.value || disposed) return;

    const animation = currentAnimation.value;
    if (animation.frames.length <= 1 || !animation.loop) {
      // One-frame and non-looping animations hold their final frame; the
      // state timer (or an explicit caller) decides when to move on.
      if (!animation.loop && frameIndex.value >= animation.frames.length - 1) return;
    }

    const interval = Math.max(40, 1000 / animation.fps);
    frameTimer = setTimeout(() => {
      if (paused.value || disposed) return;
      const frames = currentAnimation.value.frames;
      if (frames.length <= 1) return;

      if (frameIndex.value >= frames.length - 1) {
        if (currentAnimation.value.loop) {
          frameIndex.value = 0;
          scheduleNextFrame();
        }
        return;
      }

      frameIndex.value += 1;
      scheduleNextFrame();
    }, interval);
  }

  function beginState(next: CharacterState, options: PlayOptions = {}) {
    activePlayToken += 1;
    const token = activePlayToken;

    clearFrameTimer();
    clearStateTimer();

    currentState.value = next;
    frameIndex.value = 0;
    stateStartedAt = typeof performance !== "undefined" ? performance.now() : Date.now();

    const animation = ANIMATIONS[next];
    scheduleNextFrame();

    if (animation.maxDuration > 0) {
      const completion = options.onComplete;
      stateTimer = setTimeout(() => {
        if (disposed || token !== activePlayToken) return;
        // Timed states recover to idle. `force` is required because idle has
        // lower priority than the state it is leaving.
        playInternal("IDLE", { force: true });
        completion?.();
      }, animation.maxDuration);
    }

    return true;
  }

  function playInternal(next: CharacterState, options: PlayOptions = {}): boolean {
    if (disposed) return false;

    const now = typeof performance !== "undefined" ? performance.now() : Date.now();
    const current = currentAnimation.value;
    const incoming = ANIMATIONS[next];

    if (next === currentState.value && !options.force) return false;

    if (!options.force) {
      // A locked state (dragging/landing) must finish first.
      if (!current.interruptible) return false;

      // Respect the minimum display time for equally/lower-priority states.
      if (
        next !== "IDLE" &&
        now - stateStartedAt < current.minDuration &&
        incoming.priority <= current.priority
      ) {
        return false;
      }

      // Higher-priority states win. Idle is always an allowed recovery.
      if (next !== "IDLE" && incoming.priority < current.priority) return false;
    }

    return beginState(next, options);
  }

  function play(next: CharacterState, options: PlayOptions = {}): boolean {
    return playInternal(next, options);
  }

  function setPaused(value: boolean) {
    if (paused.value === value) return;
    paused.value = value;
    if (value) {
      clearFrameTimer();
    } else {
      scheduleNextFrame();
    }
  }

  function start() {
    if (started || disposed) return;
    started = true;
    beginState(currentState.value);
  }

  function dispose() {
    disposed = true;
    started = false;
    clearFrameTimer();
    clearStateTimer();
  }

  onScopeDispose(dispose);

  return {
    currentState,
    currentAnimation,
    frameName,
    sprite,
    frameIndex,
    paused,
    play,
    setPaused,
    start,
    dispose,
  };
}
