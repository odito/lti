import React from 'react';
import Titlte from '../Title';
import './Inspirations.css';
import Bounce from 'react-reveal';

export default function InspitationsPage() {
    return (
       <React.Fragment>
           <section className="inspirations">
              <div className="inside-container">
                 <Titlte title="kind of inspirations" color="grey" />
                 <div className="inspirations-center">
                     {/* single */}
                     <Bounce left>
                   <div className="single-inspiration"
                    style={{backgroundImage:'url(images/decor1.jpg)'}}
                   >
                      
                   </div>
                   </Bounce>
                   {/* single */}

                    {/* single */}
                    <Bounce right  duration={7000}>
                   <div className="single-inspiration"
                    style={{backgroundImage:'url(images/decor2.jpg)'}}
                   >
                      
                   </div>
                   </Bounce>
                   {/* single */}

                    {/* single */}
                    <Bounce left>
                   <div className="single-inspiration"
                    style={{backgroundImage:'url(images/decor3.jpg)'}}
                   >
                      
                   </div>
                   </Bounce>
                   {/* single */}

                    {/* single */}
                    <Bounce right>
                   <div className="single-inspiration"
                    style={{backgroundImage:'url(images/decor4.jpg)'}}
                   >
                      
                   </div>
                   </Bounce>
                   {/* single */}
                 </div>
              </div>
           </section>
       </React.Fragment>
    )
}
