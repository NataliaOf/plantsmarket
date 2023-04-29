import LinkGreen from "../linkgreen/LinkGreen";
import styles from './aboutSection.module.css';
import img from './../../imges/trapani.jpg'
const AboutSection = ()=> {

   return(
      <section>
      <div className="wrapper">
         <div className={styles.about}>
            <div className={styles.about__img}>
               <img src={img} alt="img"/>

            </div>
            <div className={styles.about__info}>
               <h3>About Us</h3>
               <h2>Continue to Develop to Became Global Company</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at
                    in erat lectus mas sa diam. Lectus elit, nulla elementum
                     fringilla at. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. 
                      Nec tristique at in erat lectus mas sa diam. Lectus elit,
                       nulla elementum fringilla at.</p>
                       <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                       Eu, tempor, accumsan sit amet nunc cursus. 
                       </p>
                       <LinkGreen text="Read More"/>
            </div>

         </div>
      </div>
      </section>
   )
}

export default AboutSection;