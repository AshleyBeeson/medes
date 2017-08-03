import React, { Component } from 'react';

export default class Welcome extends Component {
    
    //Welcome bar at the top of the page. 
    
  render() {
    return (
            <div className="App-header">
                <h2>Welcome to BugTracker</h2>
                <p className="App-p1">Search for bugs below</p>
            </div>
    );
  }
}