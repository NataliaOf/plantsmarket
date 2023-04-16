import React from 'react';
import { useState } from 'react';
import {FiAlignJustify, FiAlignCenter } from 'react-icons/fi';
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
             <div  className={styles.openMenu} onClick ={ openBurgerMenu} >
               <FiAlignCenter style={{ margin:'1px auto'}}/>
             </div>
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
            <li className={styles.active}>
               <a href='#'>Contact</a>
            </li>
         </ul> 

        
        
        
      </div>
     
      
      <div className={styles.navigate__login}>
         <p className={styles.navigate__btn}>Loging</p>
        <BtnGreen  text="Sing up"/>
        <div className={styles.hedden} onClick ={ openBurgerMenu}>
        
         <FiAlignJustify style={{ margin:'1px auto'}}/>
        
      </div>
      </div>
     
      
     
    </div>
   );
};



export default NavHeader;