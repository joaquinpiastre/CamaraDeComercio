import { useState } from 'react'

const ORDENANZAS = [
  { numero: '2541', año: '2024', tema: 'Presupuesto municipal' },
  { numero: '2540', año: '2024', tema: 'Tránsito y vialidad' },
  { numero: '2539', año: '2023', tema: 'Salud y medio ambiente' },
  { numero: '2538', año: '2023', tema: 'Fiesta Nacional del Chivito – interés municipal' },
]

export default function Ordenanzas() {
  const [buscar, setBuscar] = useState('')
  const filtradas = ORDENANZAS.filter(
    (o) =>
      o.numero.includes(buscar) ||
      o.año.includes(buscar) ||
      o.tema.toLowerCase().includes(buscar.toLowerCase())
  )

  return (
    <section id="ordenanzas" className="section-pad bg-white">
      <div className="section-wrap max-w-5xl">
        <div className="border-l-4 border-hcd-blue pl-4 sm:pl-6 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-hcd-dark">Ordenanzas</h2>
          <p className="text-gray-600 mt-0.5 text-sm sm:text-base">Normativa</p>
        </div>
        <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">Consulte y descargue las ordenanzas municipales.</p>
        <input
          type="search"
          placeholder="Buscar por número, año o tema..."
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
          className="w-full max-w-md px-4 py-3 text-sm sm:text-base border border-gray-200 rounded-xl mb-6 focus:ring-2 focus:ring-hcd-blue focus:border-hcd-blue outline-none"
        />
        <div className="border border-gray-200 rounded-xl overflow-hidden overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm sm:text-base">
            <thead className="bg-hcd-dark text-white">
              <tr>
                <th className="px-3 sm:px-4 py-2.5 sm:py-3 font-semibold text-xs sm:text-sm">Número</th>
                <th className="px-3 sm:px-4 py-2.5 sm:py-3 font-semibold text-xs sm:text-sm">Año</th>
                <th className="px-3 sm:px-4 py-2.5 sm:py-3 font-semibold text-xs sm:text-sm">Tema</th>
                <th className="px-3 sm:px-4 py-2.5 sm:py-3 font-semibold text-xs sm:text-sm">PDF</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtradas.map((o) => (
                <tr key={o.numero} className="hover:bg-hcd-light/50">
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 font-medium">{o.numero}</td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-gray-600">{o.año}</td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-gray-600">{o.tema}</td>
                  <td className="px-3 sm:px-4 py-2.5 sm:py-3">
                    <a href="#" className="font-medium text-hcd-blue hover:underline">Descargar</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
