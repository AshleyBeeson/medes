import React from 'react';
//import data from './json/bugs.json';
import Api from './api';
import BugsList from './BugsList';

export default class Bugs extends React.Component{
    
    //The bugs component is used to read in the bugs json file, before pasisng on the values to the bugsList component.
    
    //Also renders the drop down options and radoi buttons for priority
    
   constructor(){
       super();
        this.state={
            bugsArray:[],
            selectedBug: {},
            showEdit: false,
        }
   }

    //Adds json values to array.
    componentDidMount(){
    Api.fetchBugs(bugs => {
     this.setState({bugsArray: bugs}); 
    })}
    
    //Delete bug from list. Create new item array to display all other bugs.
    deleteBug(id){
        const newBugsList = this.state.bugsArray.filter(bugUpdate => bugUpdate.id !== id);
        this.setState({bugsArray : newBugsList});
    }
    
    priorityFilter(highPriority){
        const newBugsList = this.state.bugsArray.filter(bugUpdate => bugUpdate.highPriority === highPriority);
        this.setState({bugsArray : newBugsList});
    }
    
    //Edit bug selected in the list.
     editBug(id){
         this.setState({
             showEdit : true,
         })
    }
    
    //Close edit suite.
    closeEdit(){
        this.setState({
            showEdit : false,
        })
    }
    
    
    selectBug(bug){
        this.setState({selectedBug : bug});
    }
    
    //Gathers the filter choice from the drop down box.
    setFilterChoice(e){
        const filterChoice = e.target.value;
        console.log('filter changed to ' + filterChoice);
    }
    
    
    
    //Allows user to select all high or low priority bugs, or all.
    filterPriority(e){
        const priorityChoice = e.target.value;
        let newBugsList;
        if (priorityChoice === 'ALL'){
            newBugsList = this.state.bugsArray;
        }
         else {
             newBugsList = this.state.bugsArray.filter(bugUpdate => bugUpdate.highPriority === priorityChoice);
         }
        this.setState({bugsArray : newBugsList});
    }
    
    
    
    //Allows user to select high, medium or low severity bugs.
    filterSeverity(e){
        const severityChoice = e.target.value;
        let newBugsList;
        if (severityChoice === 'ALL'){
            newBugsList = this.state.bugsArray;
        }
         else {
             newBugsList = this.state.bugsArray.filter(bugUpdate => bugUpdate.severity === severityChoice);
         }
        this.setState({bugsArray : newBugsList});
    }
    
    //Allows user to filter by reporter.
    filterReporter(e){
        const reporterChoice = e.target.value;
        let newBugsList;
        if (reporterChoice === 'Null'){
            newBugsList = this.state.bugsArray;
        }
         else {
             newBugsList = this.state.bugsArray.filter(bugUpdate => bugUpdate.reporter === reporterChoice);
         }
        this.setState({bugsArray : newBugsList});
    }
    
    
    //Allows user to filter by assigned user.
    filterUser(e){
        const userChoice = e.target.value;
        let newBugsList;
        if (userChoice === 'Null'){
            newBugsList = this.state.bugsArray;
        }
         else {
             newBugsList = this.state.bugsArray.filter(bugUpdate => bugUpdate.assignedUser === userChoice);
         }
        this.setState({bugsArray : newBugsList});
    }
    
    
    //Allows user to filter by status
    filterStatus(e){
        const statusChoice = e.target.value;
        let newBugsList;
        if (statusChoice === 'Null'){
            newBugsList = this.state.bugsArray;
        }
         else {
             newBugsList = this.state.bugsArray.filter(bugUpdate => bugUpdate.status === statusChoice);
         }
        this.setState({bugsArray : newBugsList});
    }
    
    refreshFilters(){
        console.log('refresh page');
        window.location.reload();
    }

