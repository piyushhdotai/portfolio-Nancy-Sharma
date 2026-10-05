import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/profile'

export function Logo({ className = '' }) {
  return (
    <a href="#home" className={`font-black italic tracking-tight text-ink ${className}`}>
      {profile.title} <span className="pr-1 text-bordo">{profile.name}</span>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the link for the section currently in view.
  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? 'bg-cream-paper/95 shadow-card backdrop-blur' : 'bg-cream-paper shadow-lg shadow-black/20'
        }`}
      >
        <Logo className="text-lg" />

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  active === link.href
                    ? 'bg-bordo text-cream-light'
                    : 'text-ink hover:text-bordo'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="rounded-lg p-1.5 text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl bg-cream-paper shadow-card transition-all duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col p-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm ${
                  active === link.href ? 'bg-cream font-bold text-bordo' : 'text-ink'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
