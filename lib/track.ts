// Conversion events. Safe to call when no tracking is configured: each call is a
// no-op unless the matching script was loaded by <Tracking /> in app/layout.tsx.

type TrackWindow = Window & {
  gtag?: (...args: unknown[]) => void
  fbq?: (...args: unknown[]) => void
}

/** Call only after the server has confirmed the lead was saved, never on the click. */
export function trackLead(service?: string) {
  if (typeof window === 'undefined') return
  const w = window as TrackWindow
  w.gtag?.('event', 'generate_lead', { service: service || 'unspecified' })
  w.fbq?.('track', 'Lead', { content_name: service || 'unspecified' })
}
