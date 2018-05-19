import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Container from './components/layout/Container';
import ContainerHalf from './components/layout/ContainerHalf';

class App extends Component {
  render() {
    return (
        <Container style="container">
        <ContainerHalf style="containerHalf" />
        <ContainerHalf style="containerHalf" /> 
        </Container>
    );
  }
}

export default App;
