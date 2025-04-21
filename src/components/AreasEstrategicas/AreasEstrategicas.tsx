import styles from './AreasEstrategicas.module.scss'
import FacilitacionDelComercio from '../../assets/FacilitacionDelComercio.svg'
import OptimizacionLogistica from '../../assets/OptimizacionLogistica.svg'
import RegulacionYNormativas from '../../assets/RegulacionYNormativas.svg'
import InnovacionTecnologica from '../../assets/InnovacionTecnologica.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'


interface AreasEstrategicasProps {
    title: string
    titleTwo: string
    description: string
    items: any
}

const getImageSource = (item: any) => {
    switch (item.title) {
        case 'Facilitación del comercio':
            return FacilitacionDelComercio;
        case 'Optimización logística':
            return OptimizacionLogistica;
        case 'Regulación y normativas':
            return RegulacionYNormativas;
        case 'Innovación tecnológica':
            return InnovacionTecnologica;
        default:
            return item.image;
    }
};

export const AreasEstrategicas = ({
    title,
    titleTwo,
    description,
    items
}: AreasEstrategicasProps) => {
    return (
        <div className={styles.AreasEstrategicas}>
            <div className={styles.AreasEstrategicas__container}>
                <h2 className={styles.title}>
                    {title}
                    <span> {titleTwo}</span>
                </h2>
                <p className={styles.desc}>{description}</p>
                <div className={styles.items}>
                    {
                        items.map((item: any, index: number) => (
                            <div key={index} className={styles.item}>
                                <LazyLoadImage
                                    className={styles.itemImage}
                                    src={getImageSource(item)}
                                    alt={item.title}
                                    effect="blur"
                                />
                                <div className={styles.itemDescription}>{item.title}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
