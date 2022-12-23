import React from "react";
import { FeedBack } from "./Feedback/Feedback"; 
import { Statistics } from "./Feedback/Statistics"; 
import {Notification} from "./Feedback/Notification";

const statusFB = [{ title: 'Good' }, { title: 'Neutral' }, { title: 'Bad' }, { title: 'Total' }, { title: 'Positive' }]; 
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section />
        
     
    </div>
  );
};

class Section extends React.Component{

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
    return (<>
              <section ><FeedBack statusFB={statusFB} counter={this.counter} /></section>
              <section >
                <Notification message="There is no feedback" />
                 {this.state.Total >= 1 && <Statistics statusFB={statusFB} state={this.state} />}
              </section>
             
            </>)
  }
} 

