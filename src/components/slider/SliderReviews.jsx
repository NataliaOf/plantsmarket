import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css";

import style from './slider.module.css';
import { FaQuoteLeft } from 'react-icons/fa';

import { reviews } from "../../helper/reviews";



const SliderReviws =()=> {
  

   
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      
    }
    return (
      <div className={style.conteiner}>
       
        <Slider {...settings}>

         {reviews.map(slid=>(

<div className={style.reviews_slid}>
<div className={style.reviews_flex}>
   <div className={style.avatar_box}>
   <div className={style.avatar}>
      <img className={style.avatar_img} src={slid.avatar} alt='avatar'/>
   </div>
   <div className={style.avatar_info}>
      <h3>{slid.name}</h3>
      <h4>{slid.jobTitle}</h4>
   </div>

   </div>
   <div><FaQuoteLeft style={{fontSize:'30px'}} /></div>
   

</div>
<p className={style.reviews_text}>
{slid.text}
</p>
</div>

         ))}
        
         

            
         
         
        </Slider>
      </div>
    );
  }


  export default SliderReviws;