import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import notFoundImage from '../assets/404.svg';
import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <Layout
      title="404 - Página no encontrada"
      description="Página no encontrada"
      quote={false}
    >
      <div className={styles.notFound}>
        <img src={notFoundImage} alt="404" />
        <h1>No pudimos encontrar esta página</h1>
        <Link className={styles.button} to="/">Volver al Inicio</Link>
      </div>

    </Layout>
  )
}

export default NotFound
