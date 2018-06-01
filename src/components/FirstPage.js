import React, { Component } from 'react';

import Container from './layout/Container';
import UsernameForm from './UsernameForm';

class FirstPage extends Component {

  render() {
      
    return (
        <Container style="first_page">
            <UsernameForm handleUsername={ this.props.handleUsername } />
        </Container>
      );
    }
}

export default FirstPage;