
import './App.css';
import Header from '../header/Header';
import Modal from '../modal/Modal';
import Form from '../form/Form';
import Input from '../input/Input';
import BtnGreen from '../btngreen/BtnGreen';
import Footer from '../footer/Footer';

function App() {
  return (
   <div className="box">
      <Modal title='TITLE' text='Some text'>
         <Form>
            <Input placeholder='some text'/>
            <BtnGreen text='send'/>
         </Form>
      </Modal>
   <Header/>

   <Footer/>
    </div>
  );
}

export default App;
