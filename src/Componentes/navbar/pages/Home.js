import React, { Component } from 'react';

import logo from '../../imagenes/logo.png';
import FlorestaTijuca from '../../imagenes/FlorestaTijuca.jpg';
import "../pages/Home.scss";





export default class Home extends Component {
    render() {
        return (
         <React.Fragment>
                   <div classname="container">
                  
                      <h1 className="titulo">A agência</h1>
                   </div>
                   <div className="body">
                       <h2>
                       WAO e uma empresa...
                       <img src= {logo} width="220"/> 
                       
                       </h2>
                       
                          <div classname>
                             <img src= {FlorestaTijuca} width="350"/> 
                          </div>
                          <div>
                             <img src= {FlorestaTijuca} width="350"/> 
                          </div>
                          <div>
                             <img src= {FlorestaTijuca} width="350"/> 
                          </div>
                       
                          
                   </div>
         
           
        
        
        
                    
        
        
        </React.Fragment>
        
        
        
        )




            
            
    }
}

