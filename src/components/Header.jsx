import { Link } from 'react-router-dom'
import Nav from './Nav'
import { Button } from './ui/button'

const YOUR_NAME = 'Shreeyanshi Katre'
const CALENDAR_LINK = 'mailto:youremail'

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/40 bg-white/70 px-6 py-3 backdrop-blur-md">
      <Link
        to="/"
        className="text-lg font-semibold tracking-tight text-gray-900"
      >
        {YOUR_NAME}
      </Link>

      <div className="flex items-center gap-4">
        <Nav />
        <Button
          render={<a href={CALENDAR_LINK} />}
          className="border-none bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white shadow-md shadow-fuchsia-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-90 active:translate-y-0 active:scale-95"
        >
          Book a call
        </Button>
      </div>
    </header>
  )
}

export default Header
