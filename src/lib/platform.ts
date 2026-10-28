import { Capacitor } from '@capacitor/core'

/**
 * True if the page is running inside:
 *  - Capacitor native app (Android / iOS)
 *  - Installed PWA (Chrome/Edge/Safari standalone mode)
 *  - Trusted Web Activity (Android TWA wrapper)
 *  - Electron / Tauri desktop wrapper
 */
export function isApp(): boolean {
  try {
    if (Capacitor.isNativePlatform()) return true
  } catch {}

  if (typeof window === 'undefined') return false

  // PWA installed (Android, iOS, Windows, macOS, Linux, ChromeOS)
  if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) return true
  if (window.matchMedia && window.matchMedia('(display-mode: fullscreen)').matches) return true
  if (window.matchMedia && window.matchMedia('(display-mode: minimal-ui)').matches) return true

  // iOS Safari standalone
  if ((window.navigator as any).standalone === true) return true

  // Android TWA (Trusted Web Activity)
  if (document.referrer && document.referrer.startsWith('android-app://')) return true

  // Electron / Tauri
  if ((window as any).electron || (window as any).__TAURI__) return true

  // Capacitor URL scheme (fallback)
  if (window.location.href.startsWith('capacitor://')) return true
  if (window.location.href.startsWith('ionic://')) return true

  return false
}