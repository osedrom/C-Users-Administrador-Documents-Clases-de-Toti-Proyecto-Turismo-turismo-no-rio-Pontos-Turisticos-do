import React, { Component } from 'react';
// import Footer from '../../footer/Footer';
import FlorestaTijuca from '../../imagenes/FlorestaTijuca.jpg';
import vista from '../../imagenes/vista.jpg';
import porto from '../../imagenes/porto.jpg';
import isla2 from '../../imagenes/isla2.jpg';
import Aquario3 from '../../imagenes/Aquario3.jpg';
import { Carousel } from "react-bootstrap";



export default class Services extends Component {
    render() {
        return (
            <React.Fragment>
                  <Carousel fade>
  <Carousel.Item>
    
    
      <img src= {porto} width="150"
      className="d-block w-100" 
      alt="First slide" 
      /> 
      
    <Carousel.Caption>
      <h3>Porto Maravilha</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img src= {vista} width="150"
      className="d-block w-100" 
      alt="second slide" 
      /> 

    <Carousel.Caption>
      <h3>Pão de Açucar</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img src= {Aquario3} width="150"
      className="d-block w-100" 
      alt="second slide" 
      /> 

    <Carousel.Caption>
      <h3>Aquario</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
         
           
        
        
        
                    {/* <Footer />  */}
        
        
        </React.Fragment>
        
        
        )
    }
}


