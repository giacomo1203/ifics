import { useState } from 'react'
import styles from './Header.module.scss'
import logoMobile from '../../assets/Header/LogoMobile.svg'
import logoDesktop from '../../assets/Header/LogoDesktop.svg'
import { useLanguage } from '../../context/LanguageContext'
import { dataNav } from './data'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { currentLanguage, setLanguage } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.mobileHeader}>
        <img src={logoMobile} alt="IFICS Logo" className={styles.mobileLogo} />
        <img
          src={logoDesktop}
          alt="IFICS Logo"
          className={styles.desktopLogo}
        />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.languageButtonContainer}>
          <button
            className={currentLanguage === 'ES' ? styles.activeLanguage : ''}
            onClick={() => setLanguage('ES')}
          >
            ESP
          </button>
          <span className={styles.separator}>|</span>
          <button
            className={currentLanguage === 'EN' ? styles.activeLanguage : ''}
            onClick={() => setLanguage('EN')}
          >
            ENG
          </button>
        </div>
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
        {
          dataNav[currentLanguage].nav.map((item, index) => (
            <a key={index} href={item.url}>{item.name}</a>
          ))
        }
      </nav>
    </header>
  )
}

export default Header
