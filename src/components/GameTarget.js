import React, { Component } from 'react';
import './../App.css';

import Container from './layout/Container';
import UserInfo from './UserInfo';
import target from './../img/target.png';
import targetVariation from './../img/targetVariation.png';


class GameTarget extends Component {
    
    messages = {
        level1: "Message 1: bla bla bla bla bla bla bla bla",
        level3: "Message 3: bla bla bla bla bla bla bla bla",
        level4: "Message 4: bla bla bla bla bla bla bla bla",
        level5: "Message 5: bla bla bla bla bla bla bla bla"
    }

    animateTarget = (event) => {
        let animatedTarget = document.getElementById('target');
         animatedTarget.classList.add('game_target_animate');
         setTimeout(function(){ 
             animatedTarget.classList.remove('game_target_animate');
         }, 400);
    }
    
    targetVariation = () => {
        let targetDiv = document.getElementById('target');
        targetDiv.innerHTML = '';
        
        let t = `<img src=${target} />`;
        let tv = `<img src=${targetVariation} />`;
        targetDiv.innerHTML = tv;
        
        setTimeout(function(){ 
            targetDiv.innerHTML = t;
         }, 400); 
    }
    
    animateCursor = () => {
        
        let cursorArea = document.getElementById('root');
        cursorArea.classList.add('shakyCursor');
        
         setTimeout(function(event){ 
             cursorArea.classList.remove('shakyCursor');
         }, 80);
         setTimeout(function(event){ 
             cursorArea.classList.add('shakyCursor');
         }, 160);
         setTimeout(function(event){ 
            cursorArea.classList.remove('shakyCursor');
        }, 240);
         setTimeout(function(event){ 
            cursorArea.classList.add('shakyCursor');
        }, 300);
         setTimeout(function(event){ 
             cursorArea.classList.remove('shakyCursor');
         }, 360);
         setTimeout(function(event){ 
             cursorArea.classList.add('shakyCursor');
         }, 420);
         setTimeout(function(event){ 
            cursorArea.classList.remove('shakyCursor');
        }, 480);
         setTimeout(function(event){ 
             cursorArea.classList.add('shakyCursor');
         }, 540);
         setTimeout(function(event){ 
            cursorArea.classList.remove('shakyCursor');
        }, 600);
    }
    

    typeWriter = (message) => {
        
        var i = 0;
        var speed = 50;
        let text = message;
        
          if (i < text.length) {
            let div = document.getElementById('game_target_message')
            div.innerHTML += text.charAt(i);
            i++;
            setTimeout(this.typeWriter, speed);
          }
    }
 
    

  render() {
      
    let message = '';
              
    if(this.props.level == 1){
      message = this.typeWriter(this.messages.level1);  
    }
    if(this.props.level == 2){
      message = this.messages.level1;
    }
    if(this.props.level == 3){
      message = this.messages.level3;
    }
    if(this.props.level == 4){
      message = this.messages.level4;
    }
      
    return (
        
            <div className="game_target">
        
                <div className="game_target_message" id="game_target_message">
                    <p>Croesus says:</p>

                    { message }
                </div>

                <div className="game_target_img" id="target" onClick={(event) => {  this.props.incrementCounter(); this.animateTarget(); this.animateCursor(); this.targetVariation(); }}>
                    <img src={target} />
                </div>

        </div>
    );
  }
}

export default GameTarget;
