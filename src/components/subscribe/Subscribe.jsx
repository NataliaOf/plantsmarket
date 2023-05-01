import { useState } from 'react';
import img from './../../imges/plant8.png';
import style from './subscribe.module.css'
import {useToggle}from './../../hooks/useToggle';
import BtnGreen from '../btngreen/BtnGreen';



const Subscribe = ()=> {

   const[value, setValue] = useState('');
   const [error, setError] = useState(null);

   const emailValue = /^\w+@\w+\.\w{2,4}$/i;

  
  const getOnBlur=(e) =>{
      if(e.target.value==='') setError('Required field')
      if (! emailValue.test(e.target.value)) {
         setError('Invalid email')}
      else setError(null)
   }
  const[massage, setMassege] = useToggle(false);

  const sendForm = ()=>{
   if(error!==null) {
      setError('Invalid email')
   return
   }
   if(value==='') {
      setError('Required field')
   return
   }
   else{
      setMassege()
      setValue('')
   }
  
  }

 

   return(
      <div className="wrapper">
  <div className={style.subscribe}>
         <div className={style.subscribe_info}>
            <h2>Subscribe Our Newsletter</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. 
            </p>
            <form>
            <div>
              {error&& <div style ={{color:'red'}}>{error}</div>}
              <input className={style.input}
              type='email'
               value ={ value}
               onChange ={e => setValue(e.target.value)}
               onBlur={getOnBlur}
               error ={ error}
               placeholder="Enter mail..."/>
   
              </div>
             
               <BtnGreen type='button' text="Subscribe" onClick={ sendForm}/>
            
            </form>
            {massage && <span>You have subscribed to our news</span>}
         </div>
         <div className={style.subscribe_image}>
             <div className={style.image}>
             <img   src={img} alt='plant'/>
             </div>
           
         </div>

      </div>
      </div>
    
   )
}

export default Subscribe ;