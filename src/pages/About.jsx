import Footer from '../components/footer/Footer';
import MiniHeader from '../components/miniHeader/MiniHeader';
import './pages.css'

const About = ()=> {

   return(
      <div className="page">
         <MiniHeader/>
          <main className="main">
           <h2>About us</h2>
          </main>
          <Footer/>

      </div>
   )
}

export default About;