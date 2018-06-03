import React from 'react';
import './../../App.css';

function Container(props) {
    return (
      <div className={ props.className } >
        { props.children }
      </div>
        
    );
}

export default Container;
