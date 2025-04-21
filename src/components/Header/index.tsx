import { useState } from 'react'
import styles from './Header.module.scss'
import logo from '@/assets/Global/logo.svg'

import { useLanguage } from '../../context/LanguageContext'
import { dataNav } from './data'

const basename = import.meta.env.MODE === 'production' ? '/ifics' : ''

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { currentLanguage, setLanguage } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.logo}>
          <a href="/#/">
            <img src={logo} alt="IFICS Logo" />
          </a>
          <div className={styles.divider} />
          <span className={styles.span}>
            Instituto de Facilitación del Comercio Sostenible
          </span>
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

          <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
            {dataNav[currentLanguage].nav.map((item, index) => (
              <a
                key={index}
                href={basename + item.url}
                className={
                  window.location.pathname === item.url ? styles.active : ''
                }
              >
                {item.name}
              </a>
            ))}
          </nav>

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
      </div>
    </header>
  )
}

export default Header
