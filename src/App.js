import React, { Component } from 'react';
import './App.css';

import Container from './components/layout/Container';

import FirstPage from './components/FirstPage';
import Game from './components/Game';

class App extends Component {
    
    state = {
        username: ''
    }

    handleUsername = (username) => {
        this.setState({ username: username });
    }
 
    render() {
      
        let view;

        if(this.state.username){
            view = <Game username={this.state.username}/>
        }else{
            view = <FirstPage handleUsername={this.handleUsername} />;  
        }
        
 
      
         
    return (
        
        <Container>
        
            { view  }

        </Container>
        
    );
  }
}

export default App;
