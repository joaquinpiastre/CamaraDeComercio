export default function Contacto() {
  return (
    <section id="contacto" className="section-pad bg-hcd-light">
      <div className="section-wrap max-w-4xl">
        <div className="border-l-4 border-hcd-blue pl-4 sm:pl-6 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-hcd-dark">Contacto</h2>
          <p className="text-gray-600 mt-0.5 text-sm sm:text-base">Escríbanos</p>
        </div>
        <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8">Sede del HCD: 4 de Agosto 454, Chos Malal. Municipalidad: (02948) 41-3722.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-hcd-dark mb-1.5 text-sm sm:text-base">Dirección</h3>
            <p className="text-sm text-gray-600">4 de Agosto 454<br />Chos Malal, Neuquén</p>
          </div>
          <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-hcd-dark mb-1.5 text-sm sm:text-base">Email</h3>
            <a href="mailto:hcdchosmalal@yahoo.com.ar" className="text-sm text-hcd-blue hover:underline break-all">hcdchosmalal@yahoo.com.ar</a>
          </div>
          <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-hcd-dark mb-1.5 text-sm sm:text-base">Teléfono</h3>
            <a href="tel:+542948421583" className="text-sm text-hcd-blue hover:underline">+54 2948 421583</a>
          </div>
        </div>
      </div>
    </section>
  )
}
