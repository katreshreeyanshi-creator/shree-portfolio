const projects = [
  {
    image: '/work/01.jpg',
    title: 'E-Commerce Clothing Website',
    description: 'UI/UX design for a women’s fashion brand, from homepage to checkout.',
  },
  {
    image: '/work/02.jpg',
    title: 'Digital Remote (Television + OTT)',
    description: 'Mobile remote control app UI for smart TVs and streaming apps.',
  },
  {
    image: '/work/03.jpg',
    title: 'Graphic Designs',
    description: 'Social media ad creatives and brand identity for a chicken restaurant.',
  },
  {
    image: '/work/04.jpg',
    title: 'FurnishFlex (Furniture Rental App)',
    description: 'End-to-end app UI for renting furniture online, from onboarding to cart.',
  },
]

function FeaturedWork() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Selected work
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map(({ image, title, description }) => (
          <article
            key={title}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10 active:translate-y-0 active:scale-[0.98]"
          >
            <div className="aspect-4/3 overflow-hidden bg-gray-100">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedWork
