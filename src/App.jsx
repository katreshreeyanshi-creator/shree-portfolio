import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
