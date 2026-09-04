import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Nav() {
  return (
    <nav className="sticky top-4 z-50 mx-auto flex w-fit gap-1 rounded-full border border-white/40 bg-white/70 p-1.5 shadow-lg shadow-black/5 backdrop-blur-md">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            [
              'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
              isActive
                ? 'bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white shadow-md shadow-fuchsia-500/30'
                : 'text-gray-600 hover:text-fuchsia-600 hover:underline hover:underline-offset-4',
            ].join(' ')
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Nav
