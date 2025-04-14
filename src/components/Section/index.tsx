import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './Section.module.scss'

/**
 * Props for the Section component.
 */
export interface SectionProps {
  title: string
  image?: string
  text: string
}

/**
 * A section component that displays a title, image, and text.
 *
 * @param {SectionProps} props - The props for the Section component.
 * @returns {JSX.Element} The Section component.
 */
const Section: React.FC<SectionProps> = ({ title, image, text }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {image && (
        <LazyLoadImage
          src={image}
          alt={title}
          className={styles.image}
          effect="blur"
        />
      )}
      <p className={styles.text}>{text}</p>
    </section>
  )
}

export default Section
