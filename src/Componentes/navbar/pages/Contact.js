import React, { Component } from 'react';
import "../pages/Contac.scss";



export default class Sign extends Component {
    render() {
        return (

            <section>
                <div className="container">
                    <h2>Contact Us</h2>
                    <div className="row100">
                        <div className="col">
                            <div className="inputBox">
                                <input type="text" name="" required="required"></input>
                                <span className="text">First Name</span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inputBox">
                                <input type="text" name="" required="required"></input>
                                <span className="text">Last Name</span>
                                <span className="line"></span>
                            </div>
                        </div>

                    </div>
                    <div className="row100">
                        <div className="col">
                            <div className="inputBox">
                                <input type="text" name="" required="required"></input>
                                <span className="text">email</span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inputBox">
                                <input type="text" name="" required="required"></input>
                                <span className="text">Phone Number</span>
                                <span className="line"></span>
                            </div>
                            <div className="row100">
                                <div className="col">
                                    <div className="inputBox textarea">
                                        <textarea required="required"></textarea>
                                        <span className="text">Type Your Message Here</span>
                                        <span className="line"></span>
                                    </div>
                                    <div className="row100">
                                        <div className="col">
                                            <input type="submit" value="Send" ></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>

            </section>
            
               
            
        )
    }
}

