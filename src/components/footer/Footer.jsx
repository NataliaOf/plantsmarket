import React, { useState } from 'react';

import style from './footer.module.css';
import facebook from './../../imges/Facebook.svg';
import twiter from './../../imges/Twitter.svg';
import instagram from './../../imges/instagram.svg';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Footer(){
  const [hiddenNav, setHiddenNav] = useState(true);
  const openNavigation = ()=>{
   setHiddenNav(!hiddenNav)
  }

  const [hiddenAbout, setHiddenAbout] = useState(true);
  const openAbout = ()=>{
   setHiddenAbout(!hiddenAbout)
  }

  const [hiddenHelp, setHiddenHelp] = useState(true);
  const openHelp = ()=> {
   setHiddenHelp(!hiddenHelp)
  }

   const navigation= [{url:"#", title:"Home"},
                      {url:"#", title:"About"},
                     {url:"#", title:"Help & Support"},
                    {url:"#", title:"Product"}];

const contacts= [{url:"#", title:"Contact"},
                      {url:"#", title:"Address"},
                     {url:"#", title:"Blog"},
                    {url:"#", title:"About Us"}];

const helps= [{url:"#", title:"Coustomers Services"},
                      {url:"#", title:"FAQs"},
                     {url:"#", title:"We Are Hiring"},
                    {url:"#", title:"Returns"}];

 
                   

   return(
      <div className="wrapper">
      <footer className={style.footer}>
       
       <div className={style.footer_info}>
         <h3 className={style.footer_logo}><a  href="/">Plant</a></h3>
         <p className={style.footer_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing
             elit. Quia aut quisquam ex cum veritatis ut ducimus delectus.
              Voluptatibus quisquam aspernatur accusamus commodi eum quia officia! Ipsa iusto iste illum ut.
         </p>
         <div className={style.footer_social}>
         <a href="/"><img src={facebook} alt="facebook" /></a>
         <a href="/"> <img src={twiter} alt="twiter" /></a>
         <a href="/"> <img src={instagram} alt="instagram" /></a>
         </div>
       </div>
       <div className={style.footer_navigation}>
      
         <div className={style.navigation}>
            <h3 className={style.navigation_title}>Navigation<span onClick={openNavigation}> {hiddenNav?  <FiChevronDown stroke='#066F14'/> :<FiChevronUp stroke='#066F14'/>  }  </span></h3>
            <ul className={hiddenNav? style.hidden : ''}>
               { navigation.map((nav)=>(
                  <li key={nav.title}>
                     <a href={nav.url}>{nav.title}</a>
                  </li>
               ))}
              
            </ul>
         </div>
         <div className={style.navigation}>
            <h3 className={style.navigation_title}>About Us <span onClick={openAbout}> {hiddenAbout?  <FiChevronDown stroke='#066F14'/> :<FiChevronUp stroke='#066F14'/>  }  </span></h3>
            <ul className={hiddenAbout? style.hidden : ''}>

               {contacts.map((contact)=>(
                  <li key={contact.title}>
                     <a href={contact.url}>{contact.title}</a>
                  </li>
               ))}
              
            </ul>
         </div>
         <div className={style.navigation}>
            <h3 className={style.navigation_title}>Help <span onClick={openHelp}> {hiddenHelp?  <FiChevronDown stroke='#066F14'/> :<FiChevronUp stroke='#066F14'/>  } </span></h3>
            <ul className={hiddenHelp? style.hidden : ''}>
               {helps.map((help)=>(
                   <li key={help.title}>
                   <a href={help.url}>{help.title}</a>
                </li>
               ))}
             
            </ul>
         </div>
       </div>
      
      </footer>
      </div>
   )
}

export default Footer;