import React from 'react';

const BugsList = ({bug, onDelete, onEdit}) => (
    <div className="card">
      <div className="card-block">
          <h4 className = 'card-header'>{bug.issueId}</h4>
        <p className = 'card-text'><h4>Summary</h4>{bug.summary}</p>
          <p className = 'card-text'><h4>Description</h4>{bug.description}</p>
        
          
        <table className = 'setOutBugData'>
        <tr>
        <td>
            <p className = 'card-text'>Reporter : {bug.reporter}</p>
        </td><td>
            <p className = 'card-text'>Assigned User : {bug.assignedUser}</p></td>
        </tr>
        <tr>
        <td>   
             <p className = 'card-text'>Severity : {bug.severity}</p>
            </td><td>
            <p className = 'card-text'>High Priority : {bug.highPriority}</p></td>
        </tr>
        <tr>
            <p className = 'card-text'>Status : {bug.status}</p>
        </tr>
        </table>    
            
        <br /> 
        <h5 className = 'dateTag'>Date Created : {bug.dateCreated}</h5>
        <button onClick={() => onDelete(bug.id)} className= 'btn btn-primary'>Delete</button>
        <button onClick={() => onEdit(bug.id)} className= 'btn btn-primary'>Edit</button>
      </div>
    </div>
)

export default BugsList;