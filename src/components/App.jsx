import {  useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";  
import { Statistics } from "./Statistics/Statistics";  
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const App = () => {


  const [statuses, setStatuses] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const counter = (evt) => {
    const { name } = evt.target;
    
    setStatuses(prev => ({ ...prev, [name]: prev[name] + 1 }));

  }

  const countTotalFeedback= () => {
 
    return (statuses.good + statuses.neutral + statuses.bad);
  }

  const countPositiveFeedbackPercentage =() =>{
    let percent = Math.round((statuses.good / countTotalFeedback()) * 100);
    return isNaN(percent) ? 0 : percent;
  
  }
  
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
          <FeedbackOptions options={Object.keys(statuses)} onLeaveFeedback={counter}  />
        </Section>
        {countTotalFeedback() === 0 ? <Notification message="There is no feedback" /> :
          <Section title={"Statistic:"}>
            <Statistics bad={statuses.bad} good={statuses.good} neutral={statuses.neutral} total={countTotalFeedback()} percetage={countPositiveFeedbackPercentage()}  />
        </Section>}
   
      </div>
    );

};


