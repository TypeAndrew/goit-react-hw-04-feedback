import React from "react";

export class Statistics extends React.Component {
    
   
  render() {
    let n = 0;
    return (
      
      <>
        <ul>
          {this.props.options.map(status => (
          
            <li key={n++}> {status.title} : {this.props.state[status.title]} {status.title === 'Positive' ? '%' : undefined} </li>
         
          ))}
        </ul>
      </>
    
    )
  }
}