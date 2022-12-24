import React from "react";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";  
import { Statistics } from "../Statistics/Statistics";  
import { Section } from "../Section/Section";

const statusesFeedback = [{ title: 'Good' }, { title: 'Neutral' }, { title: 'Bad' }, { title: 'Total' }, { title: 'Positive' }];

export class FeedBack extends React.Component {

  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
    Total: 0,
    Positive: 0

  }

  statusFB = [{ title: 'Good' }, { title: 'Neutral' }, { title: 'Bad' }, { title: 'Total' }, { title: 'Positive' }];

  counter = (evt) => {
      
    console.log(evt.target.id);
    if (evt.target.id === 'Good') {
      this.setState(state => ({ Good: this.state.Good + 1 }));
    }
    if (evt.target.id === 'Neutral') {
      this.setState(state => ({ Neutral: this.state.Neutral + 1 }));
    }
    if (evt.target.id === 'Bad') {
      this.setState(state => ({ Bad: this.state.Bad + 1 }));
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

    
  render( ) {
   
    return (
      
      <>
        <Section title={"Feedback"} >
          <FeedbackOptions options={statusesFeedback} onLeaveFeedback={this.counter} state={this.state } />
        </Section>
        <Section title={"Statistic:"}>
          <Statistics options={statusesFeedback} state={this.state } />
        </Section>
      </> 
          
       
    );
    
    
  }


}