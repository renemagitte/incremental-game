import React, { Component } from 'react';
import './../App.css';

import Container from './layout/Container';
import UserInfo from './UserInfo';
import Game_target from './Game_target';
import Game_stats from './Game_stats';


class Game extends Component {
    
    state = {
        counter: 0,
        increments: 1
    }

    incrementCounter = () => {
        this.setState({ counter: this.state.counter + this.state.increments })
    }
 

 

   

 


  render() {
         
      
    return (
        
        <Container>
        
            <Container>
                <UserInfo username={this.props.username} />
            </Container>
        
            <Container>
                <Game_stats username={this.state.counter} />
            </Container>
        
            <Container>
                <Game_target incrementCounter={this.incrementCounter} />
            </Container>
                                                                                                                                                   
        </Container>

        
    );
  }
}

export default Game;
