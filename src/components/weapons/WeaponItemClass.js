import React, { Component } from 'react';
import './../../App.css';
import App from './../../App.js';

import Container from './../layout/Container';

class WeaponItem extends Component {
    
    state = {
        item: '',
        price: 0
    }

handleCursor = (event) => {
    let cursorArea = document.getElementById('root');
    let cursor = this.props.cursor;
//    cursorArea.classList.add('axeCursor');
    cursorArea.classList.add(cursor);
}

componentDidMount(){

        this.setState({ item: this.props.item, price: this.props.price  });

}

 render(){   
    return (
        
        <div className="weaponItem" onClick={this.handleCursor}>
            Item: { this.props.item }
            Price: { this.props.price }
        </div>

    );
 }
}

export default WeaponItem;
