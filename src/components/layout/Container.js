import React, { Component } from 'react';
import './../../App.css';

import NameField from'./../../NameField';
import ContainerHalf from './ContainerHalf';

function Container(props) {
    return (
      <div className={ props.style }>
      { /*  <ContainerHalf style="containerHalf" />
        <ContainerHalf style="containerHalf">
           <div> <NameField username={props.username} /></div>
        </ContainerHalf> */ }
        
        { props.children }
      </div>
        
    );
}

export default Container;
