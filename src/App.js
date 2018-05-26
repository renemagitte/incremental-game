import React, { Component } from 'react';
import './App.css';

import FirstPage from './components/FirstPage';
import Container from './components/layout/Container';

class App extends Component {
    
    state = {
        username: '',
        clicks: 0,
        level: 0
    }

    handleUsername = (username) => {
        this.setState({ username: username });
    }
 
    render() {
      
        let view;

        if(this.state.username){
            view = "hej! det finns ett username. vidare till spelsidan..."
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
