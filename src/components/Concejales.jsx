const CONCEJALES = [
  { nombre: 'María González', bloque: 'Frente de Todos', email: 'contacto@ejemplo.gob.ar' },
  { nombre: 'Juan Pérez', bloque: 'Juntos por el Cambio', email: 'contacto@ejemplo.gob.ar' },
  { nombre: 'Ana Rodríguez', bloque: 'Frente de Todos', email: 'contacto@ejemplo.gob.ar' },
]

export default function Concejales() {
  return (
    <section id="concejales" className="section-pad bg-hcd-light">
      <div className="section-wrap max-w-5xl">
        <div className="border-l-4 border-hcd-blue pl-4 sm:pl-6 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-hcd-dark">Concejales</h2>
          <p className="text-gray-600 mt-0.5 text-sm sm:text-base">Representación</p>
        </div>
        <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-10">Los concejales elegidos por voto popular representan a los vecinos de la capital del Norte Neuquino.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CONCEJALES.map((c) => (
            <div key={c.nombre} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-semibold text-hcd-dark text-sm sm:text-base">{c.nombre}</h3>
                <p className="text-sm text-hcd-blue font-medium mt-0.5">{c.bloque}</p>
                <a href={`mailto:${c.email}`} className="text-sm text-gray-600 hover:text-hcd-blue mt-2 inline-block">Contacto</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
