import { nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

export interface SectionObserverOptions {
  onEnter: (section: string, element: Element) => void;
}

/**
 * Watches sections marked with `data-character-section`.
 *
 * The observation band is a thin strip through the middle of the viewport so
 * the character reacts when a section actually becomes the focus, not while it
 * is merely peeking in from an edge.
 */
export function useSectionObserver(options: SectionObserverOptions) {
  const route = useRoute();
  const activeSection = ref("");
  let observer: IntersectionObserver | null = null;
  let refreshTimer: ReturnType<typeof setTimeout> | undefined;
  let refreshToken = 0;
  let disposed = false;

  function disconnect() {
    observer?.disconnect();
    observer = null;
  }

  async function refresh() {
    const token = ++refreshToken;
    disconnect();
    await nextTick();
    if (disposed || token !== refreshToken || typeof document === "undefined") return;

    const elements = Array.from(document.querySelectorAll("[data-character-section]"));
    if (!elements.length) return;

    observer = new IntersectionObserver(
      (entries) => {
        if (disposed) return;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const section = (entry.target as HTMLElement).dataset.characterSection;
          if (!section) continue;
          activeSection.value = section;
          options.onEnter(section, entry.target);
        }
      },
      {
        rootMargin: "-44% 0px -48% 0px",
        threshold: 0,
      },
    );

    for (const element of elements) observer.observe(element);
  }

  onMounted(() => {
    void refresh();
  });

  watch(
    () => route.fullPath,
    () => {
      if (refreshTimer) clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => {
        void refresh();
      }, 420);
    },
  );

  onUnmounted(() => {
    disposed = true;
    refreshToken += 1;
    if (refreshTimer) clearTimeout(refreshTimer);
    disconnect();
  });

  return { activeSection, refresh };
}
