import React, { Component } from 'react';
import './../App.css';

import Container from './layout/Container';
import UserInfo from './UserInfo';
import target from './../img/target.png';


class Game_target extends Component {
    
    clickAnimations = (event) => {
        
         let animatedTarget = document.getElementById('target');
         animatedTarget.classList.add('game_target_animate');
         setTimeout(function(){ 
             animatedTarget.classList.remove('game_target_animate');
         }, 400);
        
        
        let cursorArea = document.getElementById('root');
        
        cursorArea.classList.add('animatedCursor');
        
         setTimeout(function(event){ 
             cursorArea.classList.remove('animatedCursor');
         }, 80);
         setTimeout(function(event){ 
             cursorArea.classList.add('animatedCursor');
         }, 160);
         setTimeout(function(event){ 
            cursorArea.classList.remove('animatedCursor');
        }, 240);
         setTimeout(function(event){ 
            cursorArea.classList.add('animatedCursor');
        }, 300);
         setTimeout(function(event){ 
             cursorArea.classList.remove('animatedCursor');
         }, 360);
         setTimeout(function(event){ 
             cursorArea.classList.add('animatedCursor');
         }, 420);
         setTimeout(function(event){ 
            cursorArea.classList.remove('animatedCursor');
        }, 480);
         setTimeout(function(event){ 
             cursorArea.classList.add('animatedCursor');
         }, 540);
         setTimeout(function(event){ 
            cursorArea.classList.remove('animatedCursor');
        }, 600);
    }

  render() {
      
   
//        <button /* onClick={this.props.incrementCounter} */
//        onClick={(event) => {  this.props.incrementCounter(); }}
//        className="button">Klicka här</button>

      
    return (

                <div className="game_target_img" id="target" onClick={(event) => {  this.props.incrementCounter(); this.clickAnimations(); }}>
                    <img src={target} />
                </div>

        
    );
  }
}

export default Game_target;
