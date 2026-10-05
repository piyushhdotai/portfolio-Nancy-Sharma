import { useEffect, useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'
import { profile } from '../data/profile'
import { ENQUIRE_EVENT } from '../lib/enquire'
import { LinkedinIcon, WhatsappIcon } from './BrandIcons'
import Reveal from './Reveal'

const bubbles = [
  {
    label: 'Email',
    href: `mailto:${profile.links.email}`,
    Icon: Mail,
    className: 'left-0 top-[26%] h-36 w-36 bg-bordo text-cream z-20 sm:h-40 sm:w-40',
    iconClass: 'bg-cream/15 text-cream',
  },
  {
    label: 'LinkedIn',
    href: profile.links.linkedin,
    Icon: LinkedinIcon,
    className: 'left-[22%] top-[18%] h-56 w-56 bg-forest text-cream z-10 sm:h-64 sm:w-64',
    iconClass: 'bg-cream text-forest',
  },
  {
    label: 'WhatsApp',
    href: profile.links.whatsapp,
    Icon: WhatsappIcon,
    className: 'right-0 top-0 h-40 w-40 bg-cream text-forest z-20 border-4 border-cream-light sm:h-44 sm:w-44',
    iconClass: 'bg-cream-light text-forest',
  },
]

const empty = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState(null)

  // Pre-fill the subject when an "Enquire" / "Book Now" button is clicked.
  useEffect(() => {
    const onEnquire = (e) => setForm((f) => ({ ...f, subject: `Enquiry: ${e.detail}` }))
    window.addEventListener(ENQUIRE_EVENT, onEnquire)
    return () => window.removeEventListener(ENQUIRE_EVENT, onEnquire)
  }, [])

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  // No backend: open the visitor's mail app with the message pre-composed.
  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !/^\S+@\S+\.\S+$/.test(form.email) || !form.message.trim()) {
      setStatus({ ok: false, text: 'Please enter your name, a valid email and a message.' })
      return
    }
    const subject = form.subject.trim() || `Portfolio enquiry from ${form.name}`
    const body = `${form.message}\n\n${form.name}\n${form.email}`
    window.location.href = `mailto:${profile.links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus({ ok: true, text: 'Opening your email app… thank you for reaching out!' })
    setForm(empty)
  }

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container-page grid items-center gap-14 md:grid-cols-2">
        <Reveal className="relative mx-auto h-80 w-full max-w-md sm:h-96" aria-label="Social links">
          {bubbles.map(({ label, href, Icon, className, iconClass }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`absolute flex flex-col items-center justify-center gap-3 rounded-full text-sm font-bold uppercase tracking-wide animate-float shadow-card transition duration-300 hover:z-30 hover:brightness-110 ${className}`}
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              <span className={`flex h-14 w-14 items-center justify-center rounded-full ${iconClass}`}>
                <Icon className="h-6 w-6" />
              </span>
              {label}
            </a>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <h2 className="text-3xl font-normal sm:text-4xl">Reach With Me</h2>
          <span className="mt-3 block h-1 w-14 rounded-full bg-bordo" />
          <p className="mt-4 text-[15px] leading-relaxed">
            Want a workshop for your campus, a placement-readiness programme, or help with training and writing?
            Send a message and I'll get back to you.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
            <a href={`mailto:${profile.links.email}`} className="inline-flex items-center gap-2 font-bold text-forest hover:text-bordo">
              <Mail className="h-4 w-4 text-bordo" /> {profile.links.email}
            </a>
            <a href={profile.links.phoneHref} className="inline-flex items-center gap-2 font-bold text-forest hover:text-bordo">
              <Phone className="h-4 w-4 text-bordo" /> {profile.links.phone}
            </a>
          </div>

          <form onSubmit={submit} noValidate className="mt-6 space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="field" name="name" value={form.name} onChange={update} placeholder="Full Name" aria-label="Full name" />
              <input className="field" type="email" name="email" value={form.email} onChange={update} placeholder="Email Address" aria-label="Email address" />
            </div>
            <input className="field" name="subject" value={form.subject} onChange={update} placeholder="Subject" aria-label="Subject" />
            <textarea className="field resize-y" rows={5} name="message" value={form.message} onChange={update} placeholder="Message" aria-label="Message" />
            <button type="submit" className="btn">
              Send Message <Send className="h-4 w-4" />
            </button>
            <p role="status" aria-live="polite" className={`min-h-[1.25rem] text-sm ${status?.ok ? 'text-forest' : 'text-bordo'}`}>
              {status?.text}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
