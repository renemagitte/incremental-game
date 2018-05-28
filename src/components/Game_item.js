import React, { Component } from 'react';
import './../App.css';

import Container from './layout/Container';
import Paragraph from './layout/Paragraph';

class Game_item extends Component {
    
    state = {
        name: '',
        level: 0, /* To determine whether an item shall be displayed or not, after bought once but balance is too low to buy again */
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
            level: this.props.item.level,
            increments: this.props.item.increments,
            price: this.props.item.price,
            priceIncrease: this.props.item.priceIncrease,
            purchased: this.props.item.purchased,
            purchasedAmount: this.props.item.purchasedAmount,
            image: this.props.item.image
        })
    }

    handlePurchase = () => {
        this.props.decrementCounter(this.state.price);
        this.setState({
            purchased: true,
            price: this.state.price + this.state.priceIncrease,
            purchasedAmount: this.state.purchasedAmount + 1
        })
        this.props.setGameState(this.state.increments, this.state.level)
    }

    
    
    
    
    render() {
      
      let buyButton = '';
      if(this.props.counter >= this.state.price){
          buyButton = <button onClick={this.handlePurchase}>Buy</button>
      }
      
    return (
        
        <Container style="game_item">
            <Paragraph>Image: ^_^</Paragraph>
            <Paragraph>Item: {this.state.name}</Paragraph>
            <Paragraph>Price: {this.state.price}</Paragraph>
            <Paragraph>Purchased: {this.state.purchased ? 'Yes' : 'No'}</Paragraph>
            <Paragraph>If yes, then how many: {this.state.purchasedAmount}</Paragraph>
            <Paragraph>{ buyButton }</Paragraph>
        </Container>
        
    );
  }
}

export default Game_item;
