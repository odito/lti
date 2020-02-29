import React from 'react'
import './BestInteriors.css';
import Bounce from 'react-reveal/Bounce';
import Title from '../Title';
import BackInterior from '../../images/decor2.jpg';
import {ProductConsumer} from '../Context/context';

export default function BestInteriors() {
    return (
        <ProductConsumer>
{value=>{
    const {Interiors}=value;
    return(
<section className="interiors">
<div className="inside-container">
    <Title title="best interiors" color="grey" />
    
    <div className="interiors-center">
        <div className="interiors-texts">
            <p><span>I</span>nteriors are people with a lot of talent in giving different kinds of advice.Their main purpose is to plan a cool and amazing design for our needs. The design can influence our psychology so it is important to keep in mynd a primary disccusion with the interior designer before the materialization of our design.</p>
            <h3>Most famous:</h3>
            {
              Interiors.map(interior=>{
                  return(
              <Bounce left duration={3000}>
                        <div className="famous" key={interior.id}>
                       
                       <h4>{interior.name}</h4>
                      
                 
                   
                     <div className="famous-img">
                    <img src={interior.img} alt=""/>
                   </div>
                   
               </div>
              </Bounce>
                  )
              })
            }
        </div>
       
    </div>

</div>
</section>
    )
}}
        </ProductConsumer>
    
    )
}
