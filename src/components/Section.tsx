import React from 'react'

/**
 * Props for the Section component.
 */
interface SectionProps {
  title: string
  image: string
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
    <section>
      <h2>{title}</h2>
      <img
        src={image}
        alt={title}
        style={{ width: '100%', maxHeight: '300px' }}
      />
      <p>{text}</p>
    </section>
  )
}

export default Section
