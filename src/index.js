import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider';
import Review from './Review';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Nav/>
    <Slider/>
    <Review/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

