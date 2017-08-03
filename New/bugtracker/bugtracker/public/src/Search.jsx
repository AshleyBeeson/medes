import React from 'react';

export default class Search extends React.Component{
   
    constructor(){
        super();
        this.state={
            searchTerm : '',
        }; 
    }
 
    //Search bar component - incomplete.
    
    render(){
        return(
        <div>
                
        <table className = 'containerSetOut'>
            <tr>
                <td>
                    <input type = 'text' className = 'searchBar' placeholder = 'Search...'></input>
                </td>
                <td>
                    <button className= 'btn btn-primary'>Go</button>
                </td>
                <td>
                    <button className= 'btn btn-primary'>Add Bug</button>
                </td>
            </tr>
        </table>        
        </div>
        );   
    }
}