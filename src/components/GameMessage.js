import React, { Component } from 'react';
import './../App.css';

class GameMessage extends Component {

    render() {
        
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
