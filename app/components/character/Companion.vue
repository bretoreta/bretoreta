<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  LAZY_STATES,
  PRIORITY_STATES,
  SPRITE_CANVAS,
  spriteForFrame,
  framesForStates,
  preloadSpriteNames,
  type CharacterState,
} from "~/data/character-animations";
import {
  CHARACTER_MENU,
  CLICK_REACTIONS,
  CLICK_REPEAT_LINES,
  CODING_SESSION,
  DRAG_LINES,
  HOVER_LINES,
  INACTIVITY_LINES,
  REVEAL_LINE,
  RETURNING_HOME_LINE,
  ROUTE_INTROS,
  SECRET_LINE,
  SECTION_LINES,
  TYPING_LINES,
  WAKE_LINES,
  type CharacterMenuItem,
  type DialogueLine,
} from "~/data/character-dialogues";
import { useCharacterAnimation } from "~/composables/useCharacterAnimation";
import { useCharacterMovement } from "~/composables/useCharacterMovement";
import { useSectionObserver } from "~/composables/useSectionObserver";

const STORAGE_HIDDEN = "chibi:hidden";
const STORAGE_PAUSED = "chibi:paused";

const route = useRoute();
const router = useRouter();

const ready = ref(false);
const hidden = ref(false);
const userPaused = ref(false);
const prefersReduced = ref(false);
const viewport = ref({ width: 0, height: 0 });

const isMobile = computed(() => viewport.value.width < 768);
const charHeight = computed(() => (isMobile.value ? 88 : 160));
const charWidth = computed(() =>
  Math.round(charHeight.value * (SPRITE_CANVAS.width / SPRITE_CANVAS.height)),
);

const motionPaused = computed(() => userPaused.value || prefersReduced.value);

/* -------------------------------------------------------------------------- */
/* State machine + movement                                                   */
/* -------------------------------------------------------------------------- */

const animation = useCharacterAnimation("IDLE");

const movement = useCharacterMovement({
  width: charWidth,
  height: charHeight,
  mobile: isMobile,
  onWalkStart: (direction) => {
    if (motionPaused.value) return;
    // User-initiated movement (keyboard nudges, scroll walks, wandering) should
    // take over from a reaction pose; otherwise the character would slide.
    animation.play(direction === "left" ? "WALKING_LEFT" : "WALKING_RIGHT", { force: true });
  },
  onWalkEnd: () => {
    if (motionPaused.value) return;
    if (animation.currentState.value.startsWith("WALKING")) {
      animation.play("IDLE", { force: true });
    }
  },
  onDragStart: () => {
    cancelSession();
    closeMenu();
    dismissDialogue();
    if (!motionPaused.value) animation.play("DRAGGING", { force: true });
  },
  onDragEnd: () => {
    if (!motionPaused.value) animation.play("LANDING", { force: true });
  },
});

const mirror = computed(() => animation.currentState.value === "WALKING_LEFT");

const frameSprite = computed(() => {
  if (motionPaused.value) return spriteForFrame("idle_1");
  return animation.sprite.value ?? spriteForFrame("idle_1");
});

/* -------------------------------------------------------------------------- */
/* Dialogue                                                                   */
/* -------------------------------------------------------------------------- */

interface ActiveDialogue {
  key: number;
  text: string;
  tone: "speech" | "terminal";
  hold: number;
}

const dialogue = ref<ActiveDialogue | null>(null);
const dialogueOpen = computed(() => Boolean(dialogue.value));
let dialogueKey = 0;
let lastSpokenAt = Date.now();
let dialogueTimer: ReturnType<typeof setTimeout> | undefined;

function say(line: DialogueLine | string, options: { hold?: number; tone?: "speech" | "terminal" } = {}) {
  if (hidden.value) return;
  if (movement.isMoving.value) movement.stop();

  const resolved: DialogueLine = typeof line === "string" ? { text: line } : line;
  dialogueKey += 1;
  dialogue.value = {
    key: dialogueKey,
    text: resolved.text,
    tone: options.tone ?? resolved.tone ?? "speech",
    hold: options.hold ?? resolved.hold ?? 0,
  };
  lastSpokenAt = Date.now();

  if (dialogueTimer) clearTimeout(dialogueTimer);
  dialogueTimer = setTimeout(() => {
    // The bubble also dismisses itself; this is a safety net if it unmounts.
    if (dialogue.value?.key === dialogueKey) dialogue.value = null;
  }, 16000);
}

function dismissDialogue() {
  dialogue.value = null;
  if (dialogueTimer) clearTimeout(dialogueTimer);
  dialogueTimer = undefined;
}

/* -------------------------------------------------------------------------- */
/* Menu                                                                       */
/* -------------------------------------------------------------------------- */

const menuOpen = ref(false);
const menuToggleEl = ref<HTMLButtonElement | null>(null);

