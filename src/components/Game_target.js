import React, { Component } from 'react';
import './../App.css';

import Container from './layout/Container';
import UserInfo from './UserInfo';


class Game_target extends Component {

    onClick = (event) => {
    event.preventDefault();
      /**
       * This function is passed down from <App /> and will be called inside of <App />
       * this function will not be executed inside of LoginForm, it will be executed
       * inside of <App />
       */
      this.props.incrementCounter(); 
    }

  render() {      
      
    return (
        
        <h1><a href="#" onClick={this.onClick}>Klicka här</a></h1>
        
    );
  }
}

export default Game_target;
