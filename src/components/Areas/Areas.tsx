interface AreasProps {}

const Areas: React.FC<AreasProps> = () => {
  return (
    <section className="areas" id="areas">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">Especialización</div>
          <h2>Áreas de trabajo</h2>
          <p>Seleccionamos con rigurosidad las áreas donde contamos con una ventaja comparativa para lograr el impacto esperado.</p>
        </div>
        <div className="grid-3">
          <div className="card">
            <div className="num-badge"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3.5H14L18 7.5V20.5H6V3.5Z"
                    stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
              <path d="M14 3.5V7.5H18"
                    stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
              <path d="M9 11H15"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M9 14.5H13"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M9 17.5L10.5 19L14.5 15"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </svg></div>
            <h3>Mejora de procedimientos y regulaciones</h3>
            <p>Marcos legales de transparencia, intercambio de información y control de permisos. Análisis de impacto regulatorio y benchmark de mejores prácticas internacionales.</p>
          </div>
          <div className="card">
            <div className="num-badge"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3.5" width="18" height="13" rx="1.5"
                    stroke="currentColor" strokeWidth="1.8"/>
              <path d="M8 20.5H16"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M12 16.5V20.5"
                    stroke="currentColor" strokeWidth="1.8"/>
              <path d="M6.5 7H17.5"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M6.5 10.5H11"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M14 10.5H17.5"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M14 13.5H17.5"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg></div>
            <h3>Plataformas digitales y ventanillas únicas</h3>
            <p>Diseño y provisión de plataformas de comercio transfronterizo. Reingeniería, automatización de procesos y digitalización de documentos.</p>
          </div>
          <div className="card">
            <div className="num-badge"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H14V17H3V6Z"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinejoin="round"/>
              <path d="M14 10H18L21 13.5V17H14V10Z"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinejoin="round"/>
              <path d="M18 10V13.5H21"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinejoin="round"/>
              <circle cx="7" cy="17" r="2"
                      stroke="currentColor" strokeWidth="1.8"/>
              <circle cx="17" cy="17" r="2"
                      stroke="currentColor" strokeWidth="1.8"/>
            </svg></div>
            <h3>Procesos logísticos y servicio aduanero</h3>
            <p>Análisis de la cadena de suministro portuaria y aeroportuaria en armonía con los procesos aduaneros, que ocupan un tercio del tiempo de despacho (Banco Mundial).</p>
          </div>
          <div className="card">
            <div className="num-badge"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L19 6V11C19 15.5 16.2 19 12 21C7.8 19 5 15.5 5 11V6L12 3Z"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinejoin="round"/>
              <path d="M8.5 12L11 14.5L15.5 9.5"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </svg></div>
            <h3>Barreras no arancelarias y sistema de la calidad</h3>
            <p>Normalización, reglamentos técnicos y evaluación de la conformidad. Estudios de impacto regulatorio para un comercio leal y eficiente.</p>
          </div>
          <div className="card">
            <div className="num-badge"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 20H21"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M5 20V10L12 5L19 10V20"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinejoin="round"/>
              <path d="M8 20V14H11V20"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinejoin="round"/>
              <path d="M13 20V14H16V20"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinejoin="round"/>
              <path d="M12 5V3"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg></div>
            <h3>Zonas Económicas Especiales</h3>
            <p>En alianza con Araujo Ibarra &amp; Asociados (Colombia), asesoramos la instalación y expansión de inversiones en ZEE y el diseño de políticas conforme a mejores prácticas internacionales.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Areas;
