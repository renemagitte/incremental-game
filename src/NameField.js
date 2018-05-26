import React, { Component } from 'react';
import './App.css';
import App from './App.js';

function NameField(props) {
    return (
      <div className="nameFieldWrapper">
        <div className="nameField" id="nameField">
            Aye, { props.username }!
        </div>
      </div>
    );
}

export default NameField;
