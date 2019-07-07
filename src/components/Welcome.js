import React, { Component } from 'react';
import AddMessages from './AddMessages';
import ListMessages from './ListMessages';
import './Welcome.css';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  addMessage = (message) => {
    const { messages } = this.state;
    this.setState({ messages: [...messages, message] });
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <h1>Welcome to my messages app !</h1>
        <AddMessages className="add" addMessage={this.addMessage} />
        <ListMessages className="list" messages={messages} />
      </div>
    );
  }
}

export default Welcome;
