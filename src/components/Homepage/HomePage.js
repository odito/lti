import React from 'react'
import './Homepage.css';
import Services from './Services';
import Portfolio from './Portfolio';
import JustDefault from './JustDefault';
import Twitter from './Twitter';
import WhoIs from './WhoIs';
import Testimonial from './Testimonials';
import ContactForm from './ContactForm';

export default function HomePage() {
    return (
        <React.Fragment>
           <Services />
           <Portfolio />
           <JustDefault />
           <Twitter />
           <WhoIs />
           <Testimonial />
           <ContactForm />
        </React.Fragment>
    )
}