    render(){
        return(
        <div className ='container'>  
           <h4>Filters:</h4>
            <select className = 'dropdownFilter2' onChange = {this.filterReporter.bind(this)}>
                <option value="Null" selected>Reporter</option>
                     <option value="QAC">QAC</option>
                     <option value="Elliott">Elliott</option>
                     <option value="Ashley">Ashley</option>
                     <option value="Gareth">Gareth</option>
            </select> 
            
            <select className = 'dropdownFilter2' onChange = {this.filterUser.bind(this)}>
                <option value="Null" selected>User</option>
                     <option value="Un-assigned">Un-assigned</option>
                     <option value="Jake">Jake</option>
                     <option value="Ashley">Ashley</option>
            </select> 
                
            <select className = 'dropdownFilter2' onChange = {this.filterUser.bind(this)}>
                <option value="Null" selected>Status</option>
                     <option value="TO DO">To Do</option>
                     <option value="IN PROGRESS">In Progress</option>
                     <option value="IN REVIEW">In Review</option>
                     <option value="IN TEST">In Test</option>
                     <option value="IN DEMO">In Demo</option>
                     <option value="DONE">Done</option>
                </select> 
   
                
            <table className = 'filterSetOut'>
                  
            <tr>
            <td>
                <form onChange = {this.filterPriority.bind(this)}>
                    <label>Priority: </label>
                    <label className="checkbox-inline pri">
                      <input type="radio" value="ALL" name = 'radAnswer'/>Show All
                    </label>
                    <label className="checkbox-inline">
                      <input type="radio" value="TRUE" name = 'radAnswer'/>High
                    </label>
                    <label className="checkbox-inline" >
                      <input type="radio" value="FALSE" name = 'radAnswer'/>Low
                    </label>
                  </form>
            </td>
            </tr>
            <tr>
            <td>    
                
                 <form onChange = {this.filterSeverity.bind(this)}>
                    <label>Severity: </label>
                        <label className="checkbox-inline pri">
                      <input type="radio" value="ALL" name = 'radAnswer'/>Show All
                    </label>
                    <label className="checkbox-inline pri">
                      <input type="radio" value="HIGH" name = 'radAnswer'/>High
                    </label>
                    <label className="checkbox-inline">
                      <input type="radio" value="MEDIUM" name = 'radAnswer'/>Medium
                    </label>
                    <label className="checkbox-inline" >
                      <input type="radio" value="LOW" name = 'radAnswer'/>Low
                    </label>
                  </form>
                
            </td>
            </tr>

            </table>
                
                <button onClick = {this.refreshFilters.bind(this)} className= 'btn btn-primary'>Refresh Filters</button>
                
            <br /><hr /><br />
                
                <div className = 'editSuite'>
                {this.state.showEdit ?
                  <div className="card">
                  <div className="card-block">
                    <h4 className = 'card-header'>Edit Bug</h4>

                      <table>
                          <tr>
                            <td>
                                <h5 className = 'card-text'>Issue ID : </h5>   
                            </td>
                            <td>
                                <input></input>
                            </td>
                          </tr>
                           <tr>
                            <td>
                                <h5 className = 'card-text'>Summary : </h5>   
                            </td>
                            <td>
                                <input></input>
                            </td>
                          </tr>
                           <tr>
                            <td>
                                <h5 className = 'card-text'>Description : </h5>   
                            </td>
                            <td>
                                <input></input>
                            </td>
                          </tr>
                          
                      </table>
    
                <table className = 'setOutBugData'><tr><td>
                        <p className = 'card-text'>Reporter : <input></input></p>
                        </td><td>
                        <p className = 'card-text'>Assigned User : <input></input></p></td></tr><tr><td>   
                         <p className = 'card-text'>Severity : <input></input></p></td><td>
                        <p className = 'card-text'>High Priority : <input></input></p></td></tr><tr>
                        <p className = 'card-text'>Status : <input></input></p>
                    </tr></table>    

                    <br />
                      
                    <h5 className = 'dateTag'>Date Created : <input></input></h5>
                    <button className= 'btn btn-primary'>Submit</button>
                       <button className= 'btn btn-primary' onClick= {this.closeEdit.bind(this)}>Close</button>
                  </div>
                </div>
                : ''
                }
                    
                    
                </div>
 
                <h2>Bugs List:</h2>
                <br />
    
                  {this.state.bugsArray.map((bug) => 
                        <BugsList 
                            key = {bug.id} 
                            bug = {bug} 
                            onClick = {this.selectBug.bind(this)} 
                            onDelete = {this.deleteBug.bind(this)}
                            onEdit = {this.editBug.bind(this)}
                        />
                )   
            }
          </div>
        );
    }
}