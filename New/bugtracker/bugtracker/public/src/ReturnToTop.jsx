import React from 'react';

export default class ReturnToTop extends React.Component{ 
    
    //component that remains visible at all time to allow the user to quickly return to the top of the page.
    
    render(){
        return( 
           <div className="App-return">
                <a className = 'linkToTop' href="#top">Return to Top</a>
            </div>
        );   
    }
}