import { ArrowRight } from 'lucide-react'
import { programs, services } from '../data/profile'
import { enquire } from '../lib/enquire'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Typographic "photo" panels in flat palette colours, laid out as a checkerboard
// (cream / forest / bordo on the first row, forest / cream / forest on the second).
const visuals = {
  paper: {
    panel: 'bg-cream',
    word: 'text-forest font-black tracking-[0.25em]',
  },
  board: {
    panel: 'bg-forest',
    word: 'rounded-lg bg-cream px-5 py-2 text-bordo font-black tracking-[0.3em] shadow-lg',
  },
  chalk: {
    panel: 'bg-bordo',
    word: 'text-cream font-black tracking-[0.35em]',
  },
  sky: {
    panel: 'bg-forest-light',
    word: 'rounded-full bg-cream-light px-6 py-1 text-forest font-black tracking-[0.25em] shadow-lg',
  },
  ink: {
    panel: 'bg-cream',
    word: 'rounded-full border-2 border-bordo px-6 py-1 text-bordo font-black tracking-[0.2em]',
  },
  coral: {
    panel: 'bg-forest',
    word: 'rounded-3xl rounded-bl-none bg-cream px-6 py-2 text-bordo font-black tracking-[0.2em] shadow-lg',
  },
}

export default function Programs() {
  return (
    <section id="programs" className="border-y border-line bg-cream-paper py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading title="Workshops & Programs">
          These are signature sessions I've delivered for universities and student cohorts. Each one can be
          tailored for your institution or team.
        </SectionHeading>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => {
            const v = visuals[p.tone]
            return (
              <Reveal as="article" key={p.title} delay={(i % 3) * 100} className="group flex flex-col">
                <div
                  className={`flex aspect-[16/11] items-center justify-center overflow-hidden rounded-3xl pb-12 transition duration-500 group-hover:brightness-105 ${v.panel}`}
                >
                  <span className={`text-4xl transition duration-500 group-hover:scale-110 sm:text-5xl ${v.word}`}>
                    {p.word}
                  </span>
                </div>
                <div className="relative mx-4 -mt-16 flex flex-1 flex-col rounded-2xl border border-line bg-cream-light p-6 shadow-card transition duration-300 group-hover:-translate-y-1">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <span className="meta mt-1">{p.meta}</span>
                  <p className="mt-3 flex-1 text-sm leading-relaxed">{p.text}</p>
                  <a href="#contact" onClick={() => enquire(p.title)} className="btn btn-sm mt-5 self-start">
                    Book Now <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <span className="text-sm font-bold uppercase tracking-wider text-ink">Services offered</span>
          <ul className="flex flex-wrap justify-center gap-2">
            {services.map((s) => (
              <li key={s} className="rounded-full bg-cream-light px-4 py-1 text-sm font-bold text-bordo ring-1 ring-line">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
