import React from 'react'

import Title from '../Title';
import {ProductConsumer} from '../Context/context';

export default function Popular() {
    return (
         
        <ProductConsumer>
          {value=>{
               const {blogItems}=value;

              return(
                <section className="blog">
                <div className="inside-container">
                <Title title="popular blogs" color="grey" />
                 <div className="blog-center">
                     {/* single blog */}
                      {blogItems.map(item=>{
                          return(
                            <div className="single-blog" key={item.id}>
                            <img src={item.img} alt="image"/>
                            <div className="posts">
                                <p>{item.date}</p>
                              <h2>{item.title}</h2>
                              <p>{item.words}</p>
                            </div>
                            <div className="comments">
                          <li><a href="#"><i class="fas fa-comment"></i> {item.number1}</a></li>
         
                          <li><a href="#"><i class="far fa-eye"></i> {item.number2}</a></li> 
         
                                <li><a href="#"><i class="fas fa-hashtag"></i></a></li> 
                            </div>
                        </div>
         
                          )
                      })}
        
                     {/* end of single blog */}
                 </div>
                </div>
               </section>
              )
          }}
        </ProductConsumer>

 
    )
}
