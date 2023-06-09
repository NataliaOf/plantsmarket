import './pages.css'
import AboutSection from "../components/aboutsection/AboutSection"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import NewCollection from "../components/newColection/NewCollection"
import Products from "../components/products/Products"
import Subscribe from "../components/subscribe/Subscribe"
import Reviews from '../components/reviews/Reviews'

const Home = ()=>{

   return(
      <div className="page">
         <Header/>
         <main className="main">
            <NewCollection/>
            <AboutSection/>
            <Products/>
            <Subscribe/>
            <Reviews/>
        </main>
        <Footer/>
      </div>
   )
} 

export default Home;