function openMenu() {
  registerActivity();
  cancelSession();
  if (movement.isMoving.value) movement.stop();
  dismissDialogue();
  menuOpen.value = true;
}

function closeMenu(returnFocus = false) {
  if (!menuOpen.value) return;
  menuOpen.value = false;
  if (returnFocus) {
    void nextTick(() => menuToggleEl.value?.focus({ preventScroll: true }));
  }
}

function toggleMenu() {
  if (menuOpen.value) closeMenu();
  else openMenu();
}

function onMenuSelect(item: CharacterMenuItem) {
  registerActivity();
  closeMenu();
  switch (item.action) {
    case "navigate":
      if (item.to) void router.push(item.to);
      break;
    case "coding":
      void runCodingSession();
      break;
    case "toggle-pause":
      togglePause();
      break;
    case "hide":
      hideCharacter();
      break;
  }
}

/* -------------------------------------------------------------------------- */
/* Placement                                                                  */
/* -------------------------------------------------------------------------- */

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), Math.max(min, max));
}

const menuToggleStyle = computed(() => {
  const width = viewport.value.width || 0;
  const height = viewport.value.height || 0;
  const left = clamp(movement.x.value + charWidth.value - 4, 8, width - 40);
  const top = clamp(movement.y.value + 5, 8, height - 40);
  return { left: `${left}px`, top: `${top}px` };
});

const laptopHotspotStyle = computed(() => {
  const typing = animation.currentState.value === "TYPING";
  const left = movement.x.value + charWidth.value * (typing ? 0.16 : 0.5);
  const top = movement.y.value + charHeight.value * (typing ? 0.64 : 0.42);
  return { left: `${left}px`, top: `${top}px` };
});

const bubblePlacement = computed<"above" | "below">(() =>
  movement.y.value > 258 ? "above" : "below",
);

const bubbleStyle = computed<Record<string, string>>(() => {
  const width = viewport.value.width || 0;
  const height = viewport.value.height || 0;
  const bubbleWidth = Math.min(isMobile.value ? 288 : 342, Math.max(220, width - 24));
  const center = movement.x.value + charWidth.value / 2;
  const left = clamp(center - bubbleWidth / 2, 12, Math.max(12, width - bubbleWidth - 12));
  const style: Record<string, string> = {
    left: `${left}px`,
    width: `${bubbleWidth}px`,
    "--chibi-tail-left": `${clamp(center - left, 22, bubbleWidth - 22)}px`,
  };

  if (bubblePlacement.value === "above") {
    style.bottom = `${height - movement.y.value + 12}px`;
  } else {
    style.top = `${movement.y.value + charHeight.value + 12}px`;
  }
  return style;
});

const menuStyle = computed<Record<string, string>>(() => {
  const width = viewport.value.width || 0;
  const height = viewport.value.height || 0;
  const menuWidth = Math.min(288, Math.max(240, width - 24));
  const charRight = movement.x.value + charWidth.value;
  const left = clamp(charRight - menuWidth, 12, Math.max(12, width - menuWidth - 12));
  const belowTop = movement.y.value + charHeight.value + 10;
  const aboveSpace = movement.y.value - 12;
  const belowSpace = height - belowTop - 12;
  const above = aboveSpace >= belowSpace;
  const style: Record<string, string> = {
    left: `${left}px`,
    width: `${menuWidth}px`,
    maxHeight: `${Math.max(220, Math.min(isMobile.value ? height * 0.7 : 440, (above ? aboveSpace : belowSpace) - 8))}px`,
  };

  if (above) style.bottom = `${height - movement.y.value + 10}px`;
  else style.top = `${belowTop}px`;
  return style;
});

/* -------------------------------------------------------------------------- */
/* Random helpers                                                             */
/* -------------------------------------------------------------------------- */

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function pick<T>(list: readonly T[]): T {
  return list[Math.floor(Math.random() * list.length)] as T;
}

function weightedPick<T extends { weight: number }>(list: readonly T[], avoid?: (item: T) => boolean): T {
  const filtered = list.length > 1 && avoid ? list.filter((item) => !avoid(item)) : list;
  const total = filtered.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;
  for (const item of filtered) {
    roll -= item.weight;
    if (roll <= 0) return item;
  }
  return filtered[filtered.length - 1] as T;
}

const relaxedStates = new Set<CharacterState>([
  "IDLE",
  "BLINKING",
  "LOOKING",
  "LOOKING_LEFT",
  "LOOKING_RIGHT",
  "HAPPY",
  "THINKING",
  "SHRUG",
]);

const idleStates = new Set<CharacterState>([
  "IDLE",
  "BLINKING",
  "LOOKING",
  "LOOKING_LEFT",
  "LOOKING_RIGHT",
]);

