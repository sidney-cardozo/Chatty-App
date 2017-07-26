import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id:1,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id:2,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
  }


    setNewMessage(event){
      if(event.keyCode === 13){
        let incomingMsg = {
          id: (this.state.messages.length + 1),
          username: this.state.currentUser.name,
          content: event.target.value
        }
        // Add a new message to the list of messages in the data store
        const msgs = this.state.messages.concat(incomingMsg)
        // Update the state of the app component.
        // Calling setState will trigger a call to render() in App and all child components.
        this.setState({messages: msgs})
        event.target.value = ""
      }
    };

  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} setNewMessage={this.setNewMessage.bind(this)}/>
      </div>
    );
  }
}
export default App;
