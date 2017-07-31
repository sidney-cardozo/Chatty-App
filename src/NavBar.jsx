import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <h3 className="user-count">Users Online: {this.props.numberOfUsers}</h3>
      </nav>
    );
  }
}
export default NavBar;