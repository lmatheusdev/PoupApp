import { IconSearch } from "../Icons/Icones"
import styles from "./searchinput.module.css"

export default function SearchInput(props) {
  return(
    <div className={styles.container}> 
      <IconSearch/>
      <input className={styles.input} {...props}></input>
    </div>
  )
}