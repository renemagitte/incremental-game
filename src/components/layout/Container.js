import React from 'react';
import './../../App.css';

function Container(props) {
    return (
      <div className={ props.style }>
        { props.children }
      </div>
        
    );
}

export default Container;
