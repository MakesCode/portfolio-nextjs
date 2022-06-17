import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <p>Front end</p>
        <p>Developer</p>
      </h1>
    </header>
  )
}