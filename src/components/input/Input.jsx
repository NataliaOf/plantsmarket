import React from 'react';
import styles from './input.module.css';


function Input ({type, name, placeholder,value,onChange, onBlur}){
  return(
     <>
     <input className={styles.input} type={type} name ={name} placeholder={placeholder} value={value} onChange={onChange}
     onBlur={e=>onBlur(e)}/>
     </>
     
   )
};


export default Input;