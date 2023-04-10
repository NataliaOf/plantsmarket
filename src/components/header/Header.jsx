import React from 'react';
import styles from './header.module.css';
import img from './../../imges/klipartz 5.png';
import BtnGreen from '../btngreen/BtnGreen';
import NavHeader from '../navigate/NavHeader';

// className={styles.makeItGreen}
function Header(){
   return(
<div className="wrapper">
<NavHeader/>
 <div className={styles.header}>
   <div className={styles.header_info}>
     <h1>Growing Beautiful Plants at Home</h1>
     <p className={styles.header_text}>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
     Eu, tempor, accumsan sit amet nunc cursus. Nec tristique 
     at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
     </p>
     <BtnGreen text="Lern more"/>
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