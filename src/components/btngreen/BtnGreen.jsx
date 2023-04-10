import React from 'react';
import styles from './BtnGreen.module.css';

function BtnGreen({text}){
   return(
      <button className={styles.greenb_btn}>{text}</button>

   )
}

export default BtnGreen;