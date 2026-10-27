# Implementation Prompt: Interactive Pixel-Art Portfolio Character

## 1. Project Objective

Build a fully interactive, animated pixel-art developer companion for my existing portfolio website using the **transparent PNG sprite sheet I have provided**.

The character is a messy-haired, hoodie-wearing programmer with a tiny laptop, a sarcastic personality, and multiple animation states.

The character should behave like a small NPC in an indie video game, wandering around the website, responding to visitors, and providing useful navigation guidance.

**Important:** Inspect my existing portfolio codebase, technology stack, styling conventions, components, and animation libraries before implementing anything. Reuse existing architecture and dependencies wherever practical.

Do not rebuild my website or unnecessarily introduce large animation frameworks.

## 2. Sprite Sheet Processing

The provided PNG contains multiple character poses and animation frames.

### Required sprite groups

| Group                | Sprites                                                                                        | Purpose                      |
| -------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------- |
| Walking              | walk_1–walk_8                                                                                  | Horizontal movement          |
| Talking              | talk_1–talk_6                                                                                  | Dialogue and speech          |
| Idle                 | idle_1–idle_4                                                                                  | Breathing and waiting        |
| Blinking             | blink_1–blink_2                                                                                | Natural eye movement         |
| Looking around       | look_left, look_center, look_right                                                             | Following page activity      |
| Emotions             | happy, excited, thinking, confused, sad                                                        | Contextual reactions         |
| Laptop work          | sit_idle, type_1–type_4, look_up                                                               | Coding animations            |
| Standing with laptop | hold_laptop, read, type_stand                                                                  | Developer interactions       |
| Dragging             | drag_1–drag_3                                                                                  | Drag-and-drop reactions      |
| Jumping              | jump, air, land                                                                                | Landing and playful movement |
| Other reactions      | wave, point, thumbs_up, shrug, facepalm, laugh, sleep, stretch, celebrate, scared, angry, cool | Random interactions          |

### Asset processing requirements

1. Inspect the actual dimensions and transparency of the PNG.
2. Identify every individual character sprite.
3. Remove any remaining sheet labels, decorative elements, and unwanted background pixels from the extracted sprites.
4. Preserve the character's original appearance, pixel-art styling, clothing, and proportions.
5. Do not redraw, regenerate, or substitute the character.
6. Extract individual sprites into transparent PNG assets.
7. Preserve natural pixel edges without introducing blur.
8. Normalize canvas sizes for related animation frames.
9. Align sprites to consistent foot positions to eliminate jumping or jitter between frames.
10. Preserve intentional visual differences between poses.

The image may not be a uniform machine-readable sprite atlas. Detect actual character boundaries rather than blindly splitting it into equally sized tiles.

If the extraction is ambiguous, generate an annotated preview for manual correction rather than silently producing incorrect frames.

### Suggested asset structure

```text
public/
  assets/
    character/
      original/
        character-sheet.png
      walking/
        walk_1.png
        ...
        walk_8.png
      talking/
        talk_1.png
        ...
        talk_6.png
      idle/
      blink/
      emotions/
      laptop/
      dragging/
      jumping/
      interactions/
      character-manifest.json
```

Generate a manifest containing each sprite's file path, dimensions, anchor position, animation category, and recommended playback duration.

## 3. Character Placement

The character should initially appear near the **bottom-right corner** of the portfolio.

Desktop target height: approximately 120–160px.

Mobile target height: approximately 70–100px.

These are display dimensions, not source image dimensions.

Requirements:

- Position using a fixed overlay so the character remains available while browsing.
- Avoid obscuring buttons, navigation, text inputs, and important content.
- Respect device safe areas.
- Keep the character visible within viewport boundaries.
- Use `image-rendering: pixelated` where appropriate.
- Maintain the sprite's aspect ratio.
- Support touchscreens and desktop browsers.

The character may temporarily walk toward sections or nearby UI elements but should remain within safe viewport boundaries.

## 4. Animation State Machine

Build a centralized animation state machine.

States:

```text
IDLE
BLINKING
LOOKING
WALKING_LEFT
WALKING_RIGHT
TALKING
THINKING
TYPING
READING
WAVING
POINTING
HAPPY
EXCITED
CONFUSED
SAD
FACEPALM
LAUGHING
SLEEPING
STRETCHING
JUMPING
LANDING
DRAGGING
SCARED
ANGRY
CELEBRATING
COOL
```

Each state should specify:

- Animation frames
- Playback speed
- Whether it loops
- Minimum and maximum duration
- Possible next states
- Priority
- Whether user actions can interrupt it

Example:

```javascript
const animations = {
  idle: {
    frames: ["idle_1", "idle_2", "idle_3", "idle_4"],
    fps: 3,
    loop: true,
  },
  walking: {
    frames: [
      "walk_1",
      "walk_2",
      "walk_3",
      "walk_4",
      "walk_5",
      "walk_6",
      "walk_7",
      "walk_8",
    ],
    fps: 9,
    loop: true,
  },
  talking: {
    frames: ["talk_1", "talk_2", "talk_3", "talk_4", "talk_5", "talk_6"],
    fps: 5,
    loop: true,
  },
};
```

