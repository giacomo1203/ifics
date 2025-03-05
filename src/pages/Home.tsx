import React from "react";
import { content } from "../config/content";
import Section from "../components/Section";
import SEO from "../components/SEO";

const Home: React.FC = () => {
  return (
    <div>
      <SEO 
        title={content.meta.title} 
        description={content.meta.description} 
        keywords={content.meta.keywords} 
        image={content.meta.image} 
      />
      
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      {content.sections.map((section) => (
        <Section key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Home;
