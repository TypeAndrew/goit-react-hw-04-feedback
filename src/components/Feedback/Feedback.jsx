import React from "react";

const statusFB = [{ title: 'Good' }, { title: 'Neutral' }, { title: 'Bad' }, { title: 'Total' }, { title: 'Positive' }];

export class FeedBack extends React.Component {

  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
    Total: 0,
    Positive: 0

  }

    counter = (evt) => {
      
      console.log(evt.target.id);
      if (evt.target.id === 'Good') {
        this.setState(state => ({ Good: this.state.Good + 1}));
      }
      if (evt.target.id === 'Neutral') {
        this.setState(state => ({ Neutral: this.state.Neutral + 1}));
      }
      if (evt.target.id === 'Bad') {
        this.setState(state => ({ Bad: this.state.Bad + 1}));
      }
      this.countTotalFeedback();
      this.countPositiveFeedbackPercentage();
      
  }

  countTotalFeedback() {
    this.setState(state => ({ Total: this.state.Total + 1}));
  }

  countPositiveFeedbackPercentage(){
    let percent = Math.round((this.state.Good / this.state.Total) * 100) ;
    this.setState(state => ({ Positive: isNaN(percent) ? 0 : percent}));
  }

  render() {

    return (
      
        <>
        <p>
         {statusFB.map(status => ( 

            status.title === 'Total' || status.title === 'Positive' ? undefined : <button id={status.title} onClick={this.counter}>{status.title}</button>
            
            ))}
        </p> 
        <div>
          <h4>Statistics:</h4>
        <ul>
        {statusFB.map(status => ( 
          
            <li> {status.title} : {this.state[status.title]} {status.title === 'Positive' ?  '%' : undefined} </li>
         
          ))}
          </ul> 
          </div>   
           </> 
          
       
    );
      
    
  }


}