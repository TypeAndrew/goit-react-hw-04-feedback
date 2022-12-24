import { Component } from "react"

export class Notification extends Component {

    render(){
      return(<div>{this.props.message}</div>)
    }
  }