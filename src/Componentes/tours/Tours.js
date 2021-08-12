import React, { Component } from 'react'
import './Tours.scss';


export default class Tours extends Component {
    state = {
        showInfo: false
    };
    handleInfo = () =>{
        this.setState({showInfo: ! this.state.showInfo});
    };
    render() {
        const {id, place, img, name,info} = this.props.tour;
        /* const {removeTour} = this.props;*/
        return (
             <article className="tour">
                <div className="img-container">
                    <img src = {img} alt=""/>
                     <span className="close-btn">  
                    {/* {  onClick={()=>{removeTour(id)}} }*/}
                         <i className="fas fa-window-close" />
                     </span>
                </div>
                <div className="tour-info">
                    <h3>{place}</h3>
                    <h4>{name} </h4>
                    <h5>
                        Info{" "}
                        <span onClick={this.handleInfo}>
                            <i className="fas fa-caret-square-down" />
                        </span>

                    </h5>
                    {this.state.showInfo &&  <p> {info} </p>}
                    
                </div>
                
            </article>
              
            
        )
    }
}
