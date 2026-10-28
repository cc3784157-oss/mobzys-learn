import { useEffect, useRef } from 'react'
import { Capacitor } from '@capacitor/core'

const ADSENSE_CLIENT = 'ca-pub-6014323062674387'
const ADMOB_BANNER_ID = 'ca-app-pub-6014323062674387/9335717857'
const DEFAULT_SLOT = ''

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

const isWeb = Capacitor.getPlatform() === 'web'

let admobReady: Promise<void> | null = null
let bannerCreated = false

async function showNativeBanner() {
  const { AdMob, BannerAdSize, BannerAdPosition } = await import('@capacitor-community/admob')
  if (!admobReady) {
    admobReady = AdMob.initialize().then(() => undefined)
  }
  try {
    await admobReady
  } catch (err) {
    admobReady = null
    throw err
  }
  if (bannerCreated) {
    await AdMob.resumeBanner()
    return
  }
  await AdMob.showBanner({
    adId: ADMOB_BANNER_ID,
    adSize: BannerAdSize.ADAPTIVE_BANNER,
    position: BannerAdPosition.BOTTOM_CENTER,
    margin: 0,
  })
  bannerCreated = true
}

async function hideNativeBanner() {
  if (!bannerCreated) return
  const { AdMob } = await import('@capacitor-community/admob')
  await AdMob.hideBanner()
}

type Props = { slot?: string }

export default function AdBanner({ slot = DEFAULT_SLOT }: Props) {
  const insRef = useRef<HTMLModElement>(null)

  useEffect(() => {
    if (isWeb) {
      const el = insRef.current
      if (!el || el.dataset.adPushed === '1') return
      el.dataset.adPushed = '1'
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (err) {
        console.warn('AdSense push failed', err)
      }
      return
    }

    showNativeBanner().catch((err) => console.warn('AdMob banner failed', err))
    return () => {
      hideNativeBanner().catch(() => {})
    }
  }, [])

  if (!isWeb) return null

  return (
    <div
      className="ad-banner"
      style={{
        margin: '24px 0',
        minHeight: 300,
        minWidth: 250,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        contain: 'layout',
      }}
    >
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: 'block', minHeight: 300, width: '100%' }}
        data-ad-client={ADSENSE_CLIENT}
        {...(slot ? { 'data-ad-slot': slot } : {})}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}