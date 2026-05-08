import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo1 from '../../assets/Logo1.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Our Products' },
    { to: '/contact', label: 'Contact' },
    { to: '/admin', label: 'Admin' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999, height: '84px' }}
      className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={Logo1}
              alt="Sree Sai Traders Logo"
              style={{ height: '68px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  isActive(link.to)
                    ? 'text-red-700 bg-red-50'
                    : 'text-gray-700 hover:text-red-700 hover:bg-red-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Call Now — Desktop */}
          <a
            href="tel:9894868478"
            className="hidden md:flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-md flex-shrink-0"
          >
            <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now
          </a>

          {/* Hamburger — Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ minWidth: '44px', minHeight: '44px' }}
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors"
          >
            {menuOpen ? (
              <svg style={{ width: '26px', height: '26px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg style={{ width: '26px', height: '26px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden bg-white border-t-2 border-red-100"
          style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.12)', position: 'absolute', top: '72px', left: 0, right: 0, zIndex: 9999 }}
        >
          <div className="px-4 pt-2 pb-4 space-y-1">

            {/* Logo in mobile menu */}
            <div className="flex items-center py-3 mb-1 border-b border-red-50">
              <img
                src={Logo1}
                alt="Sree Sai Traders"
                style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            {/* Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg font-semibold text-base transition-all ${
                  isActive(link.to)
                    ? 'text-red-700 bg-red-50'
                    : 'text-gray-700 hover:text-red-700 hover:bg-red-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Call Button */}
            <a
              href="tel:9894868478"
              className="flex items-center gap-3 bg-red-700 hover:bg-red-800 text-white px-4 py-3 rounded-lg font-semibold text-base transition-colors mt-2"
            >
              <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call: +91 9894868478
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919894868478?text=Hello SST! I have an enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold text-base transition-colors"
            >
              <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.106.549 4.081 1.507 5.793L.057 23.75l6.064-1.446C7.827 23.462 9.867 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.671-.523-5.192-1.429l-.373-.22-3.596.858.899-3.516-.243-.388C2.524 15.67 2 13.896 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp Us
            </a>

          </div>
        </div>
      )}
    </nav>
  )
}
