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
         <div className={style.cost}>$ {product.cost}</div>
      </div>


      ))}
      </div>
   )
}

export default Product;