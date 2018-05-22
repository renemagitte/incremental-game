import React, { Component } from 'react';
import './App.css';
import App from './App.js';

function NameField(props) {
    return (
      <div className="nameFieldWrapper">
        <div className="nameField">
            { props.clicks } clicks so far.
        </div>
      </div>
    );
}

export default NameField;
