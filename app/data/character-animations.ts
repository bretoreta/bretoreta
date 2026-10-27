import manifest from "./character-manifest.json";

/**
 * Central animation catalog for Chibi.
 *
 * Frames are sprite names from `character-manifest.json`. The offline
 * extraction script normalises every full-body frame to the same 144×176
 * canvas and foot baseline, so switching states never moves the character.
 *
 * State names intentionally match the spec (IDLE, WALKING_RIGHT, …) so the
 * behaviour code reads like the animation design document.
 */
export type CharacterState =
  | "IDLE"
  | "BLINKING"
  | "LOOKING"
  | "LOOKING_LEFT"
  | "LOOKING_RIGHT"
  | "WALKING_LEFT"
  | "WALKING_RIGHT"
  | "TALKING"
  | "THINKING"
  | "TYPING"
  | "READING"
  | "WAVING"
  | "POINTING"
  | "THUMBS_UP"
  | "SHRUG"
  | "HAPPY"
  | "EXCITED"
  | "CONFUSED"
  | "SAD"
  | "FACEPALM"
  | "LAUGHING"
  | "SLEEPING"
  | "STRETCHING"
  | "JUMPING"
  | "LANDING"
  | "DRAGGING"
  | "SCARED"
  | "ANGRY"
  | "CELEBRATING"
  | "COOL";

export interface SpriteRecord {
  name: string;
  file: string;
  category: string;
  index: number;
  width: number;
  height: number;
  anchor: { x: number; y: number };
  duration: number;
  fps: number;
  loop: boolean;
  source: { x: number; y: number; width: number; height: number };
}

export interface CharacterAnimation {
  frames: string[];
  fps: number;
  loop: boolean;
  /** Shortest time the state may stay visible. */
  minDuration: number;
  /** 0 means "until the controller explicitly changes state". */
  maxDuration: number;
  priority: number;
  /** Can another state interrupt this one without forcing? */
  interruptible: boolean;
  /** Sensible follow-up states, used by the state machine guard. */
  next: CharacterState[];
}

export const SPRITES = manifest.sprites as Record<string, SpriteRecord>;

export const SPRITE_CANVAS = manifest.canvas;
export const PORTRAIT_CANVAS = manifest.portraitCanvas;

const RECOVERY: CharacterState[] = [
  "IDLE",
  "BLINKING",
  "LOOKING",
  "WALKING_LEFT",
  "WALKING_RIGHT",
  "HAPPY",
  "THINKING",
  "TYPING",
  "READING",
];

const AFTER_INTERACTION: CharacterState[] = [
  "IDLE",
  "BLINKING",
  "LOOKING",
  "WALKING_LEFT",
  "WALKING_RIGHT",
];