Implement proper state transitions so animation sequences never conflict.

For example, the character should not suddenly start sleeping in the middle of being dragged.

## 5. Walking and Movement

The character should be able to wander around the visible website.

### Walking behavior

- Walk left or right.
- Reverse direction when appropriate.
- Occasionally stop and look around.
- Sometimes sit down and use the laptop.
- Wander only when the user is not actively interacting.
- Return toward the default position after exploring.

Use actual walking frames instead of sliding a static image.

Synchronize movement speed with the walking animation so the character does not appear to skate.

For left-facing movement, mirror right-facing frames if dedicated left-facing sprites are unavailable and mirroring does not create an obvious visual problem.

### Scroll reactions

When the visitor scrolls:

- Look in the direction of movement.
- Occasionally walk a short distance.
- React to entering new portfolio sections.
- Return to idle when scrolling stops.

Avoid continuously triggering animations during rapid scrolling.

Use `IntersectionObserver` to detect sections.

## 6. Talking and Dialogue System

Create a speech-bubble component that appears above or beside the character.

The bubble should have a modern pixel-game-inspired appearance.

Requirements:

- Typewriter-style text reveal.
- Optional blinking cursor.
- Character talking animation while dialogue is displayed.
- Automatic dismissal after an appropriate duration.
- Click-to-dismiss option.
- Speech bubble must not exceed viewport width.
- Never cover important interactive elements.

### Example dialogue

**Landing page**

"Welcome. I built this place. Most of it works."

**About section**

"Apparently I have to explain myself here."

**Projects section**

"These projects survived production. Mostly."

**Skills section**

"Yes, I know JavaScript. Unfortunately."

**Contact section**

"You can message me. I might even reply."

**While typing**

"Compiling excuses..."

**When something fails**

"It worked on localhost."

**After inactivity**

"Still here? I respect the commitment."

**When dragged**

"Excuse me. I'm not a desktop shortcut."

**After repeated clicks**

"Are we stress-testing my patience?"

**When returning home**

"Back to my natural habitat."

Dialogue should be configurable through a separate data file.

Do not hardcode messages throughout UI components.

## 7. Mouse and Touch Interactions

The character must be interactive.

### Single click

Trigger a random suitable reaction:

- Wave
- Smile
- Talk
- Give a thumbs-up
- Shrug
- Open the laptop

### Repeated clicks

Detect playful repeated clicking.

Example:

First click: Wave.

Second click: "Oh, hello again."

Third click: Facepalm.

Fourth click: "You really like clicking things."

Avoid permanently locking the character in these interactions.

### Dragging

Make the character draggable using Pointer Events.

Behavior:

1. User presses and holds.
2. Character switches to an appropriate dragging animation.
3. Character follows the pointer.
4. Character stays within viewport boundaries.
5. On release, play a landing or recovery animation.
6. Resume normal behavior afterward.

Distinguish clicks from actual dragging using a movement threshold.

On mobile, avoid interfering with ordinary scrolling unless the user intentionally starts dragging the character.

### Hover

Occasionally respond to hover with a look, smile, or short tooltip.

Do not show a speech bubble every time the cursor passes over the character.

## 8. Random Personality Interactions

The character should feel alive even when the visitor does nothing.

Examples:

**Every so often:**

- Blink
- Stretch
- Look around
- Check the laptop
- Shrug
- Think
- Sit down
- Resume typing

**Rare events:**

- Fall asleep
- Jump in excitement
- Celebrate
- Facepalm
- Laugh unexpectedly
- Look confused

Implement weighted probability rather than making every event equally likely.

Example:

```javascript
const randomInteractions = [
  { action: "lookAround", weight: 30 },
  { action: "typing", weight: 25 },
  { action: "stretch", weight: 15 },
  { action: "shrug", weight: 10 },
  { action: "laugh", weight: 8 },
  { action: "sleep", weight: 7 },
  { action: "celebrate", weight: 5 },
];
```

Do not run idle reactions too frequently.

Avoid repeating the same interaction consecutively.

Pause random behavior during user interactions.

## 9. Navigation Assistance

The character should provide useful guidance, not just decoration.

When a visitor reaches a particular section, the character may point toward a relevant element and display a contextual line.

Examples:

**Projects:** "This is the part where I pretend my code is organized."

**Skills:** "A carefully curated list of things I've Googled."

**Contact:** "Need something built? This button is surprisingly useful."

When visitors click an optional character navigation menu, provide actions such as:

- Show me your projects
- Tell me about yourself
- What technologies do you use?
- How can I contact you?
- Hide character

These actions should connect to existing portfolio sections and links.

Do not invent navigation paths. Inspect the actual website first.

## 10. Mini Interactions

Implement a few lightweight, optional mini interactions.

### Mini interaction A: Coding session

Click the laptop to start a short coding animation.

Display:

```text
> npm run portfolio
> compiling...
> success!
```

Character celebrates after completion.

### Mini interaction B: Annoyed developer

Rapidly click the character several times.

Character reacts with increasingly sarcastic dialogue.

After a cooldown, reset the interaction.

