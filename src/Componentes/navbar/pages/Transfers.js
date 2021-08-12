import React, { Component } from 'react';
import transfer from '../../imagenes/transfer.jpg';
import micro from '../../imagenes/micro.png';
import { Card } from "react-bootstrap";
import "../pages/Transfer.scss"; 




export default class Transfers extends Component {
    render() {
        return (
            <React.Fragment>
            
 
          <div className="container">
                 <Card className="tipo" style={{ width: '28rem' }}>
                 <Card.Img variant="top"  src= {transfer} width="150" />
                  <Card.Body>
                 <Card.Title></Card.Title>
                 <Card.Text className="text1">
                  Se você esta viajando de férias ou a negócios, oferecemos traslados durante 24h. para todo o estado do Rio de Janeiro. Nosso objetivo é oferecer o melhor serviço de transporte para todos  nossos clientes a um preço competitivo.

                </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
                   </Card.Body>
                    </Card> 

                  <Card  className="tipo" style={{ width: '28rem' }} className="card">
                 <Card.Img  className="card" variant="top"  src= {micro} width="150" /> 
                      <Card.Body>
                      <Card.Title></Card.Title>
               <Card.Text className="text1">
               Contamos com uma frota nova de veículos.

                       </Card.Text>
     {/* <Button variant="primary">Go somewhere</Button>  */}
                       </Card.Body>
                     </Card>



          </div>
                          
                             
                            
                  
            </React.Fragment>
 


          
        
        
        
        
        )

        
    }
}


