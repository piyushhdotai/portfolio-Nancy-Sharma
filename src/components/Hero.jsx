import { Download } from 'lucide-react'
import { profile } from '../data/profile'
import SmartImage from './SmartImage'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-forest pb-36 pt-36 text-center sm:pb-44 sm:pt-40"
    >
      {/* Background photo (optional) + flat forest overlay */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${profile.images.hero})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-forest/90" aria-hidden="true" />
      {/* Flat decorative rings */}
      <div className="absolute -left-28 top-24 -z-10 hidden md:block h-80 w-80 rounded-full border-[28px] border-cream/[0.06]" aria-hidden="true" />
      <div className="absolute -right-20 top-48 -z-10 hidden md:block h-64 w-64 rounded-full border-[20px] border-bordo/50" aria-hidden="true" />

      <div className="container-page flex flex-col items-center">
        <div className="relative h-32 w-32 rounded-full border-4 border-cream p-1 ring-8 ring-bordo/70 sm:h-36 sm:w-36">
          <SmartImage
            src={profile.images.profile}
            alt={`Portrait of ${profile.name}`}
            className="h-full w-full rounded-full object-cover"
            fallback={
              <div className="flex h-full w-full items-center justify-center rounded-full bg-bordo text-4xl font-black italic text-cream">
                NS
              </div>
            }
          />
        </div>

        <h1 className="mt-8 text-4xl font-bold text-cream-light sm:text-5xl">{profile.name}</h1>
        <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-cream sm:text-base sm:normal-case sm:tracking-normal">
          {profile.role}
        </p>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-cream-light/85">{profile.intro}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={profile.cv} download={profile.cvFileName} className="btn">
            <Download className="h-4 w-4" /> Download CV
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Wavy bottom edge */}
      <svg
        className="absolute inset-x-0 bottom-0 h-20 w-full text-cream-light sm:h-28"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,64 C180,10 330,0 520,40 C700,78 760,120 960,96 C1150,74 1280,20 1440,40 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  )
}
