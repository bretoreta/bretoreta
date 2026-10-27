<template>
  <svg
    viewBox="0 0 240 340"
    fill="none"
    aria-hidden="true"
    class="pull-cord-art"
  >
    <g class="pull-cord-swing">
      <!-- ceiling plate -->
      <rect x="96" y="0" width="48" height="9" rx="4.5" fill="currentColor" opacity="0.55" />
      <rect x="112" y="8" width="16" height="6" rx="3" fill="currentColor" opacity="0.3" />

      <!-- rope -->
      <path
        d="M120 14 C 115 92, 125 196, 120 284"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />

      <!-- knob -->
      <circle cx="120" cy="298" r="14" fill="#f4f4f5" stroke="rgba(0,0,0,0.18)" stroke-width="1" />
      <circle cx="116" cy="294" r="3.2" fill="#ffffff" opacity="0.85" />
    </g>
  </svg>
</template>

<style scoped>
.pull-cord-art {
  color: rgba(24, 24, 27, 0.5);
  overflow: visible;
}

:global(.dark) .pull-cord-art {
  color: rgba(255, 255, 255, 0.45);
}

.pull-cord-swing {
  transform-origin: 120px 14px;
  animation: pull-cord-sway 7s ease-in-out infinite;
}

@keyframes pull-cord-sway {
  0%,
  100% {
    transform: rotate(-1.8deg);
  }
  50% {
    transform: rotate(1.8deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .pull-cord-swing {
    animation: none;
  }
}
</style>
