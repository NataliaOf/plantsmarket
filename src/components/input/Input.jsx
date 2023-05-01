import React from 'react';
import styles from './input.module.css';


function Input ({type, name, placeholder,value,onChange, onBlur,  error}){
  return(
     <>
       {error&& <div style ={{color:'red'}}>{error}</div>}
     <input className={styles.input}
      type={type} name ={name} 
      placeholder={placeholder}
       value={value} onChange={onChange}
     onBlur={onBlur}/>
   
     </>
     
   )
};


export default Input;