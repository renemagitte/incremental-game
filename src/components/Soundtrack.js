import React from 'react';
import './../App.css';
import song3 from './../sound/LRuschaV_WooAreYouWooDub.mp3';

function Sountrack(){
        
        return (

            <div className="game_soundtrack">
                <embed src={song3} width="0" height="0" loop="true" autostart="true" hidden="true" />
            </div>

        );
}

export default Sountrack;
