import React, { Component } from 'react';
import './../../App.css';
import App from './../../App.js';

import Container from './../layout/Container';

class WeaponItem extends Component {
    
    state = {
        item: '',
        price: 0,
        purchased: false,
        toggle: false,
        clicks: 0,
        toggleStartAt: 0
    }

    handleCursor = (event) => {
        let cursorArea = document.getElementById('root');
        let cursor = this.props.cursor;
    //    cursorArea.classList.add('axeCursor');
        cursorArea.classList.add(cursor);
    }

    toggleClass = () => {
//        if(this.state.toggle){
            this.setState({ toggle: !this.state.toggle });
//        }
      };

    toggleBuyButton = () => {
//        if(this.state.toggle){
            this.setState({ purchased: !this.state.purchased });
//        }
      };

    withdrawClicks = () => {
      this.props.withdrawClicks(this.state.price); 
    }

    componentDidMount(){

            this.setState({ item: this.props.item, price: this.props.price, toggleStartAt: this.props.toggleStartAt, clicks: this.props.clicks  });

    }

    render(){ 
         let weaponItemClass = "weaponItem weaponItemInactive";
//         if(this.props.clicks > 0){
         if(this.props.clicks >= this.state.toggleStartAt){
             weaponItemClass = "weaponItem";
         }

//         console.log(this.props.clicks);
//        
//        let purchaseButton = <button onClick={this.toggleClass}>Buy</button>
//        if(!this.stated.purchase)
//     
    return (
        
        


        <div className={weaponItemClass} id={ this.state.item }>

            <img src={require('./../../img/axeCursor.png')}/> 
           { /* <img src={ this.props.imgUrl } /> */ }
            Item: { this.props.item }
            Price: { this.props.price }

            {!this.state.purchased && <button onClick={(event) => {  this.handleCursor(); this.withdrawClicks();}}>Buy</button>}

        </div>

    );
 }
}

export default WeaponItem;
