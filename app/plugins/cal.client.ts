/**
 * Loads the Cal.com embed once for the whole app.
 *
 * The booking CTAs (`data-cal-link` buttons) are rendered on every page, but
 * the embed used to be injected only by the homepage `<Bookings />` component,
 * which left the buttons dead on /about, /blog, /project and /contact.
 */
export default defineNuxtPlugin(() => {
  if (import.meta.server || !import.meta.client) return;

  const w = window as unknown as { Cal?: { loaded?: boolean } };
  if (w.Cal?.loaded) return;

  // Official Cal.com embed bootstrap. It defines window.Cal synchronously and
  // queues calls until embed.js finishes loading, so the inline calendar in
  // <Bookings /> can safely queue its own calls on mount.
  const snippet = `
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar) };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments) };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    Cal("init", "15min", { origin: "https://app.cal.com" });
    Cal.ns["15min"]("ui", {
      cssVarsPerTheme: { light: { "cal-brand": "#008236" } },
      hideEventTypeDetails: false,
      layout: "month_view"
    });
  `;

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.textContent = snippet;
  document.head.appendChild(script);
});
