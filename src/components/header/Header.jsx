import React from 'react';
import styles from './header.module.css';
import img from './../../imges/klipartz 5.png';
import leaves from './../../imges/leaves.png';
import NavHeader from '../navigate/NavHeader';
import Skils from '../skils/Skils';
import LinkGreen from '../linkgreen/LinkGreen';
import BtnGreen from '../btngreen/BtnGreen';
import Form from '../form/Form';
import Input from '../input/Input';

function Header(){
  
   const skils =[{title :' 2000 ', description : 'Delivery'},{title : '1200' , description : 'Customers'},{title : '1000', description : 'Product'} ]
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
     <LinkGreen text="Lern more..."/>
     <div className={styles.info}>
       <div className={styles.info_list}>

         {skils.map((skil)=>(
          <Skils title={skil.title} text={skil.description}/>
        
         ))}

     </div>
       
     </div>
   </div >
   <div className={styles.header_img}>
      <img className={styles.header_img__move} src={leaves} alt="leaves"/>
      <img src={img} alt="альтернативний текст"/>
   </div>
 </div>

 

</div>
   )
}

export default Header;