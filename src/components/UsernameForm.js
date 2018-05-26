import React, { Component } from 'react';

import Container from './layout/Container';
import UsernameForm_label from './UsernameForm_label';
import UsernameForm_input from './UsernameForm_input';
import UsernameForm_submit from './UsernameForm_submit';

class UsernameForm extends Component {
    
    state = {
        username: '',
    }

    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value })
    }
  
    handleUsername = (event) => {
        event.preventDefault();
        if(this.state.username){
      /**
       * This function is passed down from <App /> and will be called inside of <App />
       * this function will not be executed inside of LoginForm, it will be executed
       * inside of <App />
       */
            this.props.handleUsername(this.state.username);
        } 

    }
    


  render() {

    return (
        <Container>
            <form onSubmit={this.handleUsername}>
        
                <UsernameForm_label />
                
                <UsernameForm_input onChange={this.handleChange} username={this.state.username}/> 
        
                <UsernameForm_submit />
        
            </form>
        </Container>



      );
    }
}


export default UsernameForm;