const clickReactions: Array<{ state: CharacterState; weight: number }> = [
  { state: "WAVING", weight: 34 },
  { state: "HAPPY", weight: 22 },
  { state: "THUMBS_UP", weight: 20 },
  { state: "SHRUG", weight: 14 },
  { state: "TYPING", weight: 10 },
];

/* -------------------------------------------------------------------------- */
/* Activity + sleep                                                           */
/* -------------------------------------------------------------------------- */

let lastActivity = Date.now();
let inactivityNotified = false;
let activityPointerAt = 0;
let wakingUp = false;

function registerActivity() {
  lastActivity = Date.now();
  inactivityNotified = false;

  if (animation.currentState.value === "SLEEPING" && !wakingUp) {
    wakingUp = true;
    animation.play("IDLE", { force: true });
    if (Math.random() < 0.35) say(pick(WAKE_LINES));
    if (wakingTimer) clearTimeout(wakingTimer);
    wakingTimer = setTimeout(() => {
      wakingUp = false;
    }, 900);
  }
}

function canBlink() {
  return (
    !hidden.value &&
    !motionPaused.value &&
    !dialogueOpen.value &&
    !menuOpen.value &&
    !movement.isDragging.value &&
    !movement.isMoving.value &&
    !document.hidden &&
    animation.currentState.value === "IDLE"
  );
}

function canIdleBehavior() {
  return (
    !hidden.value &&
    !motionPaused.value &&
    !dialogueOpen.value &&
    !menuOpen.value &&
    !movement.isDragging.value &&
    !movement.isMoving.value &&
    !document.hidden &&
    Date.now() - lastActivity > 8000 &&
    idleStates.has(animation.currentState.value)
  );
}

function checkInactivity() {
  if (
    !ready.value ||
    hidden.value ||
    motionPaused.value ||
    document.hidden ||
    menuOpen.value ||
    dialogueOpen.value ||
    movement.isDragging.value ||
    movement.isMoving.value
  ) {
    return;
  }

  const idleFor = Date.now() - lastActivity;
  if (idleFor > 26000 && !inactivityNotified && animation.currentState.value === "IDLE") {
    inactivityNotified = true;
    say(pick(INACTIVITY_LINES));
  }

  if (idleFor > 54000 && animation.currentState.value === "IDLE") {
    animation.play("SLEEPING", { force: true });
  }
}

/* -------------------------------------------------------------------------- */
/* Timers                                                                     */
/* -------------------------------------------------------------------------- */

let blinkTimer: ReturnType<typeof setTimeout> | undefined;
let randomTimer: ReturnType<typeof setTimeout> | undefined;
let wanderTimer: ReturnType<typeof setTimeout> | undefined;
let scrollStopTimer: ReturnType<typeof setTimeout> | undefined;
let scrollWalkTimer: ReturnType<typeof setTimeout> | undefined;
let scrollFrame: number | null = null;
let randomSleepTimer: ReturnType<typeof setTimeout> | undefined;
let introTimer: ReturnType<typeof setTimeout> | undefined;
let prefetchTimer: ReturnType<typeof setTimeout> | undefined;
let clickResetTimer: ReturnType<typeof setTimeout> | undefined;
let sparkleTimer: ReturnType<typeof setTimeout> | undefined;
let wakingTimer: ReturnType<typeof setTimeout> | undefined;
let dragLineTimer: ReturnType<typeof setTimeout> | undefined;
let inactivityTimer: ReturnType<typeof setInterval> | undefined;
let lastScrollY = 0;
let scrollDirection: "up" | "down" = "down";
let lastScrollReactionAt = 0;

const randomActions: Array<{ action: string; weight: number }> = [
  { action: "look", weight: 30 },
  { action: "typing", weight: 25 },
  { action: "stretch", weight: 15 },
  { action: "shrug", weight: 10 },
  { action: "laugh", weight: 8 },
  { action: "sleep", weight: 7 },
  { action: "celebrate", weight: 5 },
  { action: "facepalm", weight: 3 },
  { action: "confused", weight: 3 },
  { action: "jump", weight: 2 },
];

let lastRandomAction = "";

function scheduleBlink() {
  if (blinkTimer) clearTimeout(blinkTimer);
  blinkTimer = setTimeout(() => {
    if (canBlink()) animation.play("BLINKING");
    scheduleBlink();
  }, rand(4200, 8800));
}

