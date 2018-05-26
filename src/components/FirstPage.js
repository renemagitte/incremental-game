import React, { Component } from 'react';

import Container from './layout/Container';
import UsernameForm from './UsernameForm';

class FirstPage extends Component {

//  state = {
//    username: '',
//  }
//
//  handleChange = (event) => {
//    this.setState({ [event.target.name] : event.target.value })
//  }
//
//  handleUsername = (event) => {
//    event.preventDefault();
//    if(this.state.username){
//      /**
//       * This function is passed down from <App /> and will be called inside of <App />
//       * this function will not be executed inside of LoginForm, it will be executed
//       * inside of <App />
//       */
//      this.props.handleUsername(this.state.username);
//    } 
//    
//  }

  render() {
      
    return (
            <UsernameForm handleUsername={ this.props.handleUsername } />
      );
    }
}


export default FirstPage;