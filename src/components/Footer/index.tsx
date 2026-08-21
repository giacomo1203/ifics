import React from 'react'
// import styles from './Footer.module.scss'
// import logo from '@/assets/Global/logo.svg'
// import { RiMailLine, RiMapPin2Line } from 'react-icons/ri'
// import { MdOutlineLocalPhone } from 'react-icons/md'
// import { dataFooter } from './data'
// import { useLanguage } from '../../context/LanguageContext'
// import { LazyLoadImage } from 'react-lazy-load-image-component'

const Footer: React.FC = () => {
  // const { currentLanguage } = useLanguage()
  // const { contact, sitemap, copyright } = dataFooter[currentLanguage]

  return (
    <footer>
      <div className="wrap footer-row">
        <div>© 2026 IFCOM — Instituto de Facilitación del Comercio Sostenible.</div>
        <div>Lima, Perú</div>
      </div>
    </footer>
  )
}

export default Footer
