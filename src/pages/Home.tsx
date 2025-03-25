import React from 'react';
import { content } from '../config/content';
import Section, { SectionProps } from '../components/Section/index';
import Layout from '../components/Layout';

interface HomeSectionProps extends Omit<SectionProps, 'image'> {
  id: string;
  image?: string;
}

const Home: React.FC = () => {
  return (
    <Layout
      title={content.meta.title}
      description={content.meta.description}
      keywords={content.meta.keywords}
      image={content.meta.image}
    >
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      {content.sections.map((section: HomeSectionProps) => (
        <Section key={section.id} {...section} />
      ))}
    </Layout>
  );
};

export default Home;