function scheduleRandom(delay = rand(12000, 24000)) {
  if (randomTimer) clearTimeout(randomTimer);
  randomTimer = setTimeout(() => {
    if (!canIdleBehavior()) {
      scheduleRandom(rand(7000, 10000));
      return;
    }

    const choice = weightedPick(randomActions, (item) => item.action === lastRandomAction);
    lastRandomAction = choice.action;

    switch (choice.action) {
      case "look":
        animation.play("LOOKING");
        break;
      case "typing":
        animation.play("TYPING");
        if (Math.random() < 0.3) say(pick(TYPING_LINES));
        break;
      case "stretch":
        animation.play("STRETCHING");
        break;
      case "shrug":
        animation.play("SHRUG");
        break;
      case "laugh":
        animation.play("LAUGHING");
        break;
      case "sleep":
        animation.play("SLEEPING", { force: true });
        if (randomSleepTimer) clearTimeout(randomSleepTimer);
        randomSleepTimer = setTimeout(() => {
          if (animation.currentState.value === "SLEEPING") {
            animation.play("IDLE", { force: true });
          }
        }, 8500);
        break;
      case "celebrate":
        animation.play("CELEBRATING");
        break;
      case "facepalm":
        animation.play("FACEPALM");
        break;
      case "confused":
        animation.play("CONFUSED");
        break;
      case "jump":
        animation.play("JUMPING");
        break;
    }

    scheduleRandom();
  }, delay);
}

function canWander() {
  return (
    !hidden.value &&
    !motionPaused.value &&
    !dialogueOpen.value &&
    !menuOpen.value &&
    !movement.isDragging.value &&
    !movement.isMoving.value &&
    !document.hidden &&
    Date.now() - lastActivity > 6000 &&
    (animation.currentState.value === "IDLE" ||
      animation.currentState.value === "BLINKING" ||
      animation.currentState.value === "LOOKING" ||
      animation.currentState.value === "LOOKING_LEFT" ||
      animation.currentState.value === "LOOKING_RIGHT")
  );
}

function scheduleWander() {
  if (wanderTimer) clearTimeout(wanderTimer);
  wanderTimer = setTimeout(() => {
    if (canWander()) {
      if (movement.distanceFromHome() > 70 && Math.random() < 0.55) {
        movement.returnHome();
      } else {
        movement.walkStep(Math.random() < 0.5 ? "left" : "right", rand(45, 150));
      }
    }
    scheduleWander();
  }, rand(9000, 18000));
}

function clearBehaviorTimers() {
  if (blinkTimer) clearTimeout(blinkTimer);
  if (randomTimer) clearTimeout(randomTimer);
  if (wanderTimer) clearTimeout(wanderTimer);
  if (randomSleepTimer) clearTimeout(randomSleepTimer);
  if (sparkleTimer) clearTimeout(sparkleTimer);
  if (scrollWalkTimer) clearTimeout(scrollWalkTimer);
  if (dragLineTimer) clearTimeout(dragLineTimer);
  blinkTimer =
    randomTimer =
    wanderTimer =
    randomSleepTimer =
    sparkleTimer =
    scrollWalkTimer =
    dragLineTimer =
      undefined;
}

function startBehaviorTimers() {
  if (hidden.value || motionPaused.value) return;
  scheduleBlink();
  scheduleRandom();
  scheduleWander();
}

/* -------------------------------------------------------------------------- */
/* Interactions                                                               */
/* -------------------------------------------------------------------------- */

let clickCount = 0;
let lastClickAt = 0;
let suppressClickUntil = 0;

const dragState = {
  pointerId: -1,
  startX: 0,
  startY: 0,
  offsetX: 0,
  offsetY: 0,
  active: false,
};

function onCharacterClick() {
  if (Date.now() < suppressClickUntil || dragState.active) return;

  registerActivity();
  movement.stop();
  closeMenu();
  cancelSession();

  const now = Date.now();
  clickCount = now - lastClickAt < 3800 ? clickCount + 1 : 1;
  lastClickAt = now;
  if (clickResetTimer) clearTimeout(clickResetTimer);
  clickResetTimer = setTimeout(() => {
    clickCount = 0;
  }, 5200);

  if (clickCount === 1) {
    const reaction = weightedPick(clickReactions);
    if (reaction.state === "TYPING") {
      animation.play("TYPING", { force: true });
      say(pick(TYPING_LINES));
    } else {
      animation.play(reaction.state, { force: true });
      if (Math.random() < 0.4) say(pick(CLICK_REACTIONS));
    }
    return;
  }

  if (clickCount === 2) {
    animation.play("WAVING", { force: true });
    say(CLICK_REPEAT_LINES.second);
    return;
  }

  if (clickCount === 3) {
    animation.play("FACEPALM", { force: true });
    say(CLICK_REPEAT_LINES.third);
    return;
  }

  if (clickCount === 4) {
    animation.play("FACEPALM", { force: true });
    say(CLICK_REPEAT_LINES.fourth);
    return;
  }

  animation.play(clickCount % 2 === 0 ? "ANGRY" : "FACEPALM", { force: true });
  say(CLICK_REPEAT_LINES.fifth);
  if (clickCount >= 7) clickCount = 0;
}

