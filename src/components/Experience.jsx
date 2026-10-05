import { Briefcase, GraduationCap, Languages } from 'lucide-react'
import { earlyCareer, education, experience } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading title="Experience & Education">
          Seven years of growth, from one-on-one IELTS coaching in 2019 to chairing a university's verbal ability
          and professional readiness division.
        </SectionHeading>

        {/* Higher-education roles */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {experience.map((group, gi) => (
            <Reveal key={group.org} delay={gi * 120}>
              <h3 className="flex items-center gap-3 text-xl font-bold">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-cream">
                  <Briefcase className="h-5 w-5" />
                </span>
                {group.org}
              </h3>
              <span className="meta ml-[52px]">{group.period}</span>

              <ol className="relative mt-6 space-y-7 border-l-2 border-line pl-6">
                {group.roles.map((r) => (
                  <li key={r.role + r.date} className="relative">
                    <span
                      className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-cream-light bg-bordo ring-2 ring-bordo/25"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-bold text-bordo">{r.date}</span>
                    <span className="block text-[15px] font-bold text-ink">{r.role}</span>
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed">
                      {r.points.map((pt) => (
                        <li key={pt} className="relative pl-4 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-forest/60">
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>

        {/* IELTS & language-training years */}
        <Reveal className="mt-16">
          <h3 className="flex items-center gap-3 text-xl font-bold">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bordo text-cream">
              <Languages className="h-5 w-5" />
            </span>
            IELTS &amp; Language Training
          </h3>
          <span className="meta ml-[52px]">Jul 2019 – May 2024</span>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {earlyCareer.map((job, i) => (
            <Reveal
              key={job.org}
              delay={(i % 3) * 80}
              className="rounded-2xl border border-line bg-cream-paper p-5 transition duration-300 hover:-translate-y-1 hover:border-bordo/40 hover:shadow-card"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-bordo">{job.date}</span>
              <span className="mt-1 block text-[15px] font-bold text-ink">{job.role}</span>
              <span className="block text-sm text-forest-light">{job.org}</span>
              <p className="mt-2 text-sm leading-relaxed">{job.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Education */}
        <Reveal className="mt-16">
          <h3 className="flex items-center gap-3 text-xl font-bold">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-cream">
              <GraduationCap className="h-5 w-5" />
            </span>
            Education
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {education.map((e, i) => (
            <Reveal
              key={e.degree}
              delay={i * 80}
              className="rounded-2xl border border-line bg-cream p-5"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-bordo">{e.date}</span>
              <span className="mt-1 block text-lg font-bold text-ink">{e.degree}</span>
              <span className="block text-sm">{e.school}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
