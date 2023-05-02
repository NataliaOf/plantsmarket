import BtnGreen from '../btngreen/BtnGreen';
import Product from './Product';
import style from './products.module.css';
import { useState } from 'react';
import { products } from '../../helper/products';

const Products = ()=> {

  
   const [collection, setCollection] = useState(products);
   const [activ,setActiv] = useState('')

   const getAll = ()=>{
      const newPlants = products;
      setCollection(newPlants);
      setActiv('')
    }
   const getNewPlants = ()=>{
     const newPlants = products.filter(elem=> elem.collection==='New Plants');
     setCollection(newPlants);
     setActiv('1')
   }

   const getNewArrivals = ()=>{
      const newArrivals = products.filter(elem=> elem.collection==='New Arrivals');
      setCollection(newArrivals);
      setActiv('2')
    }

    const getSale = ()=>{
      const sale = products.filter(elem=> elem.collection==='Sale');
      setCollection(sale);
      setActiv('3')
    }
   
    const classs = style.products_btn + ' ' + style.activ;

   return(
      <div className="wrapper">
         <div className={style.products}>
            <h2>Our Best Product</h2>
            <div className={style.products_btnBox}>
            <button className={(activ==='') ? classs : style.products_btn} onClick={getAll}>All</button>
               <button className={(activ==='1') ? classs : style.products_btn} onClick={getNewPlants}>New Plants</button>
               <button className={(activ==='2') ? classs : style.products_btn} onClick={getNewArrivals}>New Arrivals</button>
               <button className={(activ==='3') ? classs : style.products_btn} onClick={getSale}>Sale</button>
            </div>
            <Product collection={collection} />
            <BtnGreen text='View All'/>
         </div>
      </div>

   )
}

export default Products;