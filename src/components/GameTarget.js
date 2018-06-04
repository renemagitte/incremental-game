import React, { Component } from 'react';
import './../App.css';
import target from './../img/target.png';
import targetVariation from './../img/targetVariation.png';

class GameTarget extends Component {

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
    
    animateCursor = (event) => {
//        let cursorArea = document.getElementById('item1');
//        window.getComputedStyle('item1').opacity;
        
//        let cursorArea = document.getElementById('game_Container');
//        cursorArea.classList.add('shakyCursor');
//        
//         setTimeout(function(event){ 
//             cursorArea.classList.remove('shakyCursor');
//         }, 80);
//         setTimeout(function(event){ 
//             cursorArea.classList.add('shakyCursor');
//         }, 160);
//         setTimeout(function(event){ 
//            cursorArea.classList.remove('shakyCursor');
//        }, 240);
//         setTimeout(function(event){ 
//            cursorArea.classList.add('shakyCursor');
//        }, 300);
//         setTimeout(function(event){ 
//             cursorArea.classList.remove('shakyCursor');
//         }, 360);
//         setTimeout(function(event){ 
//             cursorArea.classList.add('shakyCursor');
//         }, 420);
//         setTimeout(function(event){ 
//            cursorArea.classList.remove('shakyCursor');
//        }, 480);
//         setTimeout(function(event){ 
//             cursorArea.classList.add('shakyCursor');
//         }, 540);
//         setTimeout(function(event){ 
//            cursorArea.classList.remove('shakyCursor');
//        }, 600);
    }
    
    
  render() {
    
    return (
        <React.Fragment>    
            <div className="game_target_img" id="target" onClick={(event) => {  this.props.incrementCounter(); this.animateTarget(); this.animateCursor(); this.targetVariation(); }}>
                <img src={target} alt="This is the target! Click here to gain points!" />
            </div>
        </React.Fragment>
    );
  }
}

export default GameTarget;
