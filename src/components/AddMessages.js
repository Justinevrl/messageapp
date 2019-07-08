import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import './Welcome.css';
// import axios from 'axios';

class AddMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      status: 'public',
    };
  }

  onSubmit = (event) => {
    const { content, status } = this.state;
    const { addMessage } = this.props;
    event.preventDefault();
    this.setState({
      content: '',
    });
    addMessage({ content, status });

    // Exemple avec une requête POST :
    // axios.post(`https://example.com/messages`, { content }, { status })
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // })
    // }
  }

  onChange = (event) => {
    event.preventDefault();
    this.setState({
      content: event.target.value,
    });
  }

  onChangeRadio = (event) => {
    this.setState({
      status: event.target.value,
    });
  }

  render() {
    const { status, content } = this.state;
    return (
      <div>
        <Form className="textmessage">
          <FormGroup>
            <Label for="Text">Write a message :</Label>
            <Input type="textarea" name="text" id="Text" onChange={this.onChange} value={content} />
          </FormGroup>
        </Form>

        <Form>
          <Label for="radio">Status :</Label>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio1"
                onChange={this.onChangeRadio}
                checked={status === 'public'}
                value="public"
              />
              {' '}
             public
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio1"
                onChange={this.onChangeRadio}
                checked={status === 'private'}
                value="private"
              />
              {' '}
              private
            </Label>
          </FormGroup>
        </Form>
        <Button className="bouton" color="info" type="submit" onClick={this.onSubmit}>Send my message</Button>

      </div>
    );
  }
}

export default AddMessages;