function onPointerDown(event: PointerEvent) {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  if (hidden.value) return;

  registerActivity();
  const target = event.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();

  dragState.pointerId = event.pointerId;
  dragState.startX = event.clientX;
  dragState.startY = event.clientY;
  dragState.offsetX = event.clientX - rect.left;
  dragState.offsetY = event.clientY - rect.top;
  dragState.active = false;

  try {
    target.setPointerCapture(event.pointerId);
  } catch {
    // Pointer capture is best-effort; drag still works for normal pointers.
  }
}

function onPointerMove(event: PointerEvent) {
  if (event.pointerId !== dragState.pointerId) return;

  if (!dragState.active) {
    const dx = event.clientX - dragState.startX;
    const dy = event.clientY - dragState.startY;
    if (Math.hypot(dx, dy) < 7) return;
    dragState.active = true;
    movement.beginDrag(dragState.offsetX, dragState.offsetY);
  }

  registerActivity();
  movement.dragTo(event.clientX, event.clientY);
  event.preventDefault();
}

function endPointerInteraction(event: PointerEvent) {
  if (event.pointerId !== dragState.pointerId) return;

  const target = event.currentTarget as HTMLElement;
  try {
    target.releasePointerCapture(event.pointerId);
  } catch {
    // Ignore browsers that already released it.
  }

  if (dragState.active) {
    movement.endDrag();
    suppressClickUntil = Date.now() + 420;
    if (Math.random() < 0.45) {
      // Let the landing animation play; the line does not interrupt it.
      if (dragLineTimer) clearTimeout(dragLineTimer);
      dragLineTimer = setTimeout(() => say(pick(DRAG_LINES)), 260);
    }
  }

  dragState.pointerId = -1;
  dragState.active = false;
}

function onPointerCancel(event: PointerEvent) {
  if (event.pointerId !== dragState.pointerId) return;
  if (dragState.active) movement.endDrag();
  dragState.pointerId = -1;
  dragState.active = false;
}

let lastHoverAt = 0;
let lastHoverLineAt = 0;

function onPointerEnter(event: PointerEvent) {
  if (event.pointerType !== "mouse" || hidden.value) return;
  registerActivity();
  const now = Date.now();
  if (now - lastHoverAt < 1800) return;
  lastHoverAt = now;

  if (
    motionPaused.value ||
    dialogueOpen.value ||
    menuOpen.value ||
    movement.isDragging.value ||
    !relaxedStates.has(animation.currentState.value)
  ) {
    return;
  }

  if (Math.random() < 0.45) {
    const characterCenter = movement.x.value + charWidth.value / 2;
    animation.play(event.clientX < characterCenter ? "LOOKING_LEFT" : "LOOKING_RIGHT");
  }

  if (now - lastHoverLineAt > 45000 && Math.random() < 0.35) {
    lastHoverLineAt = now;
    say(pick(HOVER_LINES));
  }
}

function nudge(direction: -1 | 1) {
  if (movement.isDragging.value) return;
  registerActivity();
  closeMenu();
  movement.walkStep(direction === -1 ? "left" : "right", 30);
}

function onCharacterEscape() {
  if (menuOpen.value) closeMenu(true);
  else dismissDialogue();
}

/* -------------------------------------------------------------------------- */
/* Coding session + secret                                                    */
/* -------------------------------------------------------------------------- */

let sessionToken = 0;
const sessionTimers = new Set<ReturnType<typeof setTimeout>>();
const sessionWaiters = new Set<(ok: boolean) => void>();
const laptopClicks: number[] = [];
const sparkles = ref(false);
const showLaptopHotspot = computed(
  () =>
    !hidden.value &&
    !motionPaused.value &&
    (animation.currentState.value === "TYPING" || animation.currentState.value === "READING"),
);

function sessionWait(ms: number, token: number) {
  return new Promise<boolean>((resolve) => {
    const finish = (ok: boolean) => {
      sessionWaiters.delete(finish);
      resolve(ok && token === sessionToken);
    };
    sessionWaiters.add(finish);
    const timer = setTimeout(() => {
      sessionTimers.delete(timer);
      finish(true);
    }, ms);
    sessionTimers.add(timer);
  });
}

function cancelSession() {
  sessionToken += 1;
  for (const timer of sessionTimers) clearTimeout(timer);
  sessionTimers.clear();
  for (const waiter of sessionWaiters) waiter(false);
  sessionWaiters.clear();
}

async function runCodingSession() {
  if (hidden.value) return;

  registerActivity();
  cancelSession();
  const token = ++sessionToken;
  closeMenu();
  dismissDialogue();

  animation.play("TYPING", { force: true });
  say(CODING_SESSION.start);

  if (!(await sessionWait(1800, token))) return;
  say(CODING_SESSION.compiling);
  if (!(await sessionWait(1900, token))) return;
  say(CODING_SESSION.success);
  if (!(await sessionWait(1400, token))) return;

  say(CODING_SESSION.shipped);
  animation.play("CELEBRATING", { force: true });
  if (!(await sessionWait(2600, token))) return;
  animation.play("IDLE", { force: true });
}

