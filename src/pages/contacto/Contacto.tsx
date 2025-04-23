import React from 'react'
import { content } from '../../config/content'
import { dataContacto } from './data'
import Layout from '../../components/Layout'
import { useLanguage } from '../../context/LanguageContext'
import PageHeader from '../../components/PageHeader/PageHeader'
import address from '../../assets/address.svg'
import phone from '../../assets/phone.svg'
import email from '../../assets/email.svg'
import styles from './Contacto.module.scss'

const Contacto: React.FC = () => {
  const { currentLanguage } = useLanguage()

  return (
    <Layout
      title={content.meta.title}
      description={content.meta.description}
      keywords={content.meta.keywords}
      image={content.meta.image}
    >
      <>
        <PageHeader
          bg={dataContacto[currentLanguage].pageHeader.bg}
          text={dataContacto[currentLanguage].pageHeader.text}
        />
        <div className={styles.contacto}>
          <div className={styles.contacto__container}>
            <h2 className={styles.title}>
              {dataContacto[currentLanguage].title}
            </h2>
            <p className={styles.desc}>{dataContacto[currentLanguage].desc}</p>

            <div className={styles.itemsContainer}>
              <div className={styles.itemsContainer__1}>
                <img src="https://eticare.com.pe/ifics/pictures/contacto.webp" alt="Contacto" />
              </div>
              <div className={styles.itemsContainer__2}>
                <div className={styles.address}>
                  <img src={address} alt="Dirección" />
                  {dataContacto[currentLanguage].address}
                </div>
                <div className={styles.phone}>
                  <img src={phone} alt="Teléfono" />
                  <a
                    href={`tel:${dataContacto[currentLanguage].phone.replace(/\D/g, '')}`}
                    target="_blank"
                  >
                    {dataContacto[currentLanguage].phone}
                  </a>
                </div>
                <div className={styles.email}>
                  <img src={email} alt="Correo" />
                  <a
                    href={`mailto:${dataContacto[currentLanguage].email}`}
                    target="_blank"
                  >
                    {dataContacto[currentLanguage].email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}

export default Contacto
