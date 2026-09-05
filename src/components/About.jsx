import { Link } from 'react-router-dom'

const BIO = '[PASTE YOUR 60-WORD BIO HERE]'

function About() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 md:gap-16">
      <img
        src="/about.jpg"
        alt="About me"
        className="aspect-4/5 w-full rounded-2xl object-cover"
      />

      <div className="flex flex-col items-start gap-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About me
        </h2>
        <p className="max-w-md text-base leading-relaxed text-gray-600 sm:text-lg">
          {BIO}
        </p>
        <Link
          to="/about"
          className="group inline-flex items-center gap-1 font-medium text-fuchsia-600 underline decoration-fuchsia-600 underline-offset-4"
        >
          Read the full story
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  )
}

export default About
