import React from 'react';
import {Link} from 'react-router-dom';
import {Links} from './Context/Data';

export default function Footer() {
    return (
        
          <footer>
              <ul>
             
             {/* 
                {
                    Links.map(linkUrl=>{
                        return(
                           <ul>
                              <li key={linkUrl.id}><Link>{linkUrl.link}</Link></li>  
                           </ul> 
                        )
                    })
                } */}

                <li><Link to="/">HOME</Link></li>
                <li><Link to ="/blog">BLOG</Link></li>
                <li><Link to="/biography">BIOGRAPHY</Link></li>
                <li><Link to="/interiors">INTERIORS</Link></li>
                <li><Link to="/events">EVENTS</Link></li>
                <li><Link to="/contacts">CONTACT</Link></li>
                <li><Link to="/inspirations">INSPIRATIONS</Link></li>

              </ul>
              
              </footer>
    
    )
}
