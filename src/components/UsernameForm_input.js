import React from 'react';
import './../App.css';

function UsernameForm_label(props) {
    return (
        
          <input 
                  type="username"
                  className="form-control"
                  name="username"
                  id="username"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
                  onChange={props.onChange}
                  value={props.username}
          />
        
    );
}

export default UsernameForm_label;
