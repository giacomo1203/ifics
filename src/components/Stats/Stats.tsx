interface StatsProps {}

const Stats: React.FC<StatsProps> = () => {
  return (
    <div className="stats">
      <div className="wrap">
        <div className="stat"><div className="num">2013</div><div className="lbl">Año de fundación</div></div>
        <div className="stat"><div className="num">UN/CEFACT</div><div className="lbl">Centro de Facilitación de Negocios de la ONU</div></div>
        <div className="stat"><div className="num">5</div><div className="lbl">Áreas de especialización</div></div>
        <div className="stat"><div className="num">20+</div><div className="lbl">Años de experiencia del equipo</div></div>
      </div>
    </div>
  )
}

export default Stats;
