import React, { Component } from 'react';
import './main.css';
import Container from './Container';
import ReturnToTop from './ReturnToTop';
import Footer from './Footer';
import Welcome from './Welcome';

export default class App extends Component {
    
 // App renders the welcome message, container, return and footer
  render() {
    return (
        <div className="App">
            <Welcome />
            <Container />
            <ReturnToTop />
            <Footer />
        </div>
    );
  }
}