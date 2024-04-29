import styles from "../styles/Description.module.css"

export default function Section({ title, description, resources }) {
  return (
    <div>
      <h1 className={styles.head1}>
        {title}
      </h1> 
      <p className={styles.para}>
        {description}
      </p>
      <ul>
        {resources}
      </ul>
    </div>
  )
}
