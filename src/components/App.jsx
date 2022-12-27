import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";  
import { Statistics } from "./Statistics/Statistics";  
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    //total: 0,
    //positive: 0

  }

  statusesFeedback = [{ title: 'good' }, { title: 'neutral' }, { title: 'bad' }, { title: 'total' }, { title: 'positive' }];

  counter = (evt) => {
    const { id } = evt.target;
    console.log(evt.target.id);
    
    this.setState(state => ({ [id]: this.state[id] + 1 }));

  }

  countTotalFeedback() {
 
    return (this.state.good + this.state.neutral + this.state.bad);
  }

  countPositiveFeedbackPercentage(){
    let percent = Math.round((this.state.good / this.countTotalFeedback()) * 100);
    return isNaN(percent) ? 0 : percent;
  
  }
  
  render() {
    const {  good, neutral,bad  } = this.state;
   
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

        <Section title={"Feedback"} >
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.counter}  />
        </Section>
        
        {this.countTotalFeedback === 0 ? <Notification message="There is no feedback" /> :
          <Section title={"Statistic:"}>
            <Statistics bad={bad} good={good} neutral={neutral} total={this.countTotalFeedback()} percetage={this.countPositiveFeedbackPercentage()}  />
        </Section>}
   
      </div>
    );
  }  
};


