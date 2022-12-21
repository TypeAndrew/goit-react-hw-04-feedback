import React from "react";

const statusFB = [{ title: 'good' }, { title: 'neutral' }, { title: 'bad' }];

export class FeedBack extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

    counter = () => {
      
    this.setState(state => ({ good: this.state.good + 1}));
  }

  render() {
    const { good } =  this.state ;
    const {neutral} =  this.state ;
    return (
        <ul>
            {statusFB.map(status => ( 
                <li>{status.title} <button onClick={this.counter}>{good }</button></li>
            ))}   
        
        {neutral }
      </ul>
    );
      
    
  }


}