import React, { Component } from 'react';
import './App.css';
import App from './App.js';

function NameField(props) {
    return (
      <div className="nameFieldWrapper">
        <div className="nameField">
            Aye, { props.username } voleslayer!
        </div>
        <div className="nameField">
            { props.clicks } so far.
        </div>
      </div>
    );
}

export default NameField;
