import React from 'react';
import Title from '../Title';
import {ProductConsumer} from '../Context/context';

export default function Portfolio() {
    return (

        <ProductConsumer>
            {value=>{
                const {portfolio}=value;
             
                
        return(
            <section className="portfolio">
            <div className="inside-container">
                <Title title="Portfolio" color="#323232" />
<div className="portfolio-center">
    {/* single portfolio */}
    {
        portfolio.map(portfolio=>{
            return(
            <div className="single-portfolio" key={portfolio.id} style={{backgroundImage:`url(${portfolio.img})`}} >
            {/* <img src={portfolio.img} alt="img"/> */}
            <div className="plus">
            <i className={portfolio.plus}></i>
            </div>
        </div>
            )
        })
    }
    {/* end of single portfolio */}

</div>
         </div>  
    </section>
        )
            }}
        </ProductConsumer>
       
    )
}
