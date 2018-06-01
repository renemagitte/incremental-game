import React, { Component } from 'react';
import './../App.css';
import Paragraph from './layout/Paragraph';
import song1 from './../sound/OliXL_PowerOverDeath.mp3';
import song2 from './../sound/SFVAcid_Mocha.mp3';




class Sountrack extends Component {
    
    render() {
        return (

            <div>
            <audio src={song2} controls>
                <p>If you are reading this, it is because your browser does not support the audio element.</p>
            </audio>
            
                Ok, so this is level {this.props.level}.
            </div>

        );
    }
}

export default Sountrack;
