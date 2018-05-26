import React, { Component } from 'react';
import './../App.css';

import Container from './layout/Container';
import UserInfo from './UserInfo';


class Game_item extends Component {
    
    state = {
        name: '',
        increments: 1,
        price: 0,
        priceIncrease: 0,
        purchased: false,
        purchasedAmount: 0,
        image: ''
    }



    
    componentDidMount(){
        this.setState({ 
            name: this.props.item.name,
            increments: this.props.item.increments,
            price: this.props.item.price,
            priceIncrease: this.props.item.priceIncrease,
            purchased: this.props.item.purchased,
            purchasedAmount: this.props.item.purchasedAmount,
            image: this.props.item.image
        })
    }

    setItem = () => {
      this.props.setItem(this.state.name, this.state.increments); 
    }
    
    handlePurchase = () => {
        this.setState({
            purchased: true,
            price: this.state.price + this.state.priceIncrease,
            purchasedAmount: this.state.purchasedAmount + 1
        })
        
        this.props.decrementCounter(this.state.price);
        
    }

  render() {
      
      let buyButton = '';
      if(this.props.counter > this.state.price){
          buyButton = <button onClick={this.handlePurchase}>Buy</button>
      }
      
    return (
        
        <p>
            Image: ^_^<br />
            Item: {this.state.name}<br/>
            Price: {this.state.price}<br />
            Purchased: {this.state.purchased ? 'Yes' : 'No'}<br />
            If yes, then how many: {this.state.purchasedAmount}<br /> 
            { buyButton }
        </p>
        
    );
  }
}

export default Game_item;
