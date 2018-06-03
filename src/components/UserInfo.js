import React from 'react';
import './../App.css';
import Paragraph from './layout/Paragraph';

function UserInfo(props) {
    
    let greeting = `Ok, so your name is ${props.username} who cares.`
    if(props.matrix){
        greeting = "Ok, so your name is Nemo."
    }
    return (
        
        <div className="game_userinfo">
        { greeting }
        </div>
        
    );
}

export default UserInfo;
