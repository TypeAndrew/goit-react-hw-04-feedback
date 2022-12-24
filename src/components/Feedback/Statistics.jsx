import React from "react";

//const statusFB = [{ title: 'Good' }, { title: 'Neutral' }, { title: 'Bad' }, { title: 'Total' }, { title: 'Positive' }];

export class Statistics extends React.Component {

  


  render() {

    return (
      
        <>
        
          <h4>Statistics:</h4>
        <ul>
        {this.props.statusFB.map(status => ( 
          
            <li key={status.title}>  {status.title} {this.props.state[status.title]}{status.title === 'Positive' ?  '%' : ''} </li>
         
          ))}
          </ul> 
         
           </> 
          
       
    );
      
    
  }


}