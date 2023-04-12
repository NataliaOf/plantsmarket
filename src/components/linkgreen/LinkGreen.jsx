import React from 'react';
import styles from './linkGreen.module.css';

function LinkGreen({text, onClick}){
   return(
   
      <a className={styles.greenb_link} href='#'  alt={text}>{text}</a>
      // <button className={styles.greenb_btn} onClick={onClick}>{text}</button>

   )
}

export default LinkGreen;