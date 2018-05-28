import React from 'react';
import './../App.css';
import Paragraph from './layout/Paragraph';

function UserInfo(props) {
    return (
        
        <Paragraph username={props.username}>
            Hej {props.username}!
        </Paragraph>
        
    );
}

export default UserInfo;
