import React from 'react';
import Title from '../Title';
import './RecentEvents.css';
import {ProductConsumer} from '../Context/context';
import { Events } from '../Context/Data';

export default function RecentEvents() {
    return (

<ProductConsumer>
    {value=>{
        return(
            <section className="recentEvents">
            <div className="inside-container">
               <Title title="recent events" color="lightGrey" />
               <div className="recentEvents-center">
                 <table className="table">
                   <tr>
                       <th>Interiors</th>
                       <th >Date</th>
                       <th>Place</th>
                   </tr>
  
                 {
                     Events.map(event=>{
                         return(
                            <tr key={event.id}>  
                        <td>{event.name}</td>
                         <td>{event.date}</td>
                         <td>{event.area}</td>
                        </tr>
                         )
                     })
                 }
                  
                 </table>
               </div>
            </div>
          </section>
        )
    }}
</ProductConsumer>
      
    )
}



{/*

*/}



{/* <ProductConsumer>
            
{value=>{
    const {Events}=value;
    return(
        
       {
           Events.map(event=>{
            
           })
       }
      </tr>
 

    )
}}
</ProductConsumer> */}