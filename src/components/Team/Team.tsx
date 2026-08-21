interface TeamProps {}

const Team: React.FC<TeamProps> = () => {
  return (
    <section className="team" id="equipo">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">Equipo</div>
          <h2>Expertos en comercio, regulación y tecnología</h2>
          <p>Un equipo multidisciplinario — derecho, ingeniería industrial y de sistemas, logística y negocios internacionales — con una red de consultores en la región.</p>
        </div>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-photo eg"></div>
            <div className="team-body">
              <h4>Eduardo García-Godos</h4>
              <div className="role">Director · Abogado, LL.M. Universidad de Warwick</div>
              <p>Socio fundador de García-Godos, Lindley Russo &amp; Adrianzén Abogados. Vicepresidente del Comité de Comercio Exterior de ICC Perú. Ex funcionario de MINCETUR e INDECOPI. Consultor para CAF, IFC, BID, USAID y UNCTAD.</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-photo al"></div>
            <div className="team-body">
              <h4>Alfredo Lindley-Russo</h4>
              <div className="role">Asesor Legal · Máster en Propiedad Intelectual, PUCP</div>
              <p>Especialista en simplificación administrativa, barreras no arancelarias y obstáculos técnicos al comercio. Ex funcionario de INDECOPI; docente de posgrado en UPC, PUCP y U. del Pacífico.</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-photo cg"></div>
            <div className="team-body">
              <h4>Carlos Gómez</h4>
              <div className="role">Especialista en Procesos y Logística · Ingeniero Industrial, UNI</div>
              <p>Ex Coordinador Técnico del proyecto Ventanilla Única de Comercio Exterior del Perú (VUCE 2.0). Consultor de Trade Facilitation Office Canada.</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-photo mg"></div>
            <div className="team-body">
              <h4>Martín Gutiérrez</h4>
              <div className="role">Especialista en Tecnología · Ingeniero de Sistemas</div>
              <p>Máster en Dirección de TI (ESAN) y en Gestión de TI (Universidad Ramón Llull). Ha liderado proyectos tecnológicos en cadena de suministro, puertos y aduanas.</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-photo ba"></div>
            <div className="team-body">
              <h4>Brenda Apaza</h4>
              <div className="role">Especialista en Comercio Internacional</div>
              <p>Licenciada en Negocios Internacionales, UNMSM. Especialización en despacho aduanero y comercio sostenible. Consultora para MINCETUR, PROMPERÚ, SUNAT, USAID y CEPAL.</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-photo la"></div>
            <div className="team-body">
              <h4>Luis Adrianzén</h4>
              <div className="role">Asesor · Máster en Derecho, KU Leuven</div>
              <p>Experto en análisis económico del derecho y regulación de la competencia. Ex Secretario Técnico de INDECOPI; ex Gerente Legal en Backus y Telefónica del Perú.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team;
