import React, { Component } from 'react';
import './../App.css';
import song1 from './../sound/OliXL_PowerOverDeath.mp3';
import song2 from './../sound/SFVAcid_Mocha.mp3';
import song3 from './../sound/LRuschaV_WooAreYouWooDub.mp3';



class Sountrack extends Component {
//    
//                <audio src={song1} controls> 
//                       </audio>
    
    render() {
        
        Math.floor((Math.random() * 10) + 1);
       
        let song = song3;
        
        if(this.props.matrix){
            song = song3;
        }
        
        return (

            <div className="game_soundtrack">
                <embed src={song} width="0" height="0" loop="true" autostart="true" hidden="true" />
            </div>

        );
    }
}

export default Sountrack;
