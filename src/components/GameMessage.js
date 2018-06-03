import React, { Component } from 'react';
import './../App.css';

import Container from './layout/Container';
import Paragraph from './layout/Paragraph';



class GameMessage extends Component {
    
    state = {
        buttonText: '',
    }
//
//    messages = {
//        level1: "Okk... eh, what are YOU doin' here? I really don't understand, man. You could have made an appearance on any single place on earth and you still showed up here? I can't believe it, you're really just too much! What have you got there anyways? Is that an axe? What do you take me for? A f***ing chrismas tree?",
//        level3: "Message 3: bla bla bla bla bla bla bla bla",
//        level4: "Message 4: bla bla bla bla bla bla bla bla",
//        level5: "Message 5: bla bla bla bla bla bla bla bla"
//    }

//    setMessage = (message) => {
//        this.setState({ message: message });
//    }
//    
//    closeMessage = () => {
//            this.setState({ 
//                message: '...',
//            })
//    }
//    
//    componentDidMount(){
//        if(this.props.level === 1){
//            this.setState({ 
//                message: this.messages.level1,
//            })
//        }
//        if(this.props.level === 2){
//            this.setState({ 
//                message: this.messages.level3,
//            })
//        }
//    }
        

    render() {
//        
//    let message = '';
//    let update = '';
//        
//        if(this.props.level === 1){
//            message = this.messages.level1;
//
//            /* Tried typ writer effect 
//            let text = this.messages.level1;
//            let update = '';
//            
//            for(let i = 0; i < text.length; i++ ){
//                update = update + text.charAt(i);
//                console.log(update);
//                setInterval(() => { 
//                    this.setState({ message: update }) 
//                }, 3000);   
//            }
//            */
//        }
        

//
//    if(this.props.level === 2){
//      message = this.messages.level1;
//    }
//    if(this.props.level === 3){
//      message = this.messages.level3;
//    }
//    if(this.props.level === 4){
//      message = this.messages.level4;
//    }
        
        let message = <div className="game_target_message_empty"></div>;
        if(this.props.message){
            message =   <div className="game_target_message" id="game_target_message">
                {this.props.message ? <div className="game_target_message_heading">Croesus says:</div> : '' }
                <div className="game_target_message_text">
                  { this.props.message }
                </div>
                {this.props.message ? <div className="game_target_message_button"><button type="submit" className="button" onClick={this.props.closeMessage}>{this.props.buttonText}</button></div> : '' }
            </div>;
        }
        
      
        return (
            
            <React.Fragment>
            
            { message }
            
            </React.Fragment>
            



        );

}

}

export default GameMessage;
