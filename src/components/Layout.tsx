import React from 'react'
import SEO from './SEO'

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
      <main>{children}</main>
    </>
  )
}

export default Layout
