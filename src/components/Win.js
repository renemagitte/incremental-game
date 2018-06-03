import React, { Component } from 'react';

import Container from './layout/Container';
import UsernameForm from './UsernameForm';
import firstPageImg from './../img/firstPageImg.png';

class Win extends Component {

  render() {
      
    return (
        <Container className="win">
            You are the best!

        </Container>
      );
    }
}

export default Win;