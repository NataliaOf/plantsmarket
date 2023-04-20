import {useContext, useEffect, useState} from 'react';
import styles from './form.module.css';

import Input from "../input/Input";
import BtnGreen from '../btngreen/BtnGreen';
import Context  from '../../helper/context';


const Form = ({children})=>{
   const {username, chengeUsername,  password , chengePasword} = useContext(Context);

   const [usernameDirty, setUsernameDirty] = useState(false);
   const [passwordDirty, setPasswordDirty] = useState(false);
   const [usererror , setUsererror] = useState('Поле должно быть заполнкнно');
   const[passworderror , setPassworderror] = useState('Поле должно быть заполнкнно');
   const[validForm, setValidForm] = useState(false);

   const blureHendler =(e)=>{
      // console.log(e.target.name)
      switch (e.target.name){
       case 'username':
         setUsernameDirty(true)
       
         break;
       case 'password'  :
         setPasswordDirty(true)
         break
      }
   };

//    useEffect(()=>{
//       if(usernameDirty || passwordDirty ){
//          setValidForm(false)
//       }
//       else{  setValidForm(true)}
// console.log(validForm)
   // }, [usernameDirty,passwordDirty])


   return(
      
      <form className={styles.form} action="#">
         <div className={styles.input_container}>
        </div>
        {(usernameDirty && usererror && username==='') && <div style={{color:'red'}}>{usererror}</div>}
         <Input onBlur={blureHendler} name='username' placeholder='Username' value={username} onChange={chengeUsername}/>
         {(passwordDirty && passworderror && password ==='') && <div style={{color:'red'}}>{passworderror}</div>}
         <Input onBlur={blureHendler}  type='password'name ='password' placeholder='Password' value ={password} onChange={chengePasword}/>
         <BtnGreen  type=" submit"text='Send'/>
      </form>
   )
};

export default Form;