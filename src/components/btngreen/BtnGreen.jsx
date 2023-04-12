import React from 'react';
import styles from './BtnGreen.module.css';

function BtnGreen({text, onClick}){
   return(
      <button className={styles.greenb_btn} onClick={onClick}>{text}</button>

   )
}

export default BtnGreen;