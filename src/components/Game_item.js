import React, { Component } from 'react';
import './../App.css';

import Container from './layout/Container';
import Paragraph from './layout/Paragraph';

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
        this.props.decrementCounter(this.state.price);
        this.setState({
            purchased: true,
            price: this.state.price + this.state.priceIncrease,
            purchasedAmount: this.state.purchasedAmount + 1
        })
    }

  render() {
      
      let buyButton = '';
      if(this.props.counter >= this.state.price){
          buyButton = <button onClick={this.handlePurchase}>Buy</button>
      }
      
    return (
        
        <Container>
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
