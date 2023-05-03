
import style from'./reviews.module.css';
import img from './../../imges/women.jpg';
// import avatar from './../../imges/avatar.jpg';


import SliderReviws from '../slider/SliderReviews';
import LinkGreen from '../linkgreen/LinkGreen';

const Reviews =()=>{
   return(
      <div className="wrapper">
       <section className={style.reviews}>
         <div className={style.reviews_info}>
            <h3>What Our Customers Says</h3>
            <LinkGreen text ='Add Comment'/>
            
            <div className={style.reviews_slider}>
               <SliderReviws/>
              
            </div>
         </div>
         <div className={style.reviews_image}>
            <img src={img} alt='reviews'/>
         </div>

        
       </section>
      </div>
   )
}

export default Reviews;