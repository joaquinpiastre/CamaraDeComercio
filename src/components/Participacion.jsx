import { useState } from 'react'

export default function Participacion() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section id="participacion" className="section-pad bg-white">
      <div className="section-wrap max-w-xl">
        <div className="border-l-4 border-hcd-blue pl-4 sm:pl-6 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-hcd-dark">Participación ciudadana</h2>
          <p className="text-gray-600 mt-0.5 text-sm sm:text-base">Su voz</p>
        </div>
        <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8">Envíe su consulta o propuesta. Los vecinos pueden acercar iniciativas al Concejo.</p>
        {enviado ? (
          <div className="p-5 sm:p-6 bg-hcd-light rounded-xl text-center">
            <p className="text-hcd-dark font-medium text-sm sm:text-base">Gracias por su mensaje. Será atendido por el Concejo Deliberante.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-hcd-dark mb-1.5">Nombre completo</label>
              <input id="nombre" name="nombre" required type="text" className="w-full px-4 py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-hcd-blue focus:border-hcd-blue outline-none" placeholder="Su nombre" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-hcd-dark mb-1.5">Email</label>
              <input id="email" name="email" required type="email" className="w-full px-4 py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-hcd-blue focus:border-hcd-blue outline-none" placeholder="su@email.com" />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-hcd-dark mb-1.5">Mensaje</label>
              <textarea id="mensaje" name="mensaje" required rows={5} className="w-full px-4 py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-hcd-blue focus:border-hcd-blue outline-none resize-none" placeholder="Escriba su consulta o propuesta..." />
            </div>
            <button type="submit" className="w-full py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-hcd-blue hover:bg-blue-600 transition-colors">
              Enviar
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
