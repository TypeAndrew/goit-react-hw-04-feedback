import React from "react";


export class FeedBack extends React.Component {

  
  render() {
    
    return (
      
        <>
        <p >
         {this.props.statusFB.map(status => ( 
            
            status.title === 'Total' || status.title === 'Positive' ? undefined : <button key={status.title} id={status.title} onClick={this.props.counter}>{status.title}</button>
            
            ))}
        </p> 
         
           </> 
          
       
    );
      
    
  }


}