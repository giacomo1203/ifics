interface SolutionProps {}

const Solution: React.FC<SolutionProps> = () => {
  return (
    <section id="soluciones">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">Qué ofrecemos</div>
          <h2>Soluciones</h2>
          <p>Servicios diseñados con arreglo a altos estándares y metodologías sustentadas en mejores prácticas internacionales, para empresas y entidades públicas.</p>
        </div>
        <div className="grid-4">
          <div className="card">
            <div className="num-badge"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="8" r="3"
                      stroke="currentColor" strokeWidth="1.8"/>
              <path d="M3.5 19C3.5 15.7 5.9 13.5 9 13.5C12.1 13.5 14.5 15.7 14.5 19"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round"/>
              <path d="M14 7.5H19C20.1 7.5 21 8.4 21 9.5V14C21 15.1 20.1 16 19 16H17L14 18V16"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg></div>
            <h3>Consultoría</h3>
            <p>Evaluamos y corregimos ineficiencias en transacciones comerciales internacionales, con enfoque en evidencia y en todas las materias del Acuerdo de Facilitación del Comercio de la OMC.</p>
          </div>
          <div className="card">
            <div className="num-badge"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="3.5" width="16" height="6" rx="1.5"
                    stroke="currentColor" strokeWidth="1.8"/>
              <rect x="4" y="10.5" width="16" height="6" rx="1.5"
                    stroke="currentColor" strokeWidth="1.8"/>
              <rect x="4" y="17.5" width="16" height="3" rx="1"
                    stroke="currentColor" strokeWidth="1.8"/>
              <path d="M7.5 6.5H7.51M7.5 13.5H7.51M7.5 19H7.51"
                    stroke="currentColor" strokeWidth="2.2"
                    strokeLinecap="round"/>
              <path d="M11 6.5H17M11 13.5H17"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round"/>
            </svg></div>
            <h3>Tecnología y digitalización</h3>
            <p>Automatización de procesos, integración de sistemas, interoperabilidad, análisis de datos y plataformas de intercambio de información para la cadena de suministro.</p>
          </div>
          <div className="card">
            <div className="num-badge"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10.5" cy="10.5" r="6.5"
                      stroke="currentColor" strokeWidth="1.8"/>
              <path d="M15.5 15.5L21 21"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round"/>
              <path d="M7.5 12.5L9.5 10.5L11 12L14 8.5"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg></div>
            <h3>Análisis e investigación</h3>
            <p>Insumos para tomadores de decisión basados en conocimiento integral de los problemas, viabilidad de soluciones y rigurosidad en la medición de resultados.</p>
          </div>
          <div className="card">
            <div className="num-badge"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="12" rx="1.5"
                    stroke="currentColor" strokeWidth="1.8"/>
              <path d="M7 20H17"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round"/>
              <path d="M12 16V20"
                    stroke="currentColor" strokeWidth="1.8"/>
              <path d="M7 13L10 10L12 12L15 8L17 10"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg></div>
            <h3>Capacitación</h3>
            <p>Talleres, seminarios y cursos con contenidos de vanguardia sobre el marco regulatorio de la facilitación del comercio y el entorno de los mercados externos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution;
