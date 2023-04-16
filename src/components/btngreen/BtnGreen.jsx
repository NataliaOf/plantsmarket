import React from 'react';
import styles from './BtnGreen.module.css';

function BtnGreen({text, onClick, children}){
   return(
      <button className={styles.greenb_btn} onClick={onClick}>{text}{children} </button>

   )
}

export default BtnGreen;