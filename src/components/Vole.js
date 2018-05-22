import React, { Component } from 'react';
import './../App.css';

import Welcome from './../Welcome.js';
import Main from './../Main.js';
import Container from './layout/Container';
import ContainerHalf from './layout/ContainerHalf';

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
                <div className="voleImg" id="vole" onClick={(event) => {  this.incrementCounter(); this.shakeVole(); this.props.onClick();}}><img src={require('./../img/vole.jpg')} /></div>
            </div>
                                                                                                                                                   
        </Container>

        
    );
  }
}

export default Vole;
