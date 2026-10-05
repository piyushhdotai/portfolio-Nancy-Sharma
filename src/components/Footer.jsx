import { Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import { LinkedinIcon, WhatsappIcon } from './BrandIcons'
import { Logo } from './Navbar'

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: profile.cv, label: 'CV', download: profile.cvFileName },
  { href: '#programs', label: 'Programs' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { href: profile.links.linkedin, label: 'LinkedIn', Icon: LinkedinIcon, featured: true },
  { href: `mailto:${profile.links.email}`, label: 'Email', Icon: Mail },
  { href: profile.links.whatsapp, label: 'WhatsApp', Icon: WhatsappIcon },
  { href: profile.links.phoneHref, label: 'Call', Icon: Phone },
]

export default function Footer() {
  return (
    <footer className="relative bg-forest text-cream-light/80">
      <div className="h-1 bg-bordo" aria-hidden="true" />
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[auto_1fr_1.4fr_1fr] lg:gap-12">
        <div>
          <div className="inline-block rounded-md bg-cream-paper px-4 py-3">
            <Logo className="text-lg" />
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-cream">Location</h4>
          <p className="text-sm leading-relaxed">
            {profile.location.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-cream">Quick Links</h4>
          <ul className="flex flex-wrap gap-1">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  download={l.download}
                  className={`block rounded-md px-3 py-1.5 text-sm transition ${
                    l.download ? 'bg-bordo text-cream-light hover:bg-bordo-dark' : 'hover:bg-cream/10 hover:text-cream'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-cream">Follow me</h4>
          <ul className="flex items-center gap-2">
            {socials.map(({ href, label, Icon, featured }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex items-center justify-center rounded-full transition hover:-translate-y-0.5 ${
                    featured ? 'h-11 w-11 bg-bordo text-cream' : 'h-9 w-9 text-cream hover:bg-cream/10'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page border-t border-cream/15 py-6 text-center text-sm">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  )
}
