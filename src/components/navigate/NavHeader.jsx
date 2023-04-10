import React from 'react';
import styles from './NavHeader.module.css';
import BtnGreen from '../btngreen/BtnGreen';

function NavHeader(){
   return(
      <div className={styles.navigate}>
      <div className={styles.navigane__logo}>
        Plant
      </div>
      <div className={styles.navigate__nav}>
         <ul className={styles.navigate__menu}>
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
         <div className={styles.navigate__btn}>Login</div>
        <BtnGreen text="Sing up"/>
      </div>
    </div>
   );
};


export default NavHeader;