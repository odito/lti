import React from 'react';
import Title from '../Title';
import './AboutContact.css';

export default function AboutContact() {
    return (
        <section className="aboutContact">
           <div className="inside-container">
               <Title title="contact us" color="grey" />
                <div className="aboutContact-center">
                    <div className="aboutContact-info">
                        <p><span><i class="fas fa-user"></i></span>Nick Carter</p>
                        <p><span><i class="fas fa-phone-alt"></i></span>+30 666-32-222</p>
                        <p><span><i class="fas fa-envelope"></i></span>ncarter@gmail.com</p>
                        <p><span><i class="fas fa-map-marker"></i></span>street jones,21 Athens (Greece)</p>
                    </div>
                    <div className="aboutContact-form">
                       <form >
                           <div className="inputs">
                           <label htmlFor="name">name</label>  <br/>
                           <input type="text"/>
                           </div>
                           <div className="inputs">
                           <label htmlFor="email">email</label>  <br/>
                           <input type="text"/>
                           </div>
                           <div className="textarea">
                               <label htmlFor="message">message</label>
                            <textarea name="" id="" cols="20" rows="5"></textarea>
                           </div>

                           <button type="button" className="btn">Submit</button>
                           
                       </form>
                    </div>
                </div>

           </div>
        </section>
    )
}