### Mini interaction C: Sleep mode

After an extended period of genuine user inactivity, the character falls asleep.

Moving the pointer, pressing a key, touching the screen, or scrolling wakes it.

### Mini interaction D: Secret interaction

Click the character's laptop several times to unlock a rare Easter egg.

Keep these interactions optional and lightweight.

## 11. Architecture

Follow the existing project stack.

If using React, a suggested architecture is:

```text
src/
  components/
    character/
      Character.jsx
      CharacterSprite.jsx
      CharacterDialogue.jsx
      CharacterMenu.jsx
  hooks/
    useCharacterAnimation.js
    useCharacterMovement.js
    useCharacterInteractions.js
    useSectionObserver.js
  data/
    characterAnimations.js
    characterDialogues.js
    characterManifest.json
  styles/
    character.css
```

Adapt file extensions, framework conventions, and directories to the actual project.

Keep these responsibilities separate:

- Animation playback
- Movement
- Dialogue
- Pointer interactions
- Navigation integration
- Random behavior
- Accessibility settings

Avoid creating unnecessary abstractions.

## 12. Technical Animation Requirements

Prefer lightweight CSS animations and a small JavaScript animation controller.

Use CSS for:

- Position transitions
- Hover effects
- Floating
- Speech-bubble transitions
- Small character movements

Use JavaScript for:

- Selecting sprite frames
- Scheduling animation states
- Pointer dragging
- Weighted random behaviors
- Scroll reactions
- Section detection

Preload frequently used frames and lazy-load rare interaction sprites.

Avoid excessive React rerenders and layout recalculations.

For smooth movement, use `transform: translate3d(...)`.

Use `requestAnimationFrame` where continuous position updates are necessary.

## 13. Mobile and Responsive Behavior

The character should work on phones and tablets.

Requirements:

- Reduce sprite display size.
- Limit unnecessary walking.
- Shorten dialogue.
- Avoid covering fixed navigation.
- Support touch gestures.
- Keep important buttons accessible.
- Respect notches and browser safe areas.
- Provide a hide/show control.

On smaller screens, prioritize helpful interaction over constant movement.

## 14. Accessibility

Implement:

- Keyboard-operable character controls.
- Accessible names for interactive elements.
- Visible focus indicators.
- Reduced-motion behavior.
- Optional animation disable toggle.
- Appropriate speech-bubble accessibility.
- No automatic focus stealing.

Respect `prefers-reduced-motion`.

When reduced motion is enabled, show a static idle sprite while preserving optional dialogue and navigation functionality.

## 15. Performance

The character should not noticeably slow down the portfolio.

Optimize by:

- Reusing existing framework utilities.
- Avoiding heavyweight game engines.
- Keeping transparent sprite assets reasonably sized.
- Using efficient image loading.
- Preventing unnecessary animation work when the browser tab is hidden.
- Limiting simultaneous animations.
- Cleaning up observers, event listeners, and animation loops.

Prefer offline sprite processing at build time rather than performing image extraction in the browser.

## 16. Acceptance Criteria

The implementation is complete only when:

- [ ] The original character design is preserved.
- [ ] All necessary sprites are correctly extracted from the transparent PNG.
- [ ] Animation frames are properly aligned.
- [ ] Walking animation loops without visible jumps.
- [ ] Talking animations work with speech bubbles.
- [ ] Idle and blinking animations work.
- [ ] Clicking triggers appropriate reactions.
- [ ] Drag-and-drop works on desktop and mobile.
- [ ] Random interactions occur naturally.
- [ ] Character responds to scrolling.
- [ ] Character recognizes relevant portfolio sections.
- [ ] Navigation interactions use actual portfolio routes.
- [ ] Reduced-motion support works.
- [ ] Character can be hidden and restored.
- [ ] No important interface elements are obstructed.
- [ ] Animations do not create excessive CPU usage.
- [ ] Layout remains responsive.
- [ ] Existing portfolio functionality remains unchanged.

## 17. Implementation Workflow

Work in this order:

**Phase 1 — Inspect**

Analyze the portfolio stack, page structure, and character image.

**Phase 2 — Extract**

Create individual transparent character sprites and verify alignment using a visual preview.

**Phase 3 — Animate**

Implement walking, idle, blinking, and talking animations.

**Phase 4 — Interact**

Add clicking, dragging, dialogue, and reaction states.

**Phase 5 — Integrate**

Connect the character to scrolling and portfolio sections.

**Phase 6 — Polish**

Add random behaviors, mini interactions, mobile responsiveness, accessibility, and performance improvements.

**Phase 7 — Test**

Verify behavior across desktop, mobile, touch, keyboard navigation, and reduced-motion configurations.

## Final Instruction

Do not simply place the sprite sheet on the page as one static image.

Build a genuinely interactive portfolio companion using the individual character sprites.

The finished result should feel like a small, charming indie-game character living inside my website.

Its personality should be clever, sarcastic, and slightly unpredictable without becoming distracting.

**Prioritize smooth animation, consistency with the original character artwork, and a polished user experience over adding unnecessary features.**

Inspect the existing codebase before making changes. Implement the solution directly using the project's current architecture.
