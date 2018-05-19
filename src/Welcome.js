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
    /**
     * Always prevent the form from submitting, event is always present.
     */
    event.preventDefault();
    if(this.state.username){
      /**
       * This function is passed down from <App /> and will be called inside of <App />
       * this function will not be executed inside of LoginForm, it will be executed
       * inside of <App />
       */
      this.props.handleUsername(this.state.username);
    } else {
      this.setState({ error: "Wrong email or password!" });
    }
    
  }

  render() {

    return (
    <div className="welcome">heeej
      <form onSubmit={this.handleUsername}>
          <label htmlFor="username">Username</label>
          <input 
                  type="username"
                  className="form-control"
                  name="username"
                  id="username"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
                  onChange={this.handleUsername}
                  value={this.state.username}
          />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
      );
    }
}


export default Welcome;