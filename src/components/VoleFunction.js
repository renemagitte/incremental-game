import React, { Component } from 'react';
import './../App.css';

import Container from './layout/Container';

function VoleFunction(props) {
    return (
        <Container>
            <div className="voleImg"><img src={require('./../img/vole.jpg')} /></div>
        
                <button onClick={props.handleClick}>
                Click me
                </button>
        </Container>
    );
}

export default VoleFunction;
