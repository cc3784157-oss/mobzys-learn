import { useEffect, useRef } from 'react'
import { Capacitor } from '@capacitor/core'

const APP_OPEN_AD_UNIT_ID = 'ca-app-pub-6014323062674387/5057386483'

export default function AppOpenAd() {
  const shownRef = useRef(false)

  useEffect(() => {
    if (Capacitor.getPlatform() === 'web') return
    if (shownRef.current) return
    shownRef.current = true

    const show = async () => {
      try {
        const { AdMob } = await import('@capacitor-community/admob')
        await AdMob.initialize({ requestTrackingAuthorization: false, testingDevices: [] })
        await AdMob.prepareAppOpenAd({ adId: APP_OPEN_AD_UNIT_ID })
        await AdMob.showAppOpenAd()
      } catch (e) {
        console.warn('App open ad failed:', e)
      }
    }

    // Small delay so the UI is painted before the ad shows
    const t = setTimeout(show, 800)
    return () => clearTimeout(t)
  }, [])

  return null
}