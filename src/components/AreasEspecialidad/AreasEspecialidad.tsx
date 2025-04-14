import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from './AreasEspecialidad.module.scss'

interface AreasEspecialidadProps {
  title: string
  titleTwo: string
  description?: string
  items: {
    description: string
    image: string
  }[]
}

export const AreasEspecialidad = ({
  title,
  titleTwo,
  description,
  items,
}: AreasEspecialidadProps) => {
  return (
    <div className={styles.areasEspecialidad}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {title} <span className={styles['title--accent']}>{titleTwo}</span>
        </h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.items}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <LazyLoadImage className={styles.itemImage} src={item.image} alt={item.description} effect="blur" />
            <div className={styles.itemDescription}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
