import styles from './form.module.css';

import Input from "../input/Input";
import BtnGreen from '../btngreen/BtnGreen';


const Form = ({children})=>{
   return(
      
      <form className={styles.form} action="#">
         <div className={styles.input_container}>
        
      
         </div>
         {children}  
        
      </form>
   )
};

export default Form;