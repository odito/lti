import React from 'react'
import Title from '../Title';
import {ProductConsumer} from '../Context/context';
import Roll from 'react-reveal/Roll';

export default function Services() {
    return (
        <ProductConsumer>
          {(value=>{
              const{services}=value;

              return(
                <section className="services">
                <div className="inside-container">
                  
                  <Title title="Services" color="#fff"  />
                  
              
                  <div className="services-center">
                    
                    
                     {services.map(service=>{
                       return(
                 <Roll>
                          <div className="single-service" key={service.id}>
                        <i className={service.icon}></i>
                        <div className="texts">
                        <h2>{service.column}</h2>
                            <p>{service.text} </p>
                        </div>
                    </div>
                 </Roll>
                       )
                     })}

                  </div>
                </div>
                  
            </section>
              )
          })}
        </ProductConsumer>
     
    )
}
