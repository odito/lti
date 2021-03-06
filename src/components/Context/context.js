import React, {Component} from 'react';
import {Links} from './Data';
import {Services} from '../Context/Data';
import {Portfolio} from '../Context/Data';
import {blogItems} from '../Context/Data';
import {Interiors} from '../Context/Data';
import {Events} from '../Context/Data';

const ProductContext = React.createContext();

 class ProductProvider extends Component{

   state={

       sidebarOpen:false,
       closeLinks:false,
       links:Links,
       services:Services,
       portfolio:Portfolio,
       headerShow:false,
       blogItems:blogItems,
       Interiors:Interiors,
       Events:Events,

   }


// open navbar method
handleSidebar=()=>{
  
 this.setState({
    sidebarOpen: !this.state.sidebarOpen,
  
 })
 console.log("clik");
 
}

// close links when pushing sidebar
handleClose = ()=>{
    if(this.state.sidebarOpen===true){
        this.setState({
           sidebarOpen:false
        })
    }
  
}

componentDidMount(){
    window.addEventListener("scroll",this.scrollEffect);
  

}

// scroll effect
scrollEffect = ()=>{

  if(window.scrollY > 50 ){
    this.setState({
        headerShow:true
    })
  }

  else {
      this.setState({
          headerShow:false
      })
  }
   
   
}





    render(){
        return(
        <ProductContext.Provider value={{
            ...this.state,
            handleSidebar:this.handleSidebar,
            handleClose:this.handleClose,
            scrollEffect:this.scrollEffect,
        }}>
           {this.props.children}
        </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};