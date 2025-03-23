import React from 'react'
import { content } from '../config/content'
import Section from '../components/Section/index'
import Layout from '../components/Layout'

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
      {content.sections.map((section) => (
        <>
          <Section key={section.id} {...section} />
          <span>IDIOMA: {__APP_ENV__}</span>
        </>
      ))}
    </Layout>
  )
}

export default Home
