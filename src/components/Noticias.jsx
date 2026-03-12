const NOTICIAS = [
  { fecha: 'Octubre 2024', titulo: 'Charlas de historia en la sede del HCD', texto: 'Charla del ciclo «Conversaciones sobre Historia Cultural del Neuquén» en homenaje al primer gobernador, Manuel José Olascoaga.' },
  { fecha: 'Septiembre 2025', titulo: '2° Encuentro de Mujeres en el Bádminton Neuquino', texto: 'El HCD declaró de interés municipal el encuentro organizado con Deportes y la Municipalidad.' },
  { fecha: 'Marzo 2024', titulo: 'Sesión itinerante en barrio', texto: 'Vecinos pudieron presentar problemáticas locales directamente a los concejales.' },
]

export default function Noticias() {
  return (
    <section id="noticias" className="section-pad bg-hcd-light">
      <div className="section-wrap max-w-5xl">
        <div className="border-l-4 border-hcd-blue pl-4 sm:pl-6 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-hcd-dark">Noticias</h2>
          <p className="text-gray-600 mt-0.5 text-sm sm:text-base">Novedades</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {NOTICIAS.map((n) => (
            <article key={n.titulo} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16a6 6 0 01-12 0" /></svg>
              </div>
              <div className="p-4 sm:p-5">
                <span className="text-xs font-medium text-hcd-blue">{n.fecha}</span>
                <h3 className="font-semibold text-hcd-dark mt-1 mb-2 text-sm sm:text-base">{n.titulo}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{n.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
