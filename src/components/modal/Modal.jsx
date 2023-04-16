import { FiX } from "react-icons/fi";
import style from './modal.module.css'

function Modal( {title, text,children}){

   return(
      <div className={style.modal_box}>
         <div className={style.modal}>
         < FiX  style={{cursor:"pointer", fontSize:'40px',position:'relative', top:'10px', marginLeft:'90%'}}/>
         <h3>{title} </h3>
         <p>{text}</p>
         FiAlertTriangle
           {children}
         </div>
        

      
      </div>
   )
}

export default Modal;