import style from './newCollection.module.css';

import LinkGreen from '../linkgreen/LinkGreen';
import SliderPlant from '../slider/Slider';


const NewCollection = () => {

   return(
     <div className="wrapper">
      <div className={style.newColl}>
         <div className={style.newColl__info}>
         <h2>We have lots of plants collection for you and your family</h2>
         <LinkGreen text='See all collection'/>
         </div>
         <div className={style.slider}>
            <SliderPlant/>
            

         </div>
        
        

      </div>

     </div>

   )
}
export default NewCollection;