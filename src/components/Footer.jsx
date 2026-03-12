const LOGO_URL = 'https://graph.facebook.com/CHMLconcejodeliberante/picture?type=large'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-hcd-dark text-white py-10 sm:py-12">
      <div className="section-wrap max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <img src={LOGO_URL} alt="HCD" className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover border border-white/20 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm sm:text-base">Honorable Concejo Deliberante</p>
              <p className="text-xs sm:text-sm text-white/70">Capital del Norte Neuquino · Chos Malal, Neuquén</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <a href="#institucional" className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors">Institucional</a>
            <a href="#ordenanzas" className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors">Ordenanzas</a>
            <a href="#contacto" className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors">Contacto</a>
            <a href="https://www.facebook.com/CHMLconcejodeliberante/" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/60">
          <p className="text-center sm:text-left">© {year} Honorable Concejo Deliberante de Chos Malal</p>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Transparencia activa</a>
        </div>
      </div>
    </footer>
  )
}