export const ANIMATIONS: Record<CharacterState, CharacterAnimation> = {
  IDLE: {
    frames: ["idle_1", "idle_2", "idle_3", "idle_4"],
    fps: 3,
    loop: true,
    minDuration: 0,
    maxDuration: 0,
    priority: 0,
    interruptible: true,
    next: ["BLINKING", "LOOKING", "WALKING_LEFT", "WALKING_RIGHT", "TYPING", "READING"],
  },
  BLINKING: {
    // blink_1 is open, blink_2 is closed. Play open → closed → open quickly.
    frames: ["blink_1", "blink_2", "blink_1"],
    fps: 12,
    loop: false,
    minDuration: 200,
    maxDuration: 280,
    priority: 10,
    interruptible: true,
    next: ["IDLE", "LOOKING", "WALKING_LEFT", "WALKING_RIGHT"],
  },
  LOOKING: {
    frames: ["look_left", "look_center", "look_right", "look_center"],
    fps: 2.5,
    loop: true,
    minDuration: 1200,
    maxDuration: 2400,
    priority: 12,
    interruptible: true,
    next: ["IDLE", "BLINKING", "WALKING_LEFT", "WALKING_RIGHT"],
  },
  LOOKING_LEFT: {
    frames: ["look_left"],
    fps: 2,
    loop: false,
    minDuration: 700,
    maxDuration: 1100,
    priority: 12,
    interruptible: true,
    next: ["IDLE", "BLINKING", "WALKING_LEFT"],
  },
  LOOKING_RIGHT: {
    frames: ["look_right"],
    fps: 2,
    loop: false,
    minDuration: 700,
    maxDuration: 1100,
    priority: 12,
    interruptible: true,
    next: ["IDLE", "BLINKING", "WALKING_RIGHT"],
  },
  WALKING_LEFT: {
    frames: ["walk_1", "walk_2", "walk_3", "walk_4", "walk_5", "walk_6", "walk_7", "walk_8"],
    fps: 10,
    loop: true,
    minDuration: 0,
    maxDuration: 0,
    priority: 20,
    interruptible: true,
    next: ["IDLE", "LOOKING", "TYPING", "WAVING", "HAPPY", "TALKING"],
  },
  WALKING_RIGHT: {
    frames: ["walk_1", "walk_2", "walk_3", "walk_4", "walk_5", "walk_6", "walk_7", "walk_8"],
    fps: 10,
    loop: true,
    minDuration: 0,
    maxDuration: 0,
    priority: 20,
    interruptible: true,
    next: ["IDLE", "LOOKING", "TYPING", "WAVING", "HAPPY", "TALKING"],
  },
  TALKING: {
    // Used by the speech-bubble portrait. The body stays grounded and idle.
    frames: ["talk_1", "talk_2", "talk_3", "talk_4", "talk_5", "talk_6"],
    fps: 6,
    loop: true,
    minDuration: 0,
    maxDuration: 0,
    priority: 35,
    interruptible: true,
    next: ["IDLE", "TYPING", "READING"],
  },
  THINKING: {
    frames: ["thinking"],
    fps: 2,
    loop: false,
    minDuration: 1400,
    maxDuration: 2600,
    priority: 40,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
  TYPING: {
    frames: ["type_1", "type_2", "type_3", "type_4"],
    fps: 8,
    loop: true,
    minDuration: 1500,
    maxDuration: 9000,
    priority: 30,
    interruptible: true,
    next: ["IDLE", "CELEBRATING", "LOOKING", "WALKING_LEFT", "WALKING_RIGHT"],
  },
  READING: {
    frames: ["read"],
    fps: 2,
    loop: false,
    minDuration: 1600,
    maxDuration: 3200,
    priority: 30,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
  WAVING: {
    frames: ["wave"],
    fps: 2,
    loop: false,
    minDuration: 900,
    maxDuration: 1500,
    priority: 45,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
  POINTING: {
    frames: ["point"],
    fps: 2,
    loop: false,
    minDuration: 1200,
    maxDuration: 2000,
    priority: 45,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
  THUMBS_UP: {
    frames: ["thumbs_up"],
    fps: 2,
    loop: false,
    minDuration: 900,
    maxDuration: 1600,
    priority: 45,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
  SHRUG: {
    frames: ["shrug"],
    fps: 2,
    loop: false,
    minDuration: 1000,
    maxDuration: 1800,
    priority: 45,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
  HAPPY: {
    frames: ["happy"],
    fps: 2,
    loop: false,
    minDuration: 1000,
    maxDuration: 1700,
    priority: 45,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
  EXCITED: {
    frames: ["excited"],
    fps: 4,
    loop: true,
    minDuration: 1200,
    maxDuration: 2000,
    priority: 55,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
  CONFUSED: {
    frames: ["confused"],
    fps: 2,
    loop: false,
    minDuration: 1200,
    maxDuration: 1900,
    priority: 45,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
  SAD: {
    frames: ["sad"],
    fps: 2,
    loop: false,
    minDuration: 1400,
    maxDuration: 2200,
    priority: 45,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
  FACEPALM: {
    frames: ["facepalm"],
    fps: 2,
    loop: false,
    minDuration: 1100,
    maxDuration: 1700,
    priority: 55,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
  LAUGHING: {
    frames: ["laugh"],
    fps: 4,
    loop: true,
    minDuration: 1200,
    maxDuration: 2000,
    priority: 55,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
  SLEEPING: {
    frames: ["sleep"],
    fps: 2,
    loop: false,
    minDuration: 2000,
    maxDuration: 0,
    priority: 8,
    interruptible: true,
    next: ["IDLE", "BLINKING", "WALKING_LEFT", "WALKING_RIGHT"],
  },
  STRETCHING: {
    frames: ["stretch"],
    fps: 2,
    loop: false,
    minDuration: 1200,
    maxDuration: 1800,
    priority: 50,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
  JUMPING: {
    frames: ["jump", "air", "land"],
    fps: 7,
    loop: false,
    minDuration: 900,
    maxDuration: 1300,
    priority: 70,
    interruptible: false,
    next: ["IDLE", "CELEBRATING", "HAPPY"],
  },
  LANDING: {
    frames: ["land"],
    fps: 2,
    loop: false,
    minDuration: 380,
    maxDuration: 560,
    priority: 75,
    interruptible: false,
    next: ["IDLE", "LOOKING", "WALKING_LEFT", "WALKING_RIGHT"],
  },
  DRAGGING: {
    frames: ["drag_1", "drag_2", "drag_3"],
    fps: 9,
    loop: true,
    minDuration: 0,
    maxDuration: 0,
    priority: 100,
    interruptible: false,
    next: ["LANDING", "IDLE"],
  },
  SCARED: {
    frames: ["scared"],
    fps: 4,
    loop: true,
    minDuration: 900,
    maxDuration: 1500,
    priority: 55,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
  ANGRY: {
    frames: ["angry"],
    fps: 4,
    loop: true,
    minDuration: 1200,
    maxDuration: 1900,
    priority: 55,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
  CELEBRATING: {
    frames: ["celebrate"],
    fps: 4,
    loop: true,
    minDuration: 1500,
    maxDuration: 2400,
    priority: 60,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
  COOL: {
    frames: ["cool"],
    fps: 2,
    loop: false,
    minDuration: 1800,
    maxDuration: 2800,
    priority: 50,
    interruptible: true,
    next: AFTER_INTERACTION,
  },
};

/** Frames worth loading before the first dialogue/idle cycle. */
export const PRIORITY_STATES: CharacterState[] = [
  "IDLE",
  "BLINKING",
  "LOOKING",
  "TALKING",
];

/** Secondary frames (walking + rare interactions), prefetched during idle time. */
export const LAZY_STATES: CharacterState[] = [
  "WALKING_RIGHT",
  "TYPING",
  "READING",
  "WAVING",
  "POINTING",
  "THUMBS_UP",
  "SHRUG",
  "HAPPY",
  "EXCITED",
  "CONFUSED",
  "SAD",
  "FACEPALM",
  "LAUGHING",
  "SLEEPING",
  "STRETCHING",
  "JUMPING",
  "LANDING",
  "DRAGGING",
  "SCARED",
  "ANGRY",
  "CELEBRATING",
  "COOL",
];

export function framesForStates(states: CharacterState[]): string[] {
  const names = new Set<string>();
  for (const state of states) {
    for (const frame of ANIMATIONS[state].frames) names.add(frame);
  }
  return [...names];
}

export function spriteForFrame(frameName: string): SpriteRecord | undefined {
  return SPRITES[frameName];
}

/** Warm the browser cache without blocking the page. */
export function preloadSpriteNames(names: string[]): void {
  if (typeof window === "undefined") return;
  for (const name of names) {
    const sprite = SPRITES[name];
    if (!sprite) continue;
    const image = new Image();
    image.decoding = "async";
    image.src = sprite.file;
  }
}
