import React from "react";
 

export class FeedbackOptions extends React.Component {


    render() {
    let n = 0;
    const { onLeaveFeedback } = this.props;
    return (
      
      <p>
         {this.props.options.map(status => ( 
            <span key={n++}>
             {status.title !== 'Total' && status.title !== 'Positive' &&
               <button id={status.title} onClick={onLeaveFeedback}>{status.title}</button>}
            </span>
            ))}
        </p> 
        
       );
    }
}