import React from 'react'
import SEO from './SEO'
import Header from './Header/index'
import Footer from './Footer/index'

/**
 * Props for the Layout component.
 */
interface LayoutProps {
  title: string
  description: string
  keywords?: string
  image?: string
  children: React.ReactNode
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
  children,
}) => {
  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        image={image}
      />
      <Header />
      <main style={{ paddingTop: '64px' }}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
