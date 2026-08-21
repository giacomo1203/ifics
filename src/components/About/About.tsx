interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="about" id="nosotros">
      <svg className="about-art" viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg">
        <circle cx="190" cy="190" r="170" fill="none" stroke="#F0DCC8" strokeWidth="1.4"/>
        <circle cx="150" cy="230" r="130" fill="none" stroke="#F6C89A" strokeWidth="1.4"/>
        <circle cx="230" cy="150" r="95" fill="none" stroke="#091242" strokeWidth="1" opacity=".12"/>
      </svg>
      <div className="wrap about-grid">
        <div>
          <div className="kicker">Quiénes somos</div>
          <h2>Visión sistémica del comercio transfronterizo</h2>
          <p>IFCOM adopta una visión sistémica de los procesos que concurren en el comercio transfronterizo: transacciones comerciales, servicios logísticos y controles públicos a la carga o medios de transporte. A través de las medidas de facilitación del comercio mejoramos la regulación estatal, aplicando parámetros de eficiencia y un enfoque <em>digital first</em>.</p>
          <p>Fomentamos el comercio sin papeles y la aplicación de herramientas tecnológicas avanzadas; entrenamos a los recursos humanos que operan en las cadenas de suministro internacional, en especial al sector público, que debe acoger la gestión de riesgos como medio para reducir tiempos de atención y cautelar el interés público. Seguimos prácticas internacionales aceptadas, estandarizando procesos que permiten una gestión comercial eficiente e inteligente.</p>
          <p>Estamos conformados por expertos en la gestión e investigación del comercio internacional desde distintas especialidades — derecho, ingeniería industrial y de sistemas, logística y negocios internacionales — junto a una red de consultores en el extranjero que nos ha permitido ejecutar proyectos de alta complejidad en otros países de la región.</p>
        </div>
        <div className="quote-card">
          <p>"La palabra 'facilitar' significa hacer simple o más simple, y este es precisamente el objetivo de la facilitación del comercio: hacer los procesos y procedimientos del comercio internacional tan simples y eficientes como sea posible para comerciantes, autoridades y gobiernos."</p>
          <div className="src">— Centro de Facilitación de Negocios y Comercio Electrónico de las Naciones Unidas (UN/CEFACT)</div>
        </div>
      </div>
    </section>
  )
}

export default About;
