import React, { Component } from 'react';
import './../App.css';

import Welcome from './../Welcome.js';
import Main from './../Main.js';
import Container from './layout/Container';
import ContainerHalf from './layout/ContainerHalf';
import vole from './../img/vole.png';

class Vole extends Component {
    
    state = {
        counter: 0
    }

    incrementCounter = () => {
        this.setState(
          {
            counter: this.state.counter + 1
          }
        )
    }
 
    shakeVole = (event) => {
         let shakyVole = document.getElementById('vole');
         shakyVole.classList.add('voleImgShake');
         setTimeout(function(){ 
             shakyVole.classList.remove('voleImgShake');
         }, 400);
    }
    
    shakeCursor = (event) => {
// sätt denna på vole-bilden:
//        this.shakeCursor(event);
        
//        var x = event.clientX;
//        var y = event.clientY; 
//        var coor = "X coords: " + x + ", Y coords: " + y;
//        document.getElementById("nameField").innerHTML = coor;

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
//        
//        for(let i = 80; i <= 680; i = i+80){
//             setTimeout(function(event){ 
//                 cursorArea.classList.add('shakyCursor');
//             }, i);
//             setTimeout(function(event){ 
//                 cursorArea.classList.remove('shakyCursor');
//             }, i+80); 
//        }
    }
 
    
/* Ta bort denna */
   onClick = (event) => {
    event.preventDefault();
      /**
       * This function is passed down from <App /> and will be called inside of <App />
       * this function will not be executed inside of LoginForm, it will be executed
       * inside of <App />
       */
      this.props.onClick(this.state.counter); 
  }
   

 


  render() {
         
      
    return (
        
        <Container>
            <div class="voleContainer">
                <div className="voleImg" id="vole" onClick={(event) => {  this.incrementCounter(); this.shakeVole(); this.props.onClick(); this.shakeCursor(event);}}><img src={vole} /></div>
            </div>
                                                                                                                                                   
        </Container>

        
    );
  }
}

export default Vole;
