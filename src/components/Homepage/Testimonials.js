import React from 'react';
import Title from '../Title';

export default function Testimonials() {
    return (
        <div className="testimonial">
            <div className="inside-container">
               <Title title="testimonials" color="#989c9f" />
               <div className="testimonial-center">
                 <div className="testimonial-texts">
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis corporis eum, autem esse sunt recusandae. A temporibus repellat earum eius error! Id optio voluptates, placeat odit repellat ullam officiis minus!</p>
                 </div>
                 <div className="testimonial-icon">
                 <i className="fas fa-quote-right"></i>
                 </div>
             </div>
            </div>
        </div>
    )
}
