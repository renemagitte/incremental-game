import React, { Component } from 'react';
import './../../App.css';

import ContainerHalf from './ContainerHalf';

function Container(props) {
    return (
      <div className={ props.style }>
        <ContainerHalf style="containerHalf" />
        <ContainerHalf style="containerHalf" /> 
      </div>
        
    );
}

export default Container;
