import React, { Component } from 'react';
import '../tours/TourList.scss';
import Tours from '../tours/Tours';
import { TourData } from '../viaje/TourData';

export default class TourList extends Component {
   
    state = {
        tours: TourData
    }
    // removeTour =id => {
        
    //     const {tours}= this.state;
    //     const sortedTours = tours.filter(tour=> tour.id !==id);
    //     this.setState({
    //         tours: sortedTours
    //     });
    // }
        
        
    render() {
        const {tours} = this.state;
        console.log(this.state.tours);
        return (
            <section className="tourlist">
               {/* <Tours /> */}
               {tours.map(tour =>{
                  return(
                      <Tours key={tour.id} tour={tour}/> //removeTour= {this.removeTour}///>
                  )
               })}
            </section>
        )
    }
}

