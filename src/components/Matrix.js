import React, { Component } from 'react';
import './../App.css';


class Matrix extends Component {
    
    state = {
        matrixInput1: '',
        matrixInput2: ''     
    }

    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value })
    }
    
    checkInput = () => {
        if(this.state.matrixInput1 === 'target' && this.state.matrixInput2 === 'innerHTML'){
            this.props.setWin();
        }
        else{
            this.setState({ matrixInput1: '' })
            this.setState({ matrixInput2: '' })
            console.log('Sorry. Try again');
        } 
    }

  render() { 
      
    return (
        <div className="matrix">
        
            <div className="matrix_think">Okay, WTF just happened to me???<br/>Is this an existential crisis?</div>
        
            <div className="matrix_heading">
                Omg! You have totally entered the Matrix!<br/>
                This is what Croesus looks like in code:
            </div>
        
            <div className="matrix_code">
                 <pre> { `
                    <div className="game_target_img" id="target" 
                        onClick={(event) => {  
                        this.props.incrementCounter(); this.animateTarget(); 
                        this.animateCursor(); this.targetVariation(); 
                        }}>
                        <img src={target} 
                        alt="This is the target! Click here to gain points!" />
                    </div> `}
                </pre>
            </div>
        
            <div className="matrix_execute">
                Okay, this is your chance!<br/>
                You can WIN this game by some basic knowledge in vanilla javscript.<br/>
                Look at the code above and fill in what's missing on the lines below:
        
                <div className="matrix_execute_code">
        
                <form onSubmit={this.checkInput}>
                    let enemyToRemove = document.getElementById('
                <input 
                      type="matrixInput1"
                      className="matrix_input"
                      name="matrixInput1"
                      id="matrixInput1"
                      aria-describedby="emailHelp"
                      placeholder="Enter something"
                        onChange={this.handleChange}
                      value={this.state.matrixInput1}
                />
            ');<br/>
                    enemyToRemove.                
                    <input 
                      type="matrixInput2"
                      className="matrix_input"
                      name="matrixInput2"
                      id="matrixInput2"
                      aria-describedby="emailHelp"
                      placeholder="Enter something"
                        onChange={this.handleChange}
                      value={this.state.matrixInput2}
                /> = '';
                    <p><button type="submit" className="button">Done!</button></p>
                </form>
                </div>
            </div>
            
        </div>
      );
    }
}

export default Matrix;