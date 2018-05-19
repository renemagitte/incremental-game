import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome.js';
import Main from './Main.js';
import Container from './components/layout/Container';
import ContainerHalf from './components/layout/ContainerHalf';

class App extends Component {
    
    state = {
        loggedIn: false,
        username: 'tjaaa'
    }

  handleUsername = (username) => {
    this.setState({ loggedIn: true, username: username });
  }

  render() {
        let view = <Welcome handleUsername={this.handleUsername}/>;
        if(this.state.loggedIn){
          view = <Main />;
        }
         
    return (
        
        <Container style="container">
        { view }
        </Container>
        
    );
  }
}

export default App;
