interface AlliancesProps {}

const Alliances: React.FC<AlliancesProps> = () => {
  return (
    <section className="alliances" id="alianzas">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">Alianzas y clientes</div>
          <h2>Organismos con los que hemos trabajado</h2>
          <p>Proyectos y colaboraciones con agencias de cooperación, organismos multilaterales y entidades públicas de la región.</p>
        </div>
        <div className="logos-row">
          <div className="logo-chip">CAF</div>
          <div className="logo-chip">IFC</div>
          <div className="logo-chip">BID</div>
          <div className="logo-chip">USAID</div>
          <div className="logo-chip">UNCTAD</div>
          <div className="logo-chip">Global Alliance for Trade Facilitation</div>
          <div className="logo-chip">MINCETUR</div>
          <div className="logo-chip">PROMPERÚ</div>
          <div className="logo-chip">SUNAT</div>
          <div className="logo-chip">SENASA</div>
          <div className="logo-chip">IICA</div>
          <div className="logo-chip">TFO Canada</div>
          <div className="logo-chip">CEPAL</div>
          <div className="logo-chip">UN/CEFACT</div>
        </div>
        <div className="partner-highlight">
          <h4>Araujo Ibarra &amp; Asociados — Colombia</h4>
          <p>Alianza con una de las consultoras líderes del mundo en Zonas Económicas Especiales, que nos permite brindar servicios de alta especialización en la instalación y expansión de inversiones en ZEE en toda la región.</p>
        </div>
      </div>
    </section>
  )
}

export default Alliances;
