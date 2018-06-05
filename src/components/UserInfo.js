import React from 'react';
import './../App.css';

function UserInfo(props) {
    
    let greeting = `Ok, so your name is ${props.username}.`
    if(props.matrix){
        /* This is almost certainly the name of that Keanu Reeves character? */
        greeting = "Ok, so your name is Nemo."
    }
    
    return (     
        <div className="game_userinfo">
        { greeting }
        </div>
        
    );
}

export default UserInfo;
