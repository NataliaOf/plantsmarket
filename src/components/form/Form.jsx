import styles from './form.module.css';

import Input from "../input/Input";
import BtnGreen from '../btngreen/BtnGreen';


const Form = ()=>{
   return(
      
      <form className={styles.form} action="#">
         <div className={styles.input_container}>
         <Input type='text' placeholder ='placeholder'/>
         <BtnGreen text="send"/>
         </div>
         <div className={styles.input_container}>
         <Input type='number' placeholder ='7'/>
         <BtnGreen text="send"/>
         </div>
         <div className={styles.input_container}>
          <Input type='checkbox' placeholder ='placeholder'/>
          <BtnGreen text="send"/>
          </div>
        
      </form>
   )
};

export default Form;