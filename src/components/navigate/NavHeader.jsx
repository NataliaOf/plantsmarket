import React from 'react';
import { useState, useContext, useEffect } from 'react';
import {FiAlignJustify, FiAlignCenter } from 'react-icons/fi';
import styles from './NavHeader.module.css';
import BtnGreen from '../btngreen/BtnGreen';
import Context from '../../helper/context';

function NavHeader(){
 const [username, setUsername] = useState('log in')
const getUsername = ()=>{

   let user = localStorage.getItem('user');

 if(user === null) {
   return 
 }else{
   setUsername(JSON.parse(user).username)
     
   
 }
 console.log("getUsername")
 return username
}
const outSide =()=>{
   localStorage.removeItem('user');
   setUsername('log in')
  
   return 
}
useEffect(()=>{
   getUsername()
})

   const {  openModal }= useContext(Context);
    const [burger , setBurger] = useState(false);
    const classs = styles.navigate__menu + ' ' + styles.activ;
    const openBurgerMenu = () => {
      setBurger( burger ? false : true);
     
    }

console.log(username)

   return(
      <div className={styles.navigate}>
      <div className={styles.navigane__logo}>
        Plant
      </div>
       <nav className={ styles.navigate__nav}>

       <ul className={burger ? classs : styles.navigate__menu} >
           <li className={burger? '': styles.clousr_burger }>
             <div  className={styles.openMenu} onClick={openBurgerMenu} >
               <FiAlignCenter stroke='#ECECEC'/>
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

        
        
        
      </nav>
     
      
      <div className={styles.navigate__login}>
         <p className={styles.navigate__btn}>{username}</p>
         {username ==='log in'? <BtnGreen  text="Sing up"  onClick={openModal}/>: <BtnGreen  text="go out"  onClick={outSide}/> }
        {/* <BtnGreen  text="Sing up"  onClick={openModal}/> */}
        {/* <BtnGreen  text="go out"  onClick={outSide}/> */}
        <div className={styles.hedden} onClick ={ openBurgerMenu}>
         <FiAlignJustify  stroke='#ECECEC'/> 
        </div>
      </div>
   
      
     
    </div>
   );
};



export default NavHeader;