function onLaptopClick() {
  if (hidden.value) return;
  registerActivity();
  closeMenu();
  dismissDialogue();

  const now = Date.now();
  while (laptopClicks.length && now - (laptopClicks[0] ?? 0) > 10000) laptopClicks.shift();
  laptopClicks.push(now);

  if (laptopClicks.length >= 5) {
    laptopClicks.length = 0;
    cancelSession();
    animation.play("COOL", { force: true });
    say(SECRET_LINE, { hold: 4500 });
    sparkles.value = true;
    if (sparkleTimer) clearTimeout(sparkleTimer);
    sparkleTimer = setTimeout(() => {
      sparkles.value = false;
    }, 3600);
    return;
  }

  void runCodingSession();
}

/* -------------------------------------------------------------------------- */
/* Pause / hide                                                               */
/* -------------------------------------------------------------------------- */

function togglePause() {
  userPaused.value = !userPaused.value;
  try {
    localStorage.setItem(STORAGE_PAUSED, userPaused.value ? "1" : "0");
  } catch {
    // Storage may be unavailable in private modes.
  }
}

watch(motionPaused, (paused) => {
  if (paused) {
    cancelSession();
    movement.stop();
    clearBehaviorTimers();
    sparkles.value = false;
    animation.setPaused(true);
    animation.play("IDLE", { force: true });
  } else if (!hidden.value) {
    animation.setPaused(false);
    animation.play("IDLE", { force: true });
    startBehaviorTimers();
  }
});

function hideCharacter() {
  hidden.value = true;
  try {
    localStorage.setItem(STORAGE_HIDDEN, "1");
  } catch {
    // Ignore storage failures.
  }

  cancelSession();
  clearBehaviorTimers();
  movement.stop();
  closeMenu();
  dismissDialogue();
  sparkles.value = false;
  animation.setPaused(true);
  animation.play("IDLE", { force: true });
}

function showCharacter() {
  hidden.value = false;
  try {
    localStorage.removeItem(STORAGE_HIDDEN);
  } catch {
    // Ignore storage failures.
  }

  registerActivity();
  void nextTick(() => {
    movement.setElement(characterEl.value);
    movement.refresh();
    movement.setPosition(movement.home.x, movement.home.y);
    animation.start();
    animation.setPaused(motionPaused.value);
    if (!motionPaused.value) {
      animation.play("WAVING", { force: true });
      startBehaviorTimers();
    }
    say(REVEAL_LINE);
  });
}

/* -------------------------------------------------------------------------- */
/* Scroll reactions + sections                                                */
/* -------------------------------------------------------------------------- */

function onScroll() {
  if (scrollFrame !== null) return;
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = null;
    if (typeof window === "undefined") return;
    const current = window.scrollY;
    scrollDirection = current > lastScrollY ? "down" : "up";
    lastScrollY = current;
    registerActivity();

    if (scrollStopTimer) clearTimeout(scrollStopTimer);
    scrollStopTimer = setTimeout(onScrollSettled, 190);
  });
}

function onScrollSettled() {
  if (
    hidden.value ||
    motionPaused.value ||
    dialogueOpen.value ||
    menuOpen.value ||
    movement.isDragging.value ||
    movement.isMoving.value ||
    !relaxedStates.has(animation.currentState.value)
  ) {
    return;
  }

  const now = Date.now();
  if (now - lastScrollReactionAt < 1700) return;
  lastScrollReactionAt = now;

  animation.play(scrollDirection === "down" ? "LOOKING_RIGHT" : "LOOKING_LEFT");

  if (Math.random() < 0.32) {
    const direction = Math.random() < 0.5 ? "left" : "right";
    if (scrollWalkTimer) clearTimeout(scrollWalkTimer);
    scrollWalkTimer = setTimeout(() => {
      if (canWander()) movement.walkStep(direction, rand(30, 90));
    }, 460);
  }
}

const seenSections = new Set<string>();
let introShownForRoute = false;

const { refresh: refreshSections } = useSectionObserver({
  onEnter: (section) => {
    if (hidden.value || menuOpen.value || dialogueOpen.value || movement.isDragging.value) return;

    const key = `${route.path}#${section}`;
    if (seenSections.has(key)) return;
    if (Date.now() - lastSpokenAt < 4200) return;

    const lines = SECTION_LINES[section];
    if (!lines?.length) return;

    seenSections.add(key);
    if (!motionPaused.value) animation.play("POINTING");
    say(pick(lines));
  },
});

