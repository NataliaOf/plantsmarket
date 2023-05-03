// import { useState } from 'react';
import style from './products.module.css';

const Product = ({collection})=>{

   return(
      <div className={style.products_box}>
      {collection.map(product=>(
         <div className={style.product} key={product.id}>
         <img src={product.img} alt={product.title}/>
         <h3 className={style.product_title}>{product.title}</h3>
         <div className={style.stars}>
         rating: {product.rating}
         </div>
         {product.sale !== 0 && <div  className={style.sale}>Sale: {product.sale}%</div> }
         
         <div className={style.cost}>$ {product.cost -(product.cost * (product.sale/100))}</div>
      </div>


      ))}
      </div>
   )
}

export default Product;