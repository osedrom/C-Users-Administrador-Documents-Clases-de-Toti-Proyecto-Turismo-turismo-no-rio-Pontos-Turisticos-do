import React, { Fragment } from 'react';

import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Componentes/navbar/pages/Home';
import Services from './Componentes/navbar/pages/Services';
import Transfers from './Componentes/navbar/pages/Transfers';
import Contact from './Componentes/navbar/pages/Contact';
import Login  from './Componentes/navbar/pages/Login';
import Register from './Componentes/navbar/pages/Register';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './Componentes/navbar/NavBar';
import Footer from './Componentes/footer/Footer';
import TourList from './Componentes/tours/TourList';

const routes = () => (
  <Fragment>

    < Navbar />
  <Switch>
    <Route path="/home" component={TourList} />
    <Route path="/services" component={Services} />
    <Route path="/transfer" component={Transfers} />
     <Route path="/contact" component={Contact} /> 
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />

    <Route path="/" component={Home} />
    
    
  </Switch>
  <Footer />
  </Fragment>

);

ReactDOM.render(
  <React.StrictMode>
       <BrowserRouter>{routes()}</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
