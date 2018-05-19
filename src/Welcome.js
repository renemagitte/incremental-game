import React, { Component } from 'react';

class Welcome extends Component {

  state = {
    username: '',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
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
    <div className="welcome">heeej
      <form onSubmit={this.handleUsername}>
          <label htmlFor="username">What shall we call u?</label>
          <input 
                  type="username"
                  className="form-control"
                  name="username"
                  id="username"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
                  onChange={this.handleChange}
                  value={this.state.username}
          />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
      );
    }
}


export default Welcome;