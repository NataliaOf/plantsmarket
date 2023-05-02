import React, {useState} from 'react';
import './App.css';

import Modal from '../modal/Modal';
import Form from '../form/Form';

import Context from '../../helper/context';
import Home from '../../pages/Home';
import About from '../../pages/About';




function App() {

 const [username, setUsername] = useState('');
 const chengeUsername = (e) => {
   setUsername(e.target.value)
 }

 const [password, setPassword] =useState('');
 const chengePasword =(e)=>{
   setPassword(e.target.value)
 }

 const [modal, setModal] = useState(false);
const openModal = ()=>{
   setModal(!modal)
}
 

 const value = {
   username,
   chengeUsername,
   password,
   chengePasword,
   modal,
   openModal

}




  return (
   <Context.Provider value={value}>
   <div className="box">
       <Modal title='To come in' text='Enter your username and password'  >
         <Form></Form>
      </Modal>
      <Home/>
      {/* <About/> */}
    </div>
    </Context.Provider>
  );
}

export default App;
