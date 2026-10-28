import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data/heroSlides'

export default function HeroCarousel() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || heroSlides.length <= 1) return
    const i = setInterval(() => {
      setIdx((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(i)
  }, [paused])

  if (heroSlides.length === 0) return null
  const slide = heroSlides[idx]

  const goTo = (n: number) => setIdx(n)
  const prev = () => setIdx((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  const next = () => setIdx((prev) => (prev + 1) % heroSlides.length)

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(320px, 55vh, 520px)',
        borderRadius: 14,
        overflow: 'hidden',
        marginBottom: 32,
        background: '#111',
      }}
    >
      {/* Background images — all rendered, only active is visible (CSS crossfade) */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${s.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === idx ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: 0,
          }}
          aria-hidden={i !== idx}
        />
      ))}

      {/* Dark gradient for readable text */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Link
        to={slide.link}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(20px, 4vw, 48px)',
          textDecoration: 'none',
          color: '#fff',
        }}
      >
        <h2 style={{ margin: 0, fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 700, lineHeight: 1.15, textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
          {slide.title}
        </h2>
        <p style={{ margin: '8px 0 0', fontSize: 'clamp(13px, 1.6vw, 17px)', opacity: 0.9, maxWidth: 720, lineHeight: 1.5, textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
          {slide.subtitle}
        </p>
        <span style={{ marginTop: 16, display: 'inline-block', background: '#1a73e8', color: '#fff', padding: '10px 18px', borderRadius: 8, fontWeight: 600, fontSize: 14, alignSelf: 'flex-start' }}>
          Explore →
        </span>
      </Link>

      {/* Prev/Next arrows */}
      <button
        onClick={(e) => { e.preventDefault(); prev() }}
        aria-label="Previous slide"
        style={{
          position: 'absolute', top: '50%', left: 12, transform: 'translateY(-50%)',
          zIndex: 3, width: 40, height: 40, borderRadius: '50%',
          background: 'rgba(0,0,0,0.4)', color: '#fff', border: 'none',
          cursor: 'pointer', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >‹</button>
      <button
        onClick={(e) => { e.preventDefault(); next() }}
        aria-label="Next slide"
        style={{
          position: 'absolute', top: '50%', right: 12, transform: 'translateY(-50%)',
          zIndex: 3, width: 40, height: 40, borderRadius: '50%',
          background: 'rgba(0,0,0,0.4)', color: '#fff', border: 'none',
          cursor: 'pointer', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >›</button>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 3 }}>
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); goTo(i) }}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === idx ? 24 : 8, height: 8, borderRadius: 4, border: 'none',
              background: i === idx ? '#fff' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer', transition: 'all 0.3s', padding: 0,
            }}
          />
        ))}
      </div>

      {/* Photographer credit */}
      <div style={{ position: 'absolute', top: 12, right: 16, zIndex: 3, fontSize: 11, color: 'rgba(255,255,255,0.75)', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
        Photo: {slide.photographer} / Unsplash
      </div>
    </div>
  )
}
