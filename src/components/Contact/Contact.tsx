import { useLanguage } from '../../i18n/LanguageContext';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const { t } = useLanguage();

  return (
    <section className="contact" id="contacto">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <div className="kicker">{t.contact.tag}</div>
          <h3>{t.contact.title}</h3>
          <div className="info-row"><div className="k">{t.contact.address}</div><div className="v">Calle San Ignacio de Loyola 476, Dpt 302, Miraflores, Lima, Perú</div></div>
          <div className="info-row"><div className="k">{t.contact.phone}</div><div className="v">(511) 704-3795</div></div>
          <div className="info-row"><div className="k">{t.contact.email}</div><div className="v">info@ipfcom.org</div></div>
        </div>
        <form id="contact-form" noValidate>
          <div className="form-field">
              <label htmlFor="name">{t.contact.form.nameLabel}</label>
              <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t.contact.form.namePlaceholder}
                  required
                  aria-describedby="name-error"
              />
              <span id="name-error" className="form-error" role="alert">
                {t.contact.form.nameError}
              </span>
          </div>
      
          <div className="form-field">
              <label htmlFor="institution">{t.contact.form.institutionLabel}</label>
              <input
                  id="institution"
                  name="institution"
                  type="text"
                  placeholder={t.contact.form.institutionPlaceholder}
                  required
                  aria-describedby="institution-error"
              />
              <span id="institution-error" className="form-error" role="alert">
                {t.contact.form.institutionError}
              </span>
          </div>
      
          <div className="form-field">
              <label htmlFor="message">{t.contact.form.messageLabel}</label>
              <textarea
                  id="message"
                  name="message"
                  placeholder={t.contact.form.institutionPlaceholder}
                  required
                  aria-describedby="message-error"
              ></textarea>
              <span id="message-error" className="form-error" role="alert">
                {t.contact.form.institutionError}
              </span>
          </div>
      
          <button type="submit">{t.contact.form.send}</button>
      
          <div
              id="form-success"
              className="form-success"
              role="status"
              aria-live="polite"
          >
              {t.contact.form.successMessage}
          </div>
      </form>
      </div>
    </section>
  )
}

export default Contact;
