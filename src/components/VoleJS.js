import React, { Component } from 'react';
import './../App.css';

import Welcome from './../Welcome.js';
import Main from './../Main.js';
import Container from './layout/Container';
import ContainerHalf from './layout/ContainerHalf';
import vole from './../img/vole.jpg';

class Vole extends Component {
    
    state = {
        counter: 0,
        inputValue: '',
        jsCode: `
                    <div class="voleContainerrr">
                        <div className="voleImg" id="vole" 
                        onClick={(event) => { 
                        this.incrementCounter(); 
                        this.shakeVole(); 
                        this.props.onClick();
                        }}>
                        <img src={vole} />
                        </div>
                    </div>`
    }

    incrementCounter = () => {
        this.setState(
          {
            counter: this.state.counter + 1
          }
        )
    }
    
  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }
    
    insertJS = (event) => {
        event.preventDefault();
        
        /* Very unclear regex for inputfield in the matrix. It's called the "blaha fetch the right id blaha"-regex. */
        var regex = RegExp('.+[`document.getElementById(`voleContainerrr`)`].+');
        var inputStr = this.state.inputValue;
        
        if(regex.test(inputStr)){
            alert('Close enought!')
            this.setState({ jsCode: ''});
        }else{
            alert('Try once again with some javascrrrrript')
        }
        
        
        //this.state.jsCode;
        
//        let jsCodeField = document.getElementById('jsCode');
//        jsCodeField.value = '';
    }
 

  render() {

         
    return (
        
        <Container>
            <div className="matrix">
                  Åh, heliga makaroner!<br />
                 You have totally entered the matrix!
            </div>
                <div className="matrixCode" id="voleContainerrr">
                    <pre>{this.state.jsCode}</pre>
                </div>
            <div className="matrix">
                  Here's your chance to remove that vole 4 good!
            </div>
                  
            <div>
            <form onSubmit={this.insertJS}>
                  <p><label htmlFor="insertJS">Write your javascript</label></p>
                  <input 
                          type="jsCode"
                          className="matrixForm"
                          name="inputValue"
                          id="jsCode"
                          aria-describedby="emailHelp"
                          placeholder="Enter your code"
                          onChange={this.handleChange}
                          value={this.state.inputValue}
                  />
                <button type="submit" className="button">Execute</button>
              </form>
            </div>
                  
                                                                                                                                                   
        </Container>

        
    );
  }
}

export default Vole;
