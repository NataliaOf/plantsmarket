import style from './newCollection.module.css';

// import Slider from 'react-slick';
import SliderPlant from '../slider/Slider';


const NewCollection = () => {

   return(
     <div className="wrapper">
      <div className={style.newColl}>
         <div className={style.newColl__info}>
         <h2>We have lots of plants collection for you and your family</h2>
         <a className={style.newColl__link} href='#'>See all collection</a>
         </div>
         <div className={style.slider}>
            <SliderPlant/>
            

         </div>
        
        

      </div>

     </div>

   )
}
export default NewCollection;