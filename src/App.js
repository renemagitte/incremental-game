import React, { Component } from 'react';
import './App.css';

import Container from './components/layout/Container';

import FirstPage from './components/FirstPage';
import Game from './components/Game';
import Win from './components/Win';

class App extends Component {
    
    state = {
        username: '',
        matrix: '',
        win: false
    }

    handleUsername = (username) => {
        this.setState({ username: username });
    }
    
    setMatrix = () => {
        this.setState({ matrix: true });
    }
    
    setWin = () => {
        this.setState({ win: true });
    }
 
    render() {
      
        let view;
        
        if(!this.state.win && this.state.username){
            view = <Game username={this.state.username} setMatrix={this.setMatrix} matrix={this.state.matrix} setWin={this.setWin}  />
        }else if(this.state.win){
            view = <Win />
        }else{
            view = <FirstPage handleUsername={this.handleUsername} />;  
        }
        
 
         
    return (
        
        <Container className="rootJSX">
        
            { view  }

        </Container>
        
    );
  }
}

export default App;
