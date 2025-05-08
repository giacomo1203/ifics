import React from 'react'
import SEO from './SEO'
import Header from './Header/index'
import Footer from './Footer/index'
import { Quote } from './Quote/Quote'
import { dataHome } from '../pages/home/data'
import { useLanguage } from '../context/LanguageContext'

/**
 * Props for the Layout component.
 */
interface LayoutProps {
  title: string
  description: string
  keywords?: string
  image?: string
  children: React.ReactNode
  quote?: boolean
}

/**
 * A layout component that wraps the content of each page and includes the SEO component.
 *
 * @param {LayoutProps} props - The props for the Layout component.
 * @returns {JSX.Element} The Layout component.
 */
const Layout: React.FC<LayoutProps> = ({
  title,
  description,
  keywords,
  image,
  quote,
  children,
}) => {
  const { currentLanguage } = useLanguage()

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        image={image}
      />
      <Header />
      <main>{children}</main>
      {
        quote === undefined || quote === true ?
          <Quote
            text={dataHome[currentLanguage].quote.text}
            sub={dataHome[currentLanguage].quote.sub}
          /> :
          null
      }
      <Footer />
    </>
  )
}

export default Layout
