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
        clicks: this.props.clicks,
        toggleStartAt: 0,
        level: 0
    }

    handlePurchase = (event) => {
        

        if(this.props.clicks >= this.state.price){

            this.withdrawClicks();     
            this.increasePrice();
//            this.toggleBuyButton();
            this.handleCursor();
            this.setLevel();
            
                    if(this.props.weapon.item == 'Axe Deodorant'){
                        alert("Better than pepperspray? Let's try!")
                        this.props.axeDeoSpecial();
                    }
                        
        }else{
            alert("Whahaha get some more points first will you!")
        }
    }
    
    withdrawClicks = () => {
      this.props.withdrawClicks(this.state.price); 
    }
    
    setLevel = () => {
      this.props.setLevel(this.state.level); 
    }
    
    increasePrice = () => {
        this.setState({ price: this.state.price + 2 }); // detta värde ska vara props, ej hårdkodat
    }

    handleCursor = (event) => {
        let cursorArea = document.getElementById('root');
        let cursor = this.props.weapon.cursor;
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




    componentDidMount(){

            this.setState({ item: this.props.item, price: this.props.weapon.price, toggleStartAt: this.props.toggleStartAt, clicks: this.props.clicks, level: this.props.weapon.level  });

    }

    render(){ 
         let weaponItemClass = "weaponItem weaponItemInactive";
//         if(this.props.clicks > 0){
         if(this.props.clicks >= this.props.weapon.toggleStartAt){
             weaponItemClass = "weaponItem";
         }

//         console.log(this.props.clicks);
//        
//        let purchaseButton = <button onClick={this.toggleClass}>Buy</button>
//        if(!this.stated.purchase)
//     
    return (

         
        <div className={weaponItemClass} id={ this.state.item }>
            <div className="weaponItemImg"><img src={ this.props.weapon.imgUrl } /> </div>
            <div>
                Item: { this.props.weapon.item } <br />
                Price: { this.state.price } <br />
            </div>

            {!this.state.purchased && <button onClick={this.handlePurchase} >Buy</button>}

        </div>
    
        
        

    );
 }
}

export default WeaponItem;
