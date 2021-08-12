import React, {Component} from 'react';
import './Footer.scss'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component{
    render(){
        return(
           
            <footer>
                <div className="footer-content">
                    <h3>WAO Tours</h3>

                    <div className="icons"> 
               <ul className="redes">
                   <li > 
                      <FontAwesomeIcon icon={faFacebook}/> 
                   </li>
                   <li> 
                      <FontAwesomeIcon icon={faTwitter}/> 
                   </li>
                   <li> 
                       <FontAwesomeIcon icon={faInstagram}/> 
                   </li>
                   <li> 
                       <FontAwesomeIcon icon={faLinkedin}/> 
                   </li>

               </ul>
                </div>
                <div>
                    <p className="parrafo">
                        copyrigth &copy;2021 WAO Tours.designe by <span>Grupo 5 Turma 8 </span>
                    </p>
                </div>
                    
                </div>
               
               
              
            </footer>
        )
    }
}
export default Footer;
     
        
        