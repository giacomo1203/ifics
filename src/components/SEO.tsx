import React from 'react'
import { Helmet } from 'react-helmet-async'

/**
 * Props for the SEO component.
 */
interface SEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
}

/**
 * A component that manages the SEO metadata for a page.
 *
 * @param {SEOProps} props - The props for the SEO component.
 * @returns {JSX.Element} The SEO component.
 */
const SEO: React.FC<SEOProps> = ({ title, description, keywords, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  )
}

export default SEO
