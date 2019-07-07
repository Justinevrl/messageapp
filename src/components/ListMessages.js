import React from 'react';

const ListMessages = ({ messages }) => (
  <div>
    {messages.map(message => (
      <p key={message.toString()}>
        {message.content}
        {message.status}
      </p>
    ))}
  </div>
);

export default ListMessages;
