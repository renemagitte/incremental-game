import React, { Component } from 'react';
import './../App.css';

import Container from './layout/Container';
import UserInfo from './UserInfo';


class Game_target extends Component {

  render() {      
      
    return (

        <button /* onClick={this.props.incrementCounter} */
        onClick={(event) => {  this.props.incrementCounter(); }}
        className="button">Klicka här</button>
        
    );
  }
}

export default Game_target;
