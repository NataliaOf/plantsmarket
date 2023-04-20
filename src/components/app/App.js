import React, {useState} from 'react';
import './App.css';
import Header from '../header/Header';
import Modal from '../modal/Modal';
import Form from '../form/Form';
import Footer from '../footer/Footer';
import Context from '../../helper/context';


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


const clouseModal = (modal) => {
   console.log(modal)
}

  return (
   <Context.Provider value={value}>
   <div className="box">
       <Modal title='To come in' text='Enter your username and password' clouseModal={clouseModal} >
         <Form></Form>
      </Modal>
      
   <Header/>

   <Footer/>
    </div>
    </Context.Provider>
  );
}

export default App;
