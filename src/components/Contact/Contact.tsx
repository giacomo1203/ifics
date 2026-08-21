interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <section className="contact" id="contacto">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <div className="kicker">Contacto</div>
          <h3>Conversemos sobre su proyecto</h3>
          <div className="info-row"><div className="k">Dirección</div><div className="v">Calle San Ignacio de Loyola 476, Dpt 302, Miraflores, Lima, Perú</div></div>
          <div className="info-row"><div className="k">Teléfono</div><div className="v">(511) 704-3795</div></div>
          <div className="info-row"><div className="k">Email</div><div className="v">info@ipfcom.org</div></div>
        </div>
        <form id="contact-form" noValidate>
          <div className="form-field">
              <label htmlFor="name">Nombre</label>
              <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Su nombre"
                  required
                  aria-describedby="name-error"
              />
              <span id="name-error" className="form-error" role="alert">
                  El nombre es obligatorio.
              </span>
          </div>
      
          <div className="form-field">
              <label htmlFor="institution">Institución</label>
              <input
                  id="institution"
                  name="institution"
                  type="text"
                  placeholder="Organización o entidad"
                  required
                  aria-describedby="institution-error"
              />
              <span id="institution-error" className="form-error" role="alert">
                  La institución es obligatoria.
              </span>
          </div>
      
          <div className="form-field">
              <label htmlFor="message">Mensaje</label>
              <textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntenos sobre su proyecto"
                  required
                  aria-describedby="message-error"
              ></textarea>
              <span id="message-error" className="form-error" role="alert">
                  El mensaje es obligatorio.
              </span>
          </div>
      
          <button type="submit">Enviar mensaje</button>
      
          <div
              id="form-success"
              className="form-success"
              role="status"
              aria-live="polite"
          >
              ¡Mensaje enviado correctamente!
          </div>
      </form>
      </div>
    </section>
  )
}

export default Contact;
