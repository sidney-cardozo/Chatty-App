import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: "Bob", colour: "red"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      numberOfUsers: 1
    };
  }

  componentDidMount(){
    this.WebSockets = new WebSocket("ws://localhost:3001");
    console.log("Connected to server");
    // Adding switches to categorize the type of incoming msg to render
    this.WebSockets.onmessage =  (event) => {
      let newMsg = JSON.parse(event.data)
      switch(newMsg.type){
        case "incomingMessage":
          let msgs = this.state.messages.concat(newMsg)
          this.setState({messages: msgs})
          break;

        case "incomingNotification":
          let notif = this.state.messages.concat(newMsg)
          this.setState({messages: notif})
          break;

        case "userCountUpdate":
          this.setState({numberOfUsers: newMsg.numberOfUsers})
          break;
        default:
          throw new Error("Unknown event type " + newMsg.type);
      }
    }
  }

  setNewUser(event){
    // Using the "onBlur" event to set a new username
    let oldName = this.state.currentUser.name
    let newName = event.target.value
    if( oldName != newName){
      let notification = {
        type: "postNotification",
        content: `${oldName} has changed their name to ${newName}`
      }
      let stringifiedNotification=JSON.stringify(notification)
      this.WebSockets.send(stringifiedNotification)
      this.setState({currentUser: {name : newName}})
    }

  }

  setNewMessage(event){
    if(event.keyCode === 13){
      let typedMsg = {
        type: "postMessage",
        username: this.state.currentUser.name,
        content: event.target.value
      }
      typedMsg = JSON.stringify(typedMsg);
      this.WebSockets.send(typedMsg);
      event.target.value = ""
    }
  };

  render() {
    return (
      <div>
        <NavBar numberOfUsers={this.state.numberOfUsers} />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} setNewUser={this.setNewUser.bind(this)} setNewMessage={this.setNewMessage.bind(this)}/>
      </div>
    );
  }
}

export default App;
