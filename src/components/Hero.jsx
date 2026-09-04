import { Link } from 'react-router-dom'
import { Button } from './ui/button'

function Hero() {
  return (
    <section
      className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-16"
      style={{ minHeight: 'calc(100vh - 80px)' }}
    >
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Designing with purpose. Creating with impact.
        </h1>
        <p className="max-w-md text-base leading-relaxed text-gray-600 sm:text-lg">
          I am a multidisciplinary Graphic &amp; Visual Designer with 1 year
          of experience in branding, UI/UX, and commercial design, combining
          creativity and strategic thinking to create visuals that
          communicate, connect, and stand out.
        </p>
        <Button
          render={<Link to="/work" />}
          className="border-none bg-gradient-to-r from-fuchsia-500 to-purple-500 px-6 py-5 text-base text-white shadow-md shadow-fuchsia-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-90 active:translate-y-0 active:scale-95"
        >
          See selected work
        </Button>
      </div>

      <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-gray-100">
        <img
          src="/hero.jpg"
          alt="Portrait"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <img
          src="/hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover blur-lg"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent 0%, transparent 38%, black 85%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, transparent 38%, black 85%)',
          }}
        />
      </div>
    </section>
  )
}

export default Hero