function routeLineFor(returningHome: boolean): { line: DialogueLine; section?: string } | null {
  if (returningHome) return { line: RETURNING_HOME_LINE };
  const skills = SECTION_LINES.skills;
  if (route.hash === "#stack" && skills?.length) {
    return { line: pick(skills), section: "skills" };
  }
  const about = SECTION_LINES.about;
  if (route.hash === "#what-i-do" && about?.length) {
    return { line: pick(about), section: "about" };
  }
  const line = ROUTE_INTROS[route.path];
  return line ? { line } : null;
}

function showRouteLine(returningHome: boolean) {
  if (hidden.value) return;
  const resolved = routeLineFor(returningHome);
  if (!resolved) return;
  if (!returningHome && introShownForRoute) return;
  introShownForRoute = true;
  if (resolved.section) seenSections.add(`${route.path}#${resolved.section}`);
  if (!motionPaused.value) animation.play(returningHome ? "WAVING" : "POINTING");
  say(resolved.line);
  lastSpokenAt = Date.now();
}

watch(
  () => route.fullPath,
  (_to, from) => {
    closeMenu();
    cancelSession();
    lastSpokenAt = Date.now();
    if (!hidden.value && !motionPaused.value) movement.returnHome();
    if (introTimer) clearTimeout(introTimer);
    introShownForRoute = false;

    introTimer = setTimeout(() => {
      if (hidden.value) return;
      showRouteLine(route.path === "/" && Boolean(from) && from.path !== "/");
      void refreshSections();
      lastScrollY = window.scrollY;
    }, 700);
  },
);

/* -------------------------------------------------------------------------- */
/* Lifecycle                                                                  */
/* -------------------------------------------------------------------------- */

const characterEl = ref<HTMLButtonElement | null>(null);
let motionQuery: MediaQueryList | null = null;
let idleCallbackId: number | null = null;

function onResize() {
  viewport.value = { width: window.innerWidth, height: window.innerHeight };
  movement.refresh();
}

function onVisibilityChange() {
  if (document.hidden) {
    animation.setPaused(true);
    movement.stop();
    cancelSession();
    clearBehaviorTimers();
    sparkles.value = false;
  } else {
    registerActivity();
    animation.setPaused(motionPaused.value);
    movement.refresh();
    startBehaviorTimers();
  }
}

function onGlobalPointerMove() {
  const now = Date.now();
  if (now - activityPointerAt < 450) return;
  activityPointerAt = now;
  registerActivity();
}

function onGlobalKeydown() {
  registerActivity();
}

function onGlobalTouchStart() {
  registerActivity();
}

function onMotionPreferenceChange(event: MediaQueryListEvent) {
  prefersReduced.value = event.matches;
}

watch(characterEl, (element) => {
  if (!element) return;
  movement.setElement(element);
  movement.refresh();
});

