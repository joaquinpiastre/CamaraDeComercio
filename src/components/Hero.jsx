import { useState, useEffect } from 'react'

const LOGO_URL = 'https://graph.facebook.com/CHMLconcejodeliberante/picture?type=large'

const FONDO_PATHS = [
  '/Imagen-fondo.jpg',
  '/assets/Imagen-fondo.jpg',
  'Imagen-fondo.jpg',
  'assets/Imagen-fondo.jpg',
  '/Imagen-fondo.jpeg',
  '/assets/Imagen-fondo.jpeg',
  '/Imagen-fondo.png',
  '/assets/Imagen-fondo.png',
]

export default function Hero() {
  const [bgImage, setBgImage] = useState(null)

  useEffect(() => {
    let index = 0
    function tryNext() {
      if (index >= FONDO_PATHS.length) return
      const src = FONDO_PATHS[index]
      index += 1
      const img = new Image()
      img.onload = () => setBgImage(src)
      img.onerror = tryNext
      img.src = src
    }
    tryNext()
  }, [])

  return (
    <section id="inicio" className="relative min-h-[100dvh] min-h-screen flex flex-col items-center justify-center bg-hcd-dark overflow-hidden pt-14 sm:pt-16 lg:pt-[4.25rem] pb-12 sm:pb-16 lg:pb-20">
      {/* Imagen de fondo */}
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
      )}
      {/* Overlay para que el texto se lea bien */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.5) 0%, rgba(15, 23, 42, 0.75) 100%)',
        }}
      />
      <div className="relative z-10 w-full section-wrap">
        <div className="max-w-2xl mx-auto text-center">
          <img
            src={LOGO_URL}
            alt="Honorable Concejo Deliberante de Chos Malal"
            className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mx-auto rounded-2xl object-cover border-2 border-white/20 shadow-xl mb-6 sm:mb-8"
          />
          <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-2 sm:mb-3">
            Honorable Concejo Deliberante
          </h1>
          <p className="text-base sm:text-lg text-white/90 mb-1 sm:mb-2">Chos Malal</p>
          <p className="text-xs sm:text-sm text-white/70 mb-6 sm:mb-8">Capital del Norte Neuquino · Neuquén, Argentina</p>
          <p className="text-white/80 text-sm sm:text-base max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed">
            Órgano legislativo municipal. Representamos a los vecinos desde la primera capital del Territorio de Neuquén (1887–1904).
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#institucional"
              className="inline-flex justify-center items-center px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-hcd-blue hover:bg-blue-600 transition-colors"
            >
              Conocer más
            </a>
            <a
              href="#contacto"
              className="inline-flex justify-center items-center px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white border-2 border-white/80 hover:bg-white hover:text-hcd-dark transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
