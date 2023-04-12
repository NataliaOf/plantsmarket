import React from "react"
import styles from "./skils.module.css"

const Skils = ({title, text})=>{

   return(
      <div className={styles.info_item}>
      <h3 className={styles.info_title}>{title}</h3>
      <p className={styles.info_description}>{text}</p>
    </div>
   )
}

export default Skils;