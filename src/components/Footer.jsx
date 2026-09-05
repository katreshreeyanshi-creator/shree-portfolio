const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shreeyanshi-katre-b712a7407?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/shreeyanshi_katre?igsi=MWNiaTIwZGFqbzRsNw%3D%3D&utm_source=qr',
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/shreeyanshikatre',
  },
]

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Shreeyanshi Katre
          </h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Designing ideas into identities, experiences, and visuals that
            make brands impossible to ignore.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
            Contact
          </h4>
          <a
            href="mailto:shreeyanshikatre@gmail.com"
            className="text-sm transition-colors duration-200 hover:text-white"
          >
            shreeyanshikatre@gmail.com
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-sm transition-colors duration-200 hover:text-white"
          >
            Download CV (PDF)
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
            Social
          </h4>
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-200 hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-gray-500">
        © 2026 Shreeyanshi Katre
      </div>
    </footer>
  )
}

export default Footer
