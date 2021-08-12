import React, {Component} from 'react';
import "./NavBar.scss";
import logo1 from '../../Componentes/imagenes/logo1.png';
import * as ReactBootstrap    from 'react-bootstrap';
import { Link } from 'react-router-dom';




export default function NavBar() {
    return (
     
        
        <ReactBootstrap.Navbar bg="primary" variant="dark" expand="md">
  <div>
    <ReactBootstrap.Navbar.Brand  href="/">
      <img src= {logo1} width="150"/> 
     
      </ReactBootstrap.Navbar.Brand>
    
    <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootstrap.Nav className="me-auto">
        <ReactBootstrap.Nav.Link className="links" href="home">Home</ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link href="services">Services</ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link href="transfer">Transfers</ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link href="contact">Contact</ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link href="login">Login</ReactBootstrap.Nav.Link> 
        <ReactBootstrap.Nav.Link href="register">Register</ReactBootstrap.Nav.Link> 
        
          
      </ReactBootstrap.Nav>
    </ReactBootstrap.Navbar.Collapse>
  </div>
</ReactBootstrap.Navbar>
    
    
   
  
        
    
  
    )
  }
