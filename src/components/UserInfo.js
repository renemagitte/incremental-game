import React from 'react';
import './../App.css';
import Paragraph from './layout/Paragraph';

function UserInfo(props) {
    return (
        
        <Paragraph username={props.username}>
            Ok, so your name is {props.username}.
        </Paragraph>
        
    );
}

export default UserInfo;
