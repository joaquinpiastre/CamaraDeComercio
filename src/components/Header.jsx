import { useState, useEffect } from 'react'

const LOGO_URL = 'https://graph.facebook.com/CHMLconcejodeliberante/picture?type=large'
const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#institucional', label: 'Institucional' },
  { href: '#concejales', label: 'Concejales' },
  { href: '#ordenanzas', label: 'Ordenanzas' },
  { href: '#noticias', label: 'Noticias' },
  { href: '#participacion', label: 'Participación' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm border-b border-gray-100' : 'bg-white border-b border-gray-100'
      }`}
    >
      <nav className="section-wrap flex items-center justify-between h-14 sm:h-16 lg:h-[4.25rem]">
        <a href="#inicio" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <span className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-gray-200 overflow-hidden bg-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm">
            <img
              src={LOGO_URL}
              alt="HCD Chos Malal"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling?.classList.remove('hidden')
              }}
            />
            <svg className="w-5 h-5 text-hcd-blue hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </span>
          <span className="font-semibold text-hcd-dark text-sm sm:text-base">HCD Chos Malal</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="block py-2.5 px-3 sm:px-4 rounded-lg text-sm font-medium text-gray-600 hover:text-hcd-blue hover:bg-hcd-light/80 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="lg:hidden p-2.5 -mr-2 rounded-lg text-hcd-dark hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-gray-50 border-t border-gray-100 py-4 px-4">
          <ul className="flex flex-col gap-0.5">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-3.5 px-4 rounded-xl text-[15px] font-medium text-gray-700 hover:text-hcd-blue hover:bg-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
