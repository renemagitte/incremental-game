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
    
//    if(this.state.clicks < 20){
//          let axe = document.getElementById('axe');
//          axe.classList.remove('weaponItemInactive');
//      }
    
    
}

componentDidMount(){

        this.setState({ item: this.props.item, price: this.props.price  });

}

 render(){ 
     
     let imgUrl = this.props.imgUrl;
    
    return (
        
        
        <div className="weaponItem weaponItemInactive" onClick={this.handleCursor} id={ this.props.itemInfo.item }>
        { /* <img src={require('./../../img/axeCursor.png')}/> */ }
        <img src={ this.props.itemInfo.imgUrl } />
            Item: { this.props.itemInfo.item }
            Price: { this.props.itemInfo.price }
        </div>

    );
 }
}

export default WeaponItem;
