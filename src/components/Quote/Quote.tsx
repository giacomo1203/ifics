import styles from './Quote.module.scss'

interface QuoteProps {
  text: string
  sub: string
}

export const Quote = ({ text, sub }: QuoteProps) => {
  return (
    <div className={styles.quote}>
      {/* <div className="absolute inset-0 bg-[#000639]/30"></div> */}

      {
        text &&
        <div className={styles.quote__text}>{text}</div>
      }
      {
        sub &&
        <div className={styles.quote__sub}>{sub}</div>
      }
    </div>
  )
}
