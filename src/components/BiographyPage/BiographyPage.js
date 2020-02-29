import React from 'react';
import './Biography.css';
import Title from '../Title';
import backPerson from '../../images/man.png';
import Bounce from 'react-reveal/Bounce';

export default function BiographyPage() {
    return (
       <section className="biography">
           <div className="inside-container">
               <h4>Home decorator </h4>
               <h1>John Doe</h1>
              <div className="biography-links">
                  <li>
                     <a href="#">
                         <p className="p1">HOMEPAGE</p>
                         <p>BIOGRAPHY</p>
                     </a>
                 </li>
                 <li>
                     <a href="#">
                         <p  className="p1">PORTFOLIO</p>
                         <p>MY ART WORDS</p>
                     </a>
                 </li>

                 <li>
                     <a href="#">
                         <p  className="p1">CONTACT</p>
                         <p>BE IN TOUCH</p>
                     </a>
                 </li>

                 
                 <li>
                     <a href="#">
                         <p><i class="fas fa-search"></i></p>
                        
                     </a>
                 </li>
              </div>

              <div className="person">
                <Bounce top duration={3000}>
                <div className="personImg">
                  <img src={backPerson} alt=""/>
                  </div>
                </Bounce>
                  <div className="person-texts">
                    <Title title="john doe" color="#fff" />
                    <Bounce  right duration={2000} cascade>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quaerat doloremque officia voluptatibus exercitationem officiis, ipsum vitae error excepturi laudantium culpa est. Dicta voluptate nobis aspernatur facilis impedit eveniet repudiandae.</p>
                    </Bounce>
                   
                  </div>
              </div>


           </div>
       </section>
    )
}
