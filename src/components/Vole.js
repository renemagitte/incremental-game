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

/* This function increments the counter AND adds css shake class to vole */
 incrementCounter = () => {
    this.setState(
      {
        counter: this.state.counter + 1
      }
    )
    
/*
    let shakyVole = document.getElementById('vole');
     shakyVole.classList.add('voleImgShake');
     setTimeout(function(){ 
         shakyVole.classList.remove('voleImgShake');
     }, 400);
*/
  }
 
 
 shakeVole = (event) => {
     let shakyVole = document.getElementById('vole');
     shakyVole.classList.add('voleImgShake');
     setTimeout(function(){ 
         shakyVole.classList.remove('voleImgShake');
     }, 400);
  }
 
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
            <div className="voleImg" id="vole" onClick={(event) => {  this.incrementCounter(); this.shakeVole();}}><img src={require('./../img/vole.jpg')} /></div>
        </Container>

        
    );
  }
}

export default Vole;
