import { useContext} from "react";

import { FiX } from "react-icons/fi";
import style from './modal.module.css';
import Context  from '../../helper/context';

function Modal( {title, text,children, clouseModal}){
   const {modal, openModal} = useContext(Context);
   const classs = style.modal_box + ' ' + style.active;

   return(
      <div className={modal ? classs : style.modal_box} onClick={openModal}>
         <div className={style.modal} onClick={(e)=>e.stopPropagation()}>
            <div className={style.modal_close}>
            < FiX  onClick={openModal}/>
            </div>
         
         <h3>{title} </h3>
         <p>{text}</p>
           {children}
         </div>
        

      
      </div>
   )
}

export default Modal;