onMounted(async () => {
  try {
    hidden.value = localStorage.getItem(STORAGE_HIDDEN) === "1";
    userPaused.value = localStorage.getItem(STORAGE_PAUSED) === "1";
  } catch {
    hidden.value = false;
  }

  motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  prefersReduced.value = motionQuery.matches;
  motionQuery.addEventListener?.("change", onMotionPreferenceChange);

  viewport.value = { width: window.innerWidth, height: window.innerHeight };
  lastScrollY = window.scrollY;
  lastSpokenAt = Date.now();

  window.addEventListener("resize", onResize, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("pointermove", onGlobalPointerMove, { passive: true });
  window.addEventListener("keydown", onGlobalKeydown, { passive: true });
  window.addEventListener("touchstart", onGlobalTouchStart, { passive: true });
  document.addEventListener("visibilitychange", onVisibilityChange);

  ready.value = true;
  await nextTick();

  movement.setElement(characterEl.value);
  movement.refresh();

  if (!hidden.value) {
    animation.start();
    animation.setPaused(motionPaused.value || document.hidden);

    // Warm the frames needed for the first impression, then prefetch rare
    // interaction sprites when the main thread is idle.
    preloadSpriteNames(framesForStates(PRIORITY_STATES));
    const idlePrefetch = () => preloadSpriteNames(framesForStates(LAZY_STATES));
    const idleWindow = window as Window & {
      requestIdleCallback?: (cb: IdleRequestCallback, opts?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    if (idleWindow.requestIdleCallback) {
      idleCallbackId = idleWindow.requestIdleCallback(idlePrefetch, { timeout: 6000 });
    } else {
      prefetchTimer = setTimeout(idlePrefetch, 3500);
    }

    startBehaviorTimers();

    introTimer = setTimeout(() => {
      if (hidden.value || dialogueOpen.value || menuOpen.value) return;
      const resolved = routeLineFor(false);
      if (!resolved) return;
      introShownForRoute = true;
      if (resolved.section) seenSections.add(`${route.path}#${resolved.section}`);
      if (!motionPaused.value) animation.play("WAVING");
      say(resolved.line);
      lastSpokenAt = Date.now();
    }, 1900);
  }

  inactivityTimer = setInterval(checkInactivity, 5000);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("pointermove", onGlobalPointerMove);
  window.removeEventListener("keydown", onGlobalKeydown);
  window.removeEventListener("touchstart", onGlobalTouchStart);
  document.removeEventListener("visibilitychange", onVisibilityChange);
  motionQuery?.removeEventListener?.("change", onMotionPreferenceChange);

  if (scrollFrame !== null) cancelAnimationFrame(scrollFrame);
  if (scrollStopTimer) clearTimeout(scrollStopTimer);
  if (introTimer) clearTimeout(introTimer);
  if (prefetchTimer) clearTimeout(prefetchTimer);
  if (clickResetTimer) clearTimeout(clickResetTimer);
  if (dialogueTimer) clearTimeout(dialogueTimer);
  if (wakingTimer) clearTimeout(wakingTimer);
  if (inactivityTimer) clearInterval(inactivityTimer);
  clearBehaviorTimers();
  cancelSession();

  const idleWindow = window as Window & { cancelIdleCallback?: (handle: number) => void };
  if (idleCallbackId !== null) idleWindow.cancelIdleCallback?.(idleCallbackId);

  animation.dispose();
  movement.dispose();
});
</script>

<template>
  <ClientOnly>
    <div
      v-if="ready"
      class="chibi-root"
      :class="{ 'chibi-motion-paused': motionPaused }"
    >
      <template v-if="!hidden">
        <button
          ref="characterEl"
          type="button"
          class="chibi-character"
          :style="{ width: `${charWidth}px`, height: `${charHeight}px` }"
          aria-label="Chibi, your portfolio guide. Press Enter to interact, use the arrow keys to step left or right, or drag to move me."
          @click="onCharacterClick"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="endPointerInteraction"
          @pointercancel="onPointerCancel"
          @pointerenter="onPointerEnter"
          @keydown.left.prevent="nudge(-1)"
          @keydown.right.prevent="nudge(1)"
          @keydown.esc="onCharacterEscape"
          @contextmenu.prevent
        >
          <span class="chibi-aura" aria-hidden="true" />
          <span class="chibi-ground-shadow" aria-hidden="true" />
          <CharacterSprite :sprite="frameSprite" :mirror="mirror" />

          <span v-if="animation.currentState.value === 'SLEEPING' && !motionPaused" class="chibi-zzz" aria-hidden="true">
            <span>Z</span><i>z</i><i>z</i>
          </span>

          <span v-if="sparkles" class="chibi-sparkles" aria-hidden="true">
            <span>✦</span><span>✦</span><span>✦</span><span>✦</span><span>✦</span>
          </span>
        </button>

        <button
          ref="menuToggleEl"
          type="button"
          class="chibi-menu-toggle"
          :style="menuToggleStyle"
          data-chibi-menu-toggle
          :aria-label="menuOpen ? 'Close Chibi’s menu' : 'Open Chibi’s menu'"
          aria-controls="chibi-menu"
          aria-haspopup="menu"
          :aria-expanded="menuOpen"
          @click="toggleMenu"
        >
          <Icon name="lucide:message-circle" class="chibi-menu-toggle-icon" aria-hidden="true" />
        </button>

        <button
          v-if="showLaptopHotspot"
          type="button"
          class="chibi-laptop-hotspot"
          :style="laptopHotspotStyle"
          aria-label="Run the portfolio build on Chibi's laptop"
          title="Run npm run portfolio"
          @click="onLaptopClick"
        >
          <Icon name="lucide:terminal" class="chibi-hotspot-icon" aria-hidden="true" />
        </button>

        <CharacterDialogue
          v-if="dialogue"
          :key="dialogue.key"
          :text="dialogue.text"
          :tone="dialogue.tone"
          :hold="dialogue.hold"
          :reduced-motion="prefersReduced"
          :placement="bubblePlacement"
          :style="bubbleStyle"
          @dismiss="dismissDialogue"
        />

        <CharacterMenu
          v-if="menuOpen"
          :items="CHARACTER_MENU"
          :paused="userPaused"
          :system-reduced="prefersReduced"
          :style="menuStyle"
          @close="closeMenu"
          @select="onMenuSelect"
        />
      </template>

      <button
        v-else
        type="button"
        class="chibi-restore"
        aria-label="Show Chibi, your portfolio guide"
        @click="showCharacter"
      >
        <Icon name="lucide:sparkles" class="chibi-restore-icon" aria-hidden="true" />
        <span>Chibi</span>
      </button>
    </div>
  </ClientOnly>
</template>
