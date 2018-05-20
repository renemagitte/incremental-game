import React, { Component } from 'react';
import './../../App.css';

function ContainerHalf(props) {
    return (
      <div className={ props.style }>
        { props.children }
      </div>
    );
}

export default ContainerHalf;
