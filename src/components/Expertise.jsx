import { ArrowRight, BookOpen, Globe, MessagesSquare, Users } from 'lucide-react'
import { expertise } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { enquire } from '../lib/enquire'

const icons = { BookOpen, Globe, MessagesSquare, Users }

// Flat panels: forest (30%) carries most of them, bordo (10%) appears once, cream once.
const tones = {
  blue: { bg: 'bg-forest', text: 'text-cream', deco: 'border-cream/10 bg-cream/[0.06]' },
  coral: { bg: 'bg-bordo', text: 'text-cream', deco: 'border-cream/10 bg-cream/[0.06]' },
  navy: { bg: 'bg-cream', text: 'text-bordo', deco: 'border-bordo/10 bg-bordo/[0.05]' },
  teal: { bg: 'bg-forest-light', text: 'text-cream', deco: 'border-cream/10 bg-cream/[0.06]' },
}

export default function Expertise() {
  return (
    <section id="expertise" className="border-y border-line bg-cream-paper py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading title="Areas of Expertise">
          These are the core tracks I teach, design and lead. Each one is built to move learners from
          classroom knowledge to workplace-ready skill.
        </SectionHeading>

        <div className="space-y-14 md:space-y-10">
          {expertise.map((item, i) => {
            const Icon = icons[item.icon]
            const flip = i % 2 === 1
            return (
              <Reveal
                as="article"
                key={item.title}
                className={`relative flex flex-col md:flex-row md:items-center ${flip ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Illustrated panel */}
                <div
                  className={`relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-3xl md:w-1/2 ${tones[item.tone].bg}`}
                >
                  <div className={`absolute -left-10 -top-10 h-40 w-40 rounded-full ${tones[item.tone].deco}`} aria-hidden="true" />
                  <div className={`absolute -bottom-14 -right-6 h-52 w-52 rounded-full border-[18px] !bg-transparent ${tones[item.tone].deco}`} aria-hidden="true" />
                  <div className={`relative flex flex-col items-center gap-3 ${tones[item.tone].text}`}>
                    <Icon className="h-14 w-14" strokeWidth={1.4} />
                    <span className="text-2xl font-black uppercase tracking-[0.2em] sm:text-3xl">
                      {item.word}
                    </span>
                  </div>
                </div>

                {/* Overlapping card */}
                <div
                  className={`relative z-10 mx-4 -mt-12 rounded-2xl border border-line bg-cream-light p-6 shadow-card sm:p-7 md:mx-0 md:mt-0 md:w-[55%] ${
                    flip ? 'md:-mr-[5%]' : 'md:-ml-[5%]'
                  }`}
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="meta mt-1">{item.meta}</span>
                  <p className="mt-4 text-[15px] leading-relaxed">{item.text}</p>
                  <a href="#contact" onClick={() => enquire(item.subject)} className="btn btn-sm mt-5">
                    Enquire <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
