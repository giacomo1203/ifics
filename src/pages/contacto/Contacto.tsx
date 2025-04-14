import React from 'react'
import { content } from '../../config/content'
import { dataContacto } from './data'
import Layout from '../../components/Layout'
import { useLanguage } from '../../context/LanguageContext'
import PageHeader from '../../components/PageHeader/PageHeader'
import address from '../../assets/address.svg'
import phone from '../../assets/phone.svg'
import email from '../../assets/email.svg'
import contacto from '../../assets/contacto.png'
import styles from './Contacto.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'

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
                        <h2 className={styles.title}>{dataContacto[currentLanguage].title}</h2>
                        <p className={styles.desc}>{dataContacto[currentLanguage].desc}</p>

                        <div className={styles.itemsContainer}>
                            <div className={styles.itemsContainer__1}>
                                <LazyLoadImage src={contacto} alt="Contacto" effect="blur" />
                            </div>
                            <div className={styles.itemsContainer__2}>
                                <div className={styles.address}>
                                    <LazyLoadImage src={address} alt="Dirección" effect="blur" />
                                    {dataContacto[currentLanguage].address}
                                </div>
                                <div className={styles.phone}>
                                    <LazyLoadImage src={phone} alt="Teléfono" effect="blur" />
                                    <a href={`tel:${dataContacto[currentLanguage].phone.replace(/\D/g, '')}`} target="_blank">{dataContacto[currentLanguage].phone}</a>
                                </div>
                                <div className={styles.email}>
                                    <LazyLoadImage src={email} alt="Correo" effect="blur" />
                                    <a href={`mailto:${dataContacto[currentLanguage].email}`} target="_blank">{dataContacto[currentLanguage].email}</a>
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
