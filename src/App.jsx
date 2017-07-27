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
      ]
    };
  }

  componentDidMount(){
    this.WebSockets = new WebSocket("ws://localhost:3001");
    console.log("Connected to server");
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
        default:
          throw new Error("Unknown event type " + newMsg.type);
      }
    }
  }

  setNewUser(event){
    let oldName = this.state.currentUser.name
    let newName = event.target.value
    if( oldName != newName){
      let notification = {
        type: "postNotification",
        content: `${oldName} has changed their name to ${newName}`
      }
      let stringifiedNotification=JSON.stringify(notification)
      this.WebSockets.send(stringifiedNotification)
      this.state.currentUser.name = newName
    }

  }

  setNewMessage(event){
    if(event.keyCode === 13){
      let typedMsg = {
        type: "postMessage",
        username: this.state.currentUser.name,
        content: event.target.value
      }
      // Add a new message to the list of messages in the data store
      // const msgs = this.state.messages.concat(incomingMsg)

      typedMsg = JSON.stringify(typedMsg);
      this.WebSockets.send(typedMsg);
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      // this.setState({messages: msgs})
      event.target.value = ""
    }
  };

  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} setNewUser={this.setNewUser.bind(this)} setNewMessage={this.setNewMessage.bind(this)}/>
      </div>
    );
  }
}

export default App;
