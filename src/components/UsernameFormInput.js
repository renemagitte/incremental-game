import React from 'react';
import './../App.css';

function UsernameFormInput(props) {
    return (
        
          <input 
                  type="username"
                  name="username"
                  id="username"
                  aria-describedby="username"
                  placeholder="Enter username"
                  onChange={props.onChange}
                  value={props.username}
          />
        
    );
}

export default UsernameFormInput;
