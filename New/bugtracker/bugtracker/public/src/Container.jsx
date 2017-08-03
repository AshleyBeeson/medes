import React from 'react';
import Search from './Search';
import Bugs from './Bugs';

export default class Container extends React.Component{
   
    //The container component is imported into the App.js allowing for a clean app. 
    //Contains the search and bugs component.
    render(){
        return(
        <div className = 'contentContainer'>
            <div className = 'containerSetOutSearch'>        
                <Search />
            </div>        
                <Bugs />
        </div>
        );   
    }
}