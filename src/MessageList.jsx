import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';


class MessageList extends Component {
  render() {
    const messages = this.props.messages;
    return (
      <main className="messages">
        {messages.map((message) => {
          if(message.type == "incomingNotification"){
            return <Notification key={message.id} content={message.content}/>
          } else {
            return <Message key={message.id} username={message.username} content={message.content}/>
          }
        })}

      </main>
    );
  }
}
export default MessageList;