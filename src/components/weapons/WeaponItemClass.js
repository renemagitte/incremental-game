import React, { Component } from 'react';
import './../../App.css';
import App from './../../App.js';

import Container from './../layout/Container';

class WeaponItem extends Component {
    
    state = {
        item: '',
        price: 0,
        toggle: false,
        clicks: 0
    }

handleCursor = (event) => {
    let cursorArea = document.getElementById('root');
    let cursor = this.props.cursor;
//    cursorArea.classList.add('axeCursor');
    cursorArea.classList.add(cursor);
}

toggleClass = () => {
    this.setState({ toggle: !this.state.toggle });
  };

componentDidMount(){

        this.setState({ item: this.props.item, price: this.props.price, clicks: this.props.clicks  });

}

 render(){ 
     let weaponItemClass = "weaponItem weaponItemInactive";
     if(this.state.toggle){
         weaponItemClass = "weaponItem";
     }
    
    return (
        
        
        <div className={weaponItemClass} onClick={(event) => {  this.handleCursor(); this.toggleClass();}} id={ this.props.item }>
        
{ /* onClick={this.handleCursor} */ }


            <img src={require('./../../img/axeCursor.png')}/> 
           { /* <img src={ this.props.imgUrl } /> */ }
            Item: { this.props.item }
            Price: { this.props.price }
        </div>

    );
 }
}

export default WeaponItem;
