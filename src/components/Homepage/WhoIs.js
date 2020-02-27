import React from 'react'
import Title from '../Title';


export default function WhoIs() {
    return (
        <div className="whoIs" >
           <div className="inside-container">
               <Title title="who is john doe" color="#e8f4dc " />
              
               <div className="whoIs-center">
                   <div className="texts">
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae illum asperiores assumenda nisi corrupti itaque unde totam tempora eligendi aperiam incidunt quos ex maiores ea consequuntur, eius ipsa, nihil cumque.</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione id earum vitae nulla fugiat libero, nihil asperiores vel.</p>
                   </div>
                   <div className="text-icons">
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente rerum, quas non ducimus cumque quos recusandae dolorum</p>
                      <div className="media-icons">
                          <a href="#"><i className="fab fa-twitter"></i></a>
                          <a href="#"><i className="fab fa-facebook-f"></i></a>
                          <a href="#"><i className="fab fa-google-plus-g"></i></a>
                          <a href="#"><i className="fab fa-youtube"></i></a>
                          <a href="#"><i className="fab fa-linkedin-in"></i></a>
                          <a href="#"><i className="fab fa-pinterest-p"></i></a>
                      </div>
                   </div>
               </div>

           </div>
        </div>
    )
}
