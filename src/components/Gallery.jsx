import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, MapPin, Maximize2, Pause, Play, X } from 'lucide-react'
import { gallery } from '../data/profile'
import Reveal from './Reveal'

const files = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
const urls = Object.fromEntries(Object.entries(files).map(([path, url]) => [path.split('/').pop(), url]))
const slides = gallery.filter((g) => urls[g.file]).map((g) => ({ ...g, src: urls[g.file] }))

const INTERVAL = 5000 // keep in sync with the `progress` animation in tailwind.config.js

const solidBtn =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-paper text-forest transition duration-200 hover:bg-bordo hover:text-cream-light focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cream/40'
const ghostBtn =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-cream ring-1 ring-cream/40 transition duration-200 hover:bg-cream/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cream/40'

export default function Gallery() {
  const count = slides.length
  const [index, setIndex] = useState(0)
  const [offset, setOffset] = useState(0)
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [hold, setHold] = useState(false) // pointer or keyboard focus inside the slider
  const [visible, setVisible] = useState(false)
  const [lightbox, setLightbox] = useState(false)
  const viewportRef = useRef(null)
  const slideRefs = useRef([])
  const touchX = useRef(null)

  const next = () => setIndex((i) => (i + 1) % count)
  const prev = () => setIndex((i) => (i - 1 + count) % count)

  // Centre the active slide; neighbours peek in from both sides.
  const measure = useCallback(() => {
    const viewport = viewportRef.current
    const slide = slideRefs.current[index]
    if (viewport && slide) setOffset(slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2)
  }, [index])

  useLayoutEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  // Only auto-advance while the slider is on screen and nobody is interacting with it.
  useEffect(() => {
    const node = viewportRef.current
    if (!node) return
    const observer = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const running = playing && !hold && visible && !lightbox && count > 1

  // Keyed on index, so a manual change restarts the countdown.
  useEffect(() => {
    if (!running) return
    const t = setTimeout(next, INTERVAL)
    return () => clearTimeout(t)
  }, [index, running])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  if (!count) return null

  const swipe = {
    onTouchStart: (e) => (touchX.current = e.touches[0].clientX),
    onTouchEnd: (e) => {
      if (touchX.current == null) return
      const dx = e.changedTouches[0].clientX - touchX.current
      if (Math.abs(dx) > 40) (dx < 0 ? next : prev)()
      touchX.current = null
    },
  }

  const current = slides[index]
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <section
      id="gallery"
      className="overflow-hidden bg-forest py-20 sm:py-24"
      role="region"
      aria-roledescription="carousel"
      aria-label="Workshop and activity photos"
      onKeyDown={(e) => !lightbox && (e.key === 'ArrowRight' ? next() : e.key === 'ArrowLeft' && prev())}
    >
      <Reveal className="container-page flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-cream">Gallery</span>
          <h2 className="mt-2 text-3xl font-normal text-cream-light sm:text-4xl">
            Moments from the <span className="font-bold text-cream">Classroom</span>
          </h2>
          <span className="mt-3 block h-1 w-14 rounded-full bg-cream" />
          <p className="mt-4 text-[15px] leading-relaxed text-cream-light/75">
            Workshops, conclaves and training batches across the campuses I've taught at, and the students who
            made them worth it.
          </p>
        </div>
        <p className="hidden shrink-0 font-black tabular-nums text-cream-light md:block" aria-hidden="true">
          <span className="text-6xl">{pad(index + 1)}</span>
          <span className="text-2xl text-cream/50"> / {pad(count)}</span>
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div
          ref={viewportRef}
          className="mt-8 sm:mt-10"
          onMouseEnter={() => setHold(true)}
          onMouseLeave={() => setHold(false)}
          {...swipe}
        >
          <div
            className="relative flex items-center gap-4 transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none sm:gap-6"
            style={{ transform: `translateX(${-offset}px)` }}
          >
            {slides.map((s, i) => {
              const active = i === index
              return (
                <figure
                  key={s.file}
                  ref={(el) => (slideRefs.current[i] = el)}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${count}: ${s.title}`}
                  aria-hidden={!active}
                  onClick={() => (active ? setLightbox(true) : setIndex(i))}
                  className={`relative shrink-0 overflow-hidden rounded-3xl bg-forest-light transition duration-700 motion-reduce:transition-none ${
                    active ? 'cursor-zoom-in shadow-card' : 'scale-[0.92] cursor-pointer opacity-40 hover:opacity-60'
                  }`}
                >
                  <img
                    src={s.src}
                    alt={s.title}
                    onLoad={measure}
                    draggable="false"
                    className="h-[clamp(14rem,min(64vw,54vh),34rem)] w-auto max-w-[82vw] select-none object-cover"
                  />

                  {/* Small corner label, so it never covers the people in the photo. */}
                  <figcaption
                    className={`absolute bottom-3 left-3 flex max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-full bg-forest/85 px-3 py-1.5 text-xs text-cream-light backdrop-blur-sm transition duration-500 sm:bottom-4 sm:left-4 sm:px-3.5 ${
                      active ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-2 opacity-0'
                    }`}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cream" aria-hidden="true" />
                    <span className="truncate font-bold">{s.title}</span>
                    {s.place && (
                      <span className="hidden shrink-0 items-center gap-1 text-cream-light/70 sm:flex">
                        <span aria-hidden="true">·</span>
                        <MapPin className="h-3 w-3" /> {s.place}
                      </span>
                    )}
                  </figcaption>

                  {active && (
                    <span className="absolute right-4 top-4 hidden h-9 w-9 items-center justify-center rounded-full bg-cream-paper/90 text-forest sm:flex" aria-hidden="true">
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  )}
                </figure>
              )
            })}
          </div>
        </div>
      </Reveal>

      <p
        key={index}
        className="container-page mt-6 animate-fade-up text-center text-sm leading-relaxed text-cream-light/70 motion-reduce:animate-none"
        aria-live="polite"
      >
        <span className="mr-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cream">{current.tag}</span>
        {current.text}
      </p>

      <div className="container-page mt-6 flex flex-wrap items-center gap-x-6 gap-y-5">
        {/* Story-style progress: one segment per photo, the active one fills as the timer runs. */}
        <div className="flex min-w-full flex-1 gap-1.5 sm:min-w-0">
          {slides.map((s, i) => (
            <button
              key={s.file}
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1}: ${s.title}`}
              aria-current={i === index}
              className="group flex-1 py-2"
            >
              <span className="block h-1 overflow-hidden rounded-full bg-cream/20 transition group-hover:bg-cream/40">
                {i < index && <span className="block h-full bg-cream/70" />}
                {i === index && (
                  <span
                    key={index}
                    className={`block h-full origin-left bg-cream ${running || (playing && hold) ? 'animate-progress' : ''}`}
                    style={{ animationPlayState: running ? 'running' : 'paused' }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>

        <p className="font-black tabular-nums text-cream-light md:hidden">
          {pad(index + 1)} <span className="text-cream/50">/ {pad(count)}</span>
        </p>

        <div className="ml-auto flex gap-3">
          <button onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause slideshow' : 'Play slideshow'} className={ghostBtn}>
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button onClick={prev} aria-label="Previous photo" className={solidBtn}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} aria-label="Next photo" className={solidBtn}>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[60] flex flex-col bg-forest/95 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setLightbox(false)}
          {...swipe}
        >
          <div className="flex items-center justify-between">
            <span className="font-black tabular-nums text-cream-light">
              {pad(index + 1)} <span className="text-cream/50">/ {pad(count)}</span>
            </span>
            <button autoFocus onClick={() => setLightbox(false)} aria-label="Close viewer" className={solidBtn}>
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center py-4">
            <img
              key={current.src}
              src={current.src}
              alt={current.title}
              className="max-h-full max-w-full rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => (e.stopPropagation(), prev())}
              aria-label="Previous photo"
              className={`${solidBtn} absolute left-0 top-1/2 -translate-y-1/2 sm:left-2`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => (e.stopPropagation(), next())}
              aria-label="Next photo"
              className={`${solidBtn} absolute right-0 top-1/2 -translate-y-1/2 sm:right-2`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mx-auto max-w-2xl text-center" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-bold text-cream-light">{current.title}</h3>
            <p className="mt-1 text-sm text-cream-light/70">
              {current.text}
              {current.place && ` · ${current.place}`}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
