import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
};

export default SEO;
