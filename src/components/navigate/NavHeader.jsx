import React from 'react';
import { useState } from 'react';
import styles from './NavHeader.module.css';
import BtnGreen from '../btngreen/BtnGreen';

function NavHeader(){
    const [burger , setBurger] = useState(false);
    const classs = styles.navigate__menu + ' ' + styles.activ;
    const openBurgerMenu = () => {
      setBurger( burger ? false : true);
     
    }

   

   return(
      <div className={styles.navigate}>
      <div className={styles.navigane__logo}>
        Plant
      </div>
       <div className={ styles.navigate__nav}>

       <ul className={burger ? classs : styles.navigate__menu} >
           <li className={burger? '': styles.clousr_burger }>
             <BtnGreen  onClick ={ openBurgerMenu}  text="Clouse"/>
           </li>
            
            <li>
               <a href='#'>Home</a>
            </li>
            <li>
               <a href='#'>Services</a>
            </li>
            <li>
               <a href='#'>About Us</a>
            </li>
            <li>
               <a href='#'>Blog</a>
            </li>
            <li>
               <a href='#'>Contact</a>
            </li>
         </ul> 

        
        
        
      </div>
     
      
      <div className={styles.navigate__login}>
         <p className={styles.navigate__btn}>Loging</p>
        <BtnGreen onClick ={ openBurgerMenu} text="Sing up"/>
      </div>
    </div>
   );
};


export default NavHeader;