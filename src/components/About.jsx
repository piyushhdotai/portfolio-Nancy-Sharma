import { useEffect, useState } from 'react'
import { ClipboardCheck, GraduationCap, Languages, Users } from 'lucide-react'
import { competencies, openTo, profile, stats } from '../data/profile'
import Reveal, { useInView } from './Reveal'
import SmartImage from './SmartImage'

const icons = { ClipboardCheck, Languages, Users }

// Alternate forest and bordo so the row has rhythm without extra colours.
const competencyTones = [
  { bar: 'bg-forest', icon: 'bg-forest text-cream', chip: 'bg-cream-light text-forest ring-1 ring-line' },
  { bar: 'bg-bordo', icon: 'bg-bordo text-cream', chip: 'bg-cream-light text-bordo ring-1 ring-line' },
  { bar: 'bg-forest', icon: 'bg-forest text-cream', chip: 'bg-cream-light text-forest ring-1 ring-line' },
]

const openToTones = ['border-line bg-cream', 'border-forest/15 bg-cream-paper']

function CountUp({ value, suffix }) {
  const [ref, inView] = useInView({ threshold: 0.5 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value)
      return
    }
    const start = performance.now()
    const duration = 1200
    let frame
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <strong ref={ref} className="block text-3xl font-black text-cream-light sm:text-4xl">
      {n}
      <span className="text-cream">{suffix}</span>
    </strong>
  )
}

export default function About() {
  return (
    <section id="about" className="pb-20 pt-10 sm:pb-24 sm:pt-14">
      <div className="container-page grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-cream shadow-card sm:aspect-[4/3] md:aspect-[4/5]">
            <SmartImage
              src={profile.images.about}
              alt={`${profile.name} teaching`}
              className="h-full w-full object-cover"
              fallback={
                <div className="flex h-full w-full items-center justify-center">
                  <GraduationCap className="h-24 w-24 text-bordo/50" strokeWidth={1.2} />
                </div>
              }
            />
          </div>
          <div className="absolute -bottom-6 right-4 animate-float rounded-2xl border-l-4 border-bordo bg-cream-paper px-5 py-4 shadow-card sm:-right-6">
            <strong className="block text-2xl font-black text-bordo">7+ yrs</strong>
            <span className="text-xs">in language training &amp; academic leadership</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="text-3xl font-normal sm:text-4xl">
            About <span className="font-bold text-bordo">Me</span>
          </h2>
          <span className="mt-3 block h-1 w-14 rounded-full bg-bordo" />
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed">
            <p>
              I'm {profile.name}, Division Chair for Verbal Ability &amp; Professional Readiness at{' '}
              <strong className="text-ink">Galgotias College of Engineering and Technology</strong>. I oversee
              curriculum planning, programme development and academic quality across every communication and
              employability course the division offers. I still teach 12+ hours a week, because the classroom is
              where I learn what students actually need.
            </p>
            <p>
              My journey began in 2019 as an IELTS trainer. Over five training institutes I coached learners
              towards their target band scores and led a team of 12 trainers. At{' '}
              <strong className="text-ink">Chandigarh University</strong> I then mentored 15 trainers and
              standardised curricula and assessments for the Department of Career Planning &amp; Development.
              I hold an M.A. in Economics from Panjab University and I'm currently pursuing an M.A. in English
              at IGNOU.
            </p>
          </div>

          <blockquote className="mt-6 rounded-r-xl border-l-4 border-bordo bg-cream-paper px-5 py-4 text-[15px] italic leading-relaxed text-ink/80">
            I believe confident communication is a skill, not a talent. Through active learning, deliberate practice
            and honest, data-informed feedback, every student can learn to think critically, speak clearly and
            present themselves with conviction.
          </blockquote>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {openTo.map((item, i) => (
              <div key={item.label} className={`rounded-xl border px-4 py-3 text-sm text-ink ${openToTones[i]}`}>
                <span className="block font-bold">{item.label}</span>
                {item.value}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="container-page mt-20">
        <div className="relative grid grid-cols-2 overflow-hidden rounded-3xl bg-forest shadow-card md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative px-6 py-8 text-center ${i % 2 ? '' : 'border-r border-cream/15'} ${
                i < 2 ? 'border-b border-cream/15 md:border-b-0' : ''
              } md:border-r md:last:border-r-0`}
            >
              <CountUp value={s.value} suffix={s.suffix} />
              <span className="mt-1 block text-sm text-cream-light/80">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-center text-2xl font-normal">Core Competencies</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {competencies.map((c, i) => {
              const Icon = icons[c.icon]
              const tone = competencyTones[i % competencyTones.length]
              return (
                <div
                  key={c.title}
                  className="relative overflow-hidden rounded-2xl border border-line bg-cream-paper p-6 transition duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <span className={`absolute inset-x-0 top-0 h-1 ${tone.bar}`} aria-hidden="true" />
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${tone.icon}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 text-base font-bold">{c.title}</h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {c.items.map((item) => (
                      <li key={item} className={`rounded-full px-3 py-1 text-xs font-bold ${tone.chip}`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
