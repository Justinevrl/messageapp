import React from 'react';
import {
  ListGroup, ListGroupItem, Badge, Button,
} from 'reactstrap';
import './Welcome.css';

const ListMessages = ({ messages, deleteMessage }) => (
  <div className="list">
    <ListGroup>
      {messages.map(message => (
        <ListGroupItem key={message.content}>
          {message.content}
          {' '}
          <Badge pill>{message.status}</Badge>
          <Button className="delete" color="danger" onClick={() => (deleteMessage(message))}>x</Button>
          {' '}
        </ListGroupItem>
      ))}

    </ListGroup>
  </div>
);

export default ListMessages;
