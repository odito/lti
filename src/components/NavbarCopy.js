import React from 'react';
import logo from '../logo.png';
import styled from 'styled-components';

import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context/context';


export default function Navbar() {
    
    
  
    return (

           <ProductConsumer>
                {(value)=>{
                     
                    const {sidebarOpen, handleSidebar,handleClose,links}=value;
                  
                    console.log(sidebarOpen);
                  return(
                    <HeaderWrapper  show={sidebarOpen}>
              

                    <div className="header-container">
                    <nav>
                    <div className="logoBtn">
                        <Link to="/" onClick={handleClose}><img src={logo} alt="logo"/></Link>
                        <div className="btn" onClick={handleSidebar} >
                           <div className="bar"></div>
                           <div className="bar"></div>
                           <div className="bar"></div>
                        </div>
                    </div>
                  
            <ul className="links " onClick={handleClose} >
                {/* <li><Link to='/'>Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/biography">Biography</Link></li>
                <li><Link to ="/interiors">Interiors</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/contacts">Contact</Link></li>
                <li><Link to="/inspirations">Inspirations</Link></li> */}
                {links.map(links=>{
                    return(
                    <li key={links.id}><Link to={links.path}>{links.link}</Link></li>
                    )
                })}
            </ul>
                  
                  
                </nav>
                </div>
        
       
           </HeaderWrapper>
                  )
                }}
            </ProductConsumer>
         
       
         
      
    )
}


const HeaderWrapper = styled.div`

   padding-bottom:71px;


.logoBtn img{
    display:block;
    padding:0px 0;
    width:180px;
    height:50px;
}

.header-container{
    background:rgba(0,0,0,0.7);
    position:fixed;
    width:100%;
    z-index:5;
}

.bar{
    width:35px;
    margin:5px ;
    padding:2px;
    background:#fff;
}

.btn{
    border:1px solid #f6f6f6;
    display:inline-block;
    cursor: pointer;
}

.logoBtn{
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid grey;
    padding:10px;
}



.links{
    transition:all 0.5s ease-in-out;
    position:fixed;
    top:71px;
    bottom:0;
    left:0;
    right:0;
    background:rgba(0,0,0,0.9);
    width:400px;

    z-index:5;
    transform:${props=>props.show ?"translate(%)":"translate(-100%)"};
    
    
}

.links li a{
    color:#fff;
    text-transform:uppercase;
    padding:10px;
    display:block;
    transition:all 0.5s ease-in;
    border:1px solid transparent;
    border-bottom:1px solid transparent;
}

.links li a:hover{
    color:#41e1b3;
    text-transform:uppercase;
    padding:10px 25px;
    border-bottom:1px solid #049fe1;
    background:rgba(0,0,0,1);
}




/* responsive version */

@media screen and (min-width:870px){
    .links{
    transition:all 0s ease-in-out !important ;  
    
}

.links li a{
   /* transition:none; */
}

}

@media screen and (min-width:880px){
  padding-bottom:90px;

 .header-container{
    background:rgba(0,0,0,0.7);
    margin:0 auto;
    position:relative;
    width:100%;
    position: fixed;
   
    }

.btn{
    display:none;
}

 nav{
    display:flex;
    justify-content:space-between;
    padding:10px 0;
    max-width:1180px;
    margin:0 auto;
    position:relative;
}
   
 .links{
     transition:all 0s ease-in-out !important;
    display:flex;
    margin-right:10px;
    justify-content:space-between;
    align-items:center;
    position:relative;
    top:auto;
    background:transparent;
    width:auto;
    transform:${props=>props.show ?"translate(0)":"translate(0)"};
 }

 .links li a:hover{
    padding:10px;
    border:1px solid #049fe1;
    background:transparent;
    margin:0 2px;

}

.links li a{
    margin:0 2px;
}

.logoBtn{
   border-bottom:0 ;
}

}


@media screen and (min-width:960px){
.logoBtn img{
    display:block;
    padding:0px 0;
    width:200px;
  
}


}

`;