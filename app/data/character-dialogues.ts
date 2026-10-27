/**
 * Every line Chibi can say lives here.
 *
 * Components never hardcode copy. Add or edit lines without touching the
 * behaviour layer.
 */

export interface DialogueOptions {
  /** Extra reading time in ms after typing finishes. */
  hold?: number;
  tone?: "speech" | "terminal";
}

export interface DialogueLine {
  text: string;
  hold?: number;
  tone?: "speech" | "terminal";
}

export const WELCOME: DialogueLine = {
  text: "Welcome. I built this place. Most of it works.",
};

export const ROUTE_INTROS: Record<string, DialogueLine> = {
  "/": WELCOME,
  "/about": { text: "Apparently I have to explain myself here." },
  "/project": { text: "These projects survived production. Mostly." },
  "/contact": { text: "You can message me. I might even reply." },
  "/blog": { text: "I write things down so future me suffers less." },
  "/open-source": { text: "Code I gave away. You're welcome." },
};

export const SECTION_LINES: Record<string, DialogueLine[]> = {
  hero: [
    { text: "Welcome. I built this place. Most of it works." },
    { text: "Scroll down. I promise the good bits are real." },
  ],
  projects: [
    { text: "These projects survived production. Mostly." },
    { text: "This is the part where I pretend my code is organized." },
  ],
  "projects-archive": [
    { text: "The full archive. No filter, like my commit history." },
    { text: "Pick one. I'll act surprised if you like it." },
  ],
  clients: [
    { text: "Past clients. They trusted me near production. Brave." },
    { text: "Logos. The professional version of a friendship bracelet." },
  ],
  services: [
    { text: "Things I do for money. Shocking, I know." },
    { text: "Websites, agents, automations. Pick your adventure." },
  ],
  process: [
    { text: "A process. Not just vibes and caffeine." },
    { text: "Strategy, build, launch. In that order, ideally." },
  ],
  results: [
    { text: "Numbers. The only opinions I trust." },
    { text: "Results that survived a dashboard screenshot." },
  ],
  book: [
    { text: "This button books a call. Less scary than it looks." },
    { text: "Fifteen minutes. I'll bring the laptop and opinions." },
  ],
  cta: [
    { text: "Ready when you are. I'll bring the laptop." },
    { text: "One button. Infinite possibilities. No pressure." },
  ],
  "open-source": [
    { text: "Code I gave away. You're welcome." },
    { text: "Open source: because debugging alone is boring." },
  ],
  about: [
    { text: "Here's the polished version of what I do." },
    { text: "Apparently I have to explain myself here." },
  ],
  skills: [
    { text: "Yes, I know JavaScript. Unfortunately." },
    { text: "A carefully curated list of things I've Googled." },
  ],
  contact: [
    { text: "You can message me. I might even reply." },
    { text: "Need something built? This button is surprisingly useful." },
    { text: "Email, WhatsApp, LinkedIn. Choose your quest." },
  ],
  blog: [
    { text: "Notes from the trenches. Some of them are even useful." },
    { text: "I write so future me suffers less. You're welcome too." },
  ],
};

export const CLICK_REACTIONS: DialogueLine[] = [
  { text: "Hey." },
  { text: "Oh. A visitor." },
  { text: "You clicked me. Bold." },
  { text: "I'm not just a pretty sprite, you know." },
  { text: "Careful. I charge by the click." },
];

export const CLICK_REPEAT_LINES = {
  second: { text: "Oh, hello again." },
  third: { text: "Are we stress-testing my patience?" },
  fourth: { text: "You really like clicking things." },
  fifth: { text: "I'm going to start charging rent." },
};

export const HOVER_LINES: DialogueLine[] = [
  { text: "Yes?" },
  { text: "You need something?" },
  { text: "I can see you hovering." },
  { text: "No, I don't do autographs." },
];

export const DRAG_LINES: DialogueLine[] = [
  { text: "Excuse me. I'm not a desktop shortcut." },
  { text: "Put me down. I have CSS to fix." },
  { text: "This is not in my job description." },
  { text: "I'm calling the accessibility inspector." },
];

export const DROP_LINES: DialogueLine[] = [
  { text: "Fine. This is my spot now." },
  { text: "You could have just asked." },
  { text: "My feet were not designed for this." },
];

export const SLEEP_LINES: DialogueLine[] = [
  { text: "Zzz." },
  { text: "Five more minutes. The build is almost done." },
];

export const WAKE_LINES: DialogueLine[] = [
  { text: "I wasn't sleeping. I was compiling." },
  { text: "Who touched my keyboard?" },
  { text: "Back to work. Allegedly." },
];

export const INACTIVITY_LINES: DialogueLine[] = [
  { text: "Still here? I respect the commitment." },
  { text: "I'm not stuck. I'm thinking. Professionally." },
];

export const RETURNING_HOME_LINE: DialogueLine = {
  text: "Back to my natural habitat.",
};

export const REVEAL_LINE: DialogueLine = {
  text: "Fine. I'm back. Did you miss me?",
};

export const TYPING_LINES: DialogueLine[] = [
  { text: "Compiling excuses..." },
  { text: "Do not disturb. The linter is judging me." },
];

export const FAILURE_LINE: DialogueLine = {
  text: "It worked on localhost.",
};

export const CODING_SESSION = {
  start: { text: "> npm run portfolio", hold: 1500, tone: "terminal" as const },
  compiling: { text: "> compiling...", hold: 1600, tone: "terminal" as const },
  success: { text: "> success!", hold: 1200, tone: "terminal" as const },
  shipped: { text: "Shipped. Probably.", hold: 2200 },
  failed: { text: "It worked on localhost.", hold: 2200 },
};

export const SECRET_LINE: DialogueLine = {
  text: "You found the secret. Please don't tell the other portfolios.",
};

export const SECRET_TEASE_LINES: DialogueLine[] = [
  { text: "Again? The laptop is not a toy." },
  { text: "Keep going. I'm sure something will happen." },
  { text: "This is a very strange way to debug." },
];

export const HIDE_LINE: DialogueLine = {
  text: "Hiding. Very well. I'll be over here. Judging.",
};

/**
 * Character menu. Routes point at real pages and anchors in the site.
 */
export type CharacterMenuAction =
  | "navigate"
  | "coding"
  | "toggle-pause"
  | "hide";

export interface CharacterMenuItem {
  id: string;
  label: string;
  icon: string;
  action: CharacterMenuAction;
  to?: string;
  disabled?: boolean;
}

export const CHARACTER_MENU: CharacterMenuItem[] = [
  {
    id: "projects",
    label: "Show me your projects",
    icon: "lucide:folder-open",
    action: "navigate",
    to: "/project",
  },
  {
    id: "about",
    label: "Tell me about yourself",
    icon: "lucide:user-round",
    action: "navigate",
    to: "/about",
  },
  {
    id: "stack",
    label: "What technologies do you use?",
    icon: "lucide:cpu",
    action: "navigate",
    to: "/about#stack",
  },
  {
    id: "contact",
    label: "How can I contact you?",
    icon: "lucide:mail",
    action: "navigate",
    to: "/contact",
  },
  {
    id: "coding",
    label: "Start a coding session",
    icon: "lucide:terminal",
    action: "coding",
  },
  {
    id: "pause",
    label: "Pause animations",
    icon: "lucide:pause",
    action: "toggle-pause",
  },
  {
    id: "hide",
    label: "Hide character",
    icon: "lucide:eye-off",
    action: "hide",
  },
];

export const CHARACTER_LABEL = "Chibi, your portfolio guide";
