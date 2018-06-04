import React from 'react';
import './../App.css';

function GameStats(props) {
    return (
        
        <div className="game_stats">
            <p>You have {props.counter} hits.</p>
        </div>
        
    );
}

export default GameStats;
