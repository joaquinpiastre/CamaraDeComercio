export default function Institucional() {
  return (
    <section id="institucional" className="section-pad bg-white">
      <div className="section-wrap max-w-4xl">
        <div className="border-l-4 border-hcd-blue pl-4 sm:pl-6 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-hcd-dark">Institucional</h2>
          <p className="text-gray-600 mt-0.5 text-sm sm:text-base">Nuestro rol</p>
        </div>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
          Chos Malal es la principal ciudad del norte neuquino, fundada por el coronel Manuel José Olascoaga. 
          El HCD trabaja desde la sede en 4 de Agosto 454 y alberga el ciclo «Conversaciones sobre Historia Cultural del Neuquén».
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-hcd-dark mb-2 text-sm sm:text-base">¿Qué es el Concejo Deliberante?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Es el órgano legislativo del municipio, integrado por concejales elegidos por voto popular. 
              Representa a la comunidad, sanciona ordenanzas y controla al poder ejecutivo local.
            </p>
          </div>
          <div className="p-4 sm:p-6 border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-hcd-dark mb-2 text-sm sm:text-base">Funciones principales</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>· Sancionar ordenanzas municipales</li>
              <li>· Controlar al poder ejecutivo municipal</li>
              <li>· Tratar temas de interés público local</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-hcd-light rounded-xl">
          <h3 className="font-semibold text-hcd-dark mb-3 text-sm sm:text-base">Autoridades del HCD</h3>
          <ul className="text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
            <li><span className="text-hcd-blue font-medium">Presidenta:</span> Gimena Laura Vega</li>
            <li><span className="text-hcd-blue font-medium">Vicepresidenta 1°:</span> Paula Yamila Cano</li>
            <li><span className="text-hcd-blue font-medium">Vicepresidente 2°:</span> Pedro Francisco Semper</li>
            <li><span className="text-hcd-blue font-medium">Secretario Parlamentario:</span> José Manuel Soto</li>
            <li><span className="text-hcd-blue font-medium">Secretaria Administrativa:</span> Claudia Rodríguez</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
