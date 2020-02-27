import React from 'react';
import Title from '../Title';
// import backForm from '../../srcImages/backForm.jpg';


export default function ContactForm() {
    return (
        <section className="contact-form">
            <div className="inside-container">
             <Title title="Contact" color="#e8f4dc " />
             <div className="contact-form-center">
                 <form >
                   <div className="form-inputs-texts">
                        <div className="inputs">
                        <p><label htmlFor="name">FULLNAME</label></p>
                        <input type="text" className="name" />
                        <p><label htmlFor="email">EMAIL</label></p>
                        <input type="email" className="email" />
                        </div>
                        <div className="form-texts">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni id iure eos perspiciatis, quod dolore illum consectetur rerum voluptate fugiat mollitia pariatur eveniet repellendus iusto hic, adipisci est veritatis saepe?</p>
                          <p>Lorem ipsum</p>
                          <p>+00 123 street,city,country</p>
                          <p>(000) 000-000</p>
                        </div>
                   </div>
                   <div className="form-area">
                     <p><label htmlFor="message">MESSAGE</label></p>
                     <textarea name="" id="" cols="30" rows="10"></textarea>
                   </div>
                  <button type="submit" className="btnForm">MESSAGE</button>
                 </form>
             </div>
            </div>
        </section>
    )
}
