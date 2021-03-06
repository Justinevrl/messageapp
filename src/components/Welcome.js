import React, { Component } from 'react';
import AddMessages from './AddMessages';
import ListMessages from './ListMessages';
// import axios from 'axios';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          content: 'My first message',
          status: 'private',
        },
      ],
    };
  }

  // Exemple avec une requête GET :
  // componentDidMount = () => {
  //   axios.get('http://www.example.com/messages')
  //     .then((res) => {
  //       const messages = res.data;
  //       this.setState({ messages });
  //     });
  // }

  addMessage = (message) => {
    const { messages } = this.state;
    this.setState({ messages: [...messages, message] });
  }

  deleteMessage = (message) => {
    const { messages } = this.state;
    const deleted = messages;
    const index = deleted.indexOf(message);
    deleted.splice(index, 1);
    this.setState({
      messages: deleted,
    });
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <h1 className="titre">Welcome to my messages app !</h1>
        <AddMessages addMessage={this.addMessage} />
        <ListMessages messages={messages} deleteMessage={this.deleteMessage} />
      </div>
    );
  }
}

export default Welcome;
