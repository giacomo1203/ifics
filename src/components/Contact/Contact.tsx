import { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { WEB3FORMS_ACCESS_KEY } from '../../config/web3forms';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: false,
    institution: false,
    message: false,
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmit, setLastSubmit] = useState(0);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
  
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  
    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  
    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      institution: !formData.institution.trim(),
      message: !formData.message.trim(),
    };
  
    setErrors(newErrors);
  
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const now = Date.now();

    if (now - lastSubmit < 10000) {
      console.log("esperar debes");
      return;
    }

    setLastSubmit(now);
  
    const isValid = validateForm();
  
    if (!isValid) {
      return;
    }
  
    setIsSubmitting(true);
    setSubmitted(false);
  
    try {
      const data = new FormData();
  
      data.append('access_key', WEB3FORMS_ACCESS_KEY);
      data.append('name', formData.name);
      data.append('institution', formData.institution);
      data.append('message', formData.message);
      data.append('botcheck', '');
  
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: data,
        },
      );
  
      const result = await response.json();
  
      if (!result.success) {
        throw new Error('Error enviando el formulario');
      }
  
      setSubmitted(true);
  
      setFormData({
        name: '',
        institution: '',
        message: '',
      });
    } catch (error) {
      console.error('Error enviando formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <form id="contact-form" noValidate onSubmit={handleSubmit}>
          <div className={`form-field ${errors.name ? 'has-error' : ''}`}>
              <label htmlFor="name">{t.contact.form.nameLabel}</label>
              <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t.contact.form.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  aria-describedby="name-error"
              />
              <span id="name-error" className="form-error" role="alert">
                {t.contact.form.nameError}
              </span>
          </div>
      
          <div className={`form-field ${errors.institution ? 'has-error' : ''}`}>
              <label htmlFor="institution">{t.contact.form.institutionLabel}</label>
              <input
                  id="institution"
                  name="institution"
                  type="text"
                  placeholder={t.contact.form.institutionPlaceholder}
                  value={formData.institution}
                  onChange={handleChange}
                  aria-describedby="institution-error"
              />
              <span id="institution-error" className="form-error" role="alert">
                {t.contact.form.institutionError}
              </span>
          </div>
      
          <div className={`form-field ${errors.message ? 'has-error' : ''}`}>
              <label htmlFor="message">{t.contact.form.messageLabel}</label>
              <textarea
                  id="message"
                  name="message"
                  placeholder={t.contact.form.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  aria-describedby="message-error"
              ></textarea>
              <span id="message-error" className="form-error" role="alert">
                {t.contact.form.institutionError}
              </span>
          </div>

          <input
            type="text"
            name="botcheck"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />
      
          <button
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t.contact.form.sending
              : t.contact.form.send}
          </button>
      
          {submitted && (
            <div
              id="form-success"
              className="form-success"
              role="status"
              aria-live="polite"
            >
              {t.contact.form.successMessage}
            </div>
          )}
      </form>
      </div>
    </section>
  )
}

export default Contact;
