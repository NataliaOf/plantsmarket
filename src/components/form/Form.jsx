
import { useForm } from "react-hook-form";
import styles from './form.module.css';



const Form = ({children})=>{
  
 const { 
     register,
     handleSubmit, 
     reset,
     formState: { errors } 
   
   } = useForm({
      mode:'onBlur'
   });

   const onSubmit=(data)=>{
      localStorage.setItem('user', JSON.stringify(data));
      reset();
   }

   return(
      
      <form className={styles.form}  onSubmit={handleSubmit(onSubmit)}>
         <label> Username
        <input className={styles.input}
        {...register('username',{
         required: 'The field is required',
         minLength:{
            value:5,
            message:'Please enter more than 5 characters'
         },
         maxLength:{
            value:15,
            message:'Please enter less than 15 characters'
         },
        })}/>
        </label>
        <div className={styles.error}>{errors?.username && <p>{errors?.username?.message || 'Error!'}</p>}</div>

        <label>Password
        <input className={styles.input} type='password'
        {...register('password',{
         required: 'The field is required',
         pattern:{
           value : /[A-Za-z]{8}/,
            message:'Please enter more than 8 characters "A-Za-z"'
         },
        })}/>
        </label> 
        <div className={styles.error}>{errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}</div>
       
       <button className={styles.greenb_btn}>Send </button>
         
      </form>
   )
};

export default Form;