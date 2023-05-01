import SliderPlant from '../slider/Slider';
import NavHeader from './../navigate/NavHeader';
import style from './miniHeader.module.css'

const MiniHeader =()=>{
   return(
      <div className="wrapper">
         <NavHeader/>
         <div className={style.header}>
         <div className={style.header_info}>
            <div>
            <h2>Our contact</h2>
           <p>You can get a free consultation</p>
            </div>
           
           <p>Tel: <a href='tel:+380440000000'>  +38 (044) 000-00-00 </a> <br/>
            Email: <a href="mailto:mail@example.com">  mail@example.com</a></p>
         </div>
         <div className={style.header_slider}>
         <SliderPlant/>
         </div>

         </div>
      </div>

   )
}

export default  MiniHeader;