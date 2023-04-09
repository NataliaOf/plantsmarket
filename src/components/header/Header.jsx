import React from 'react';
import '../../App.css';
import styles from './header.module.css';
import img from './../../imges/klipartz 5.png';

// className={styles.makeItGreen}
function Header(){
   return(
<div className="wrapper">
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
      <button className={styles.navigate__btn}>Login</button>
      <button className={ styles.greenb_btn}>Sing Up</button>
   </div>
 </div>
 <div className={styles.header}>
   <div className={styles.header_info}>
     <h1>Growing Beautiful Plants at Home</h1>
     <p className={styles.header_text}>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
     Eu, tempor, accumsan sit amet nunc cursus. Nec tristique 
     at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
     </p>
     <button className={ styles.greenb_btn}>Learn More</button>
     <div className={styles.info}>
       <div className={styles.info_list}>
       <div className={styles.info_item}>
            <h3 className={styles.info_title}>2000+</h3>
            <p className={styles.info_description}>Delivery</p>
          </div>
          <div className={styles.info_item}>
            <h3 className={styles.info_title}>1200+</h3>
            <p  className={styles.info_description}>Customers</p>
          </div>
          <div className={styles.info_item}>
            <h3 className={styles.info_title}>1000+</h3>
            <p  className={styles.info_description}>Product</p>
          </div>
       </div>
       
     </div>
   </div>
   <div className={styles.header_img}>
      <img src={img} alt="альтернативний текст"/>
   </div>
 </div>
</div>
   )
}

export default Header;