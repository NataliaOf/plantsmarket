import React from 'react';
import styles from './BtnGreen.module.css';

function BtnGreen({text, onClick, children, disabled, type}){
   // console.log( disabled)
   return(
      <button className={styles.greenb_btn} disabled={ disabled} type={type} onClick={onClick}>{text}{children} </button>

   )
}

export default BtnGreen;