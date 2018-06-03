import React, { Component } from 'react';

import Container from './layout/Container';
import UsernameForm from './UsernameForm';
import firstPageImg from './../img/firstPageImg.png';
import target from './../img/target.png';

class Matrix extends Component {
    
    state = {
        matrixInput1: '',
        matrixInput2: ''
            
    }

    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value })
        
        
//        this.setState({
//            [event.target.name] : event.target.value
//        }, () => {
//        this.afterSetStateFinished();
//        });
        
        
//        if(this.state.matrixInput1 === 'target' && this.state.matrixInput2 === 'innerHTML'){
//            console.log("Win!!!!!!");
//            this.props.setWin();
//    //        this.setState({ matrixInput1: '' })
//    //        this.setState({ matrixInput2: '' })
//
//        }
    }
    
    checkInput = () => {
        if(this.state.matrixInput1 === 'target' && this.state.matrixInput2 === 'innerHTML'){
            console.log("Win!!!!!!");
            this.props.setWin();


        }else{
            this.setState({ matrixInput1: '' })
            this.setState({ matrixInput2: '' })
            alert('Sorry. Try again');
        } 
    }

  render() { 
      
//    if(this.state.matrixInput1 === 'target' && this.state.matrixInput2 === 'innerHTML'){
//        console.log("Win!!!!!!");
//        this.props.setWin();
////        this.setState({ matrixInput1: '' })
////        this.setState({ matrixInput2: '' })
//        
//    }
      
    return (
        <div className="matrix">
        
            <div className="matrix_think">Okay, WTF just happened to me???<br/> Why am I unpleasantly and suddenly code?</div>
        
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
                        /* this.props.setCursorHideShow('animate'); */ 
                        }}>
                        <img src={target} 
                        alt="This is the target! Click here to gain points!" />
                    </div> `}
                </pre>
            </div>
        
            <div className="matrix_execute">
                Okay, this is your chance!<br/>
                You can win this game by some basic knowledge in vanilla javscript.<br/>
                Look at the code above and fill in what's missing in the input fields below:
        
                <div className="matrix_execute_code">
        
                <form onSubmit={this.checkInput}>
                    let enemyToRemove = document.getElementById('
                <input 
                      type="matrixInput1"
                      className="form-control"
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
                      className="form-control"
                      name="matrixInput2"
                      id="matrixInput2"
                      aria-describedby="emailHelp"
                      placeholder="Enter something"
                    onChange={this.handleChange}
                      value={this.state.matrixInput2}
                /> = '';
                    <p><button type="submit" className="button">Run code</button></p>
                </form>
                </div>
            </div>
            
        </div>
      );
    }
}

export default Matrix;