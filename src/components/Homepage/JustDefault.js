import React from 'react';
import Title from '../Title';

export default function JustDefault() {
    return (
        <div className="just-default">
            <div className="inside-container">
            <Title title="just default section" color="#AAB5B9" />
              <div className="just-default-center">
                  <div className="just-texts">
                 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, consectetur corrupti iure tenetur qui voluptas amet consequatur, praesentium dolore nesciunt repellendus eos nulla </p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis dolore at suscipit, eaque iure, quod facere, a quis error ipsa quam animi ducimus.</p>
                  </div>
                  <div className="just-video">
                  <iframe  
            src="https://www.youtube.com/embed/tgbNymZ7vqY" 
            style={{border:"none"}}>
                </iframe> 
                  </div>
              </div>

            </div>
           
        </div>
    )
}
