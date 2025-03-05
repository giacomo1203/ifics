import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const NotFound: React.FC = () => {
  return (
    <Layout
      title="404 - Página no encontrada"
      description="Página no encontrada"
    >
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/">Volver al Inicio</Link>
    </Layout>
  )
}

export default NotFound
