import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome.js';
import Container from './components/layout/Container';
import ContainerHalf from './components/layout/ContainerHalf';
import NameField from'./NameField';
import Vole from'./components/Vole';
import VoleFunction from'./components/VoleFunction';

function Main(props){    
   
    return (
        
        <Container style="container" username={props.username} >
        <ContainerHalf style="containerHalf">
          
            <VoleFunction onClick={this.handleClick}/>
        </ContainerHalf>        
        <ContainerHalf style="containerHalf">
                { /* props.username */ }
            { /* <div> <NameField username={props.username} /></div> */ }
            <NameField username={ props.username } />
        </ContainerHalf>

        </Container>
        
    );

}

export default Main;
