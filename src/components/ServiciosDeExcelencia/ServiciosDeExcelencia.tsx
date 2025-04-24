import styles from './ServiciosDeExcelencia.module.scss'

interface ServiciosDeExcelenciaProps {
    title: string
    titleTwo: string
    description: string
}

export const ServiciosDeExcelencia = ({
    title,
    titleTwo,
    description,
}: ServiciosDeExcelenciaProps) => {
    return (
        <section className={styles.serviciosDeExcelencia}>
            <div className={styles.serviciosDeExcelencia__container}>
                <h2 className={styles.title}>
                    {title}
                    <span> {titleTwo}</span>
                </h2>
                <p className={styles.desc}>{description}</p>
            </div>
        </section>
    )
}
