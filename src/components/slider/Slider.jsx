import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
// import "~slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './slider.module.css';

import React, { Component } from "react";
import plant1 from './../../imges/plant1.png'
import plant2 from './../../imges/plant2.png'
import plant3 from './../../imges/plant3.png'


export default class SliderPlant extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      
      responsive: [
        
      
         {
           breakpoint: 980,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             initialSlide: 2
           }
         },
         {
           breakpoint: 400,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
      ]
    };
    return (
      <div className={styles.conteiner}>
       
        <Slider {...settings}>
          <div className={styles.slid1}>
          <img src={plant1} alt="slid"/>
          </div>

          <div className={styles.slid2}>
          <img src={plant2} alt="slid"/>
          </div>

          <div className={styles.slid1}>
          <img src={plant3} alt="slid"/>
          </div>
          <div className={styles.slid2}>
          <img src={plant1} alt="slid"/>
          </div>
          <div className={styles.slid1}>
          <img src={plant2} alt="slid"/>
          </div>
          <div className={styles.slid2}>
          <img src={plant3} alt="slid"/>
          </div>
          <div className={styles.slid1}>
          <img src={plant1} alt="slid"/>
          </div>
          <div className={styles.slid2}>
          <img src={plant2} alt="slid"/>
          </div>
          <div className={styles.slid1}>
          <img src={plant3} alt="slid"/>
          </div>
         
        </Slider>
      </div>
    );
  }
}