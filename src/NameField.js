import React, { Component } from 'react';
import './App.css';
import App from './App.js';

function NameField(props) {
    return (
      <div className="nameField">
        Heeej
        { props.username }
      </div>
    );
}

export default NameField;
