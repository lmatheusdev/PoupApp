import styles from "./aside.module.css"
import logo from "/logo.svg"

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <img src={logo} />
      <footer className={styles.footer}>Desenvolvido por Alura. Projeto fictício sem fins comerciais.</footer>
    </aside>
  )
}