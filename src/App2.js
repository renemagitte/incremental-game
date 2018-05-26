import React, { Component } from 'react';
import './App.css';

import firstPage from './components/firstPage.js';
import Container from './components/layout/Container';


class App extends Component {
    
    state = {
        username: '',
    }

    handleUsername = (username) => {
        this.setState({ username: username });
    }
 
    render() {
      
        let view;

        if(this.state.username){
            view = "hej"
        }else{
            view = <firstPage handleUsername={this.handleUsername} />;        
        }
  
    return (
        
        <Container style="app__container">
        { view }
        </Container>
        
    );
  }
}

export default App;
