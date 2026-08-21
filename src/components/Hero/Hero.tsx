import React from 'react'

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="hero">
      <div className="wrap hero-flex">
        <div className="hero-inner">
          <h1>Comercio que fluye.<br /><em>Instituciones que confían.</em></h1>
          <p>Desde 2013 brindamos soluciones de consultoría e investigación en facilitación del comercio y logística del transporte internacional, promoviendo procesos de comercio exterior eficientes que reducen los costos de internacionalización de las empresas.</p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#soluciones">Conoce nuestras soluciones</a>
            <a className="btn btn-ghost" href="#contacto">Hablemos</a>
          </div>
        </div>
        <span className="signal-ping" style={{ left: '76%', top: '16%', animationDelay: '0s' }}></span>
        <span className="signal-ping" style={{ left: '86%', top: '20%', animationDelay: '.5s' }}></span>
        <span className="signal-ping" style={{ left: '101%', top: '44%', animationDelay: '1s' }}></span>
        <span className="signal-ping" style={{ left: '84%', top: '27%', animationDelay: '1.5s' }}></span>
        <span className="signal-ping" style={{ left: '92%', top: '24%', animationDelay: '.85s' }}></span>
      </div>
    </section>
  )
}

export default Hero;
