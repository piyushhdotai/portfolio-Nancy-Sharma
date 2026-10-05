import Reveal from './Reveal'

export default function SectionHeading({ title, children }) {
  return (
    <Reveal className="mb-12 max-w-xl">
      <h2 className="text-3xl font-normal sm:text-4xl">{title}</h2>
      <span className="mt-3 block h-1 w-14 rounded-full bg-bordo" />
      {children && <p className="mt-4 text-[15px] leading-relaxed">{children}</p>}
    </Reveal>
  )
}
