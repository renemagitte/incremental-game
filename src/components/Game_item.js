import React, { Component } from 'react';
import './../App.css';

import Container from './layout/Container';
import Paragraph from './layout/Paragraph';

import item1 from './../img/item1.png';



class Game_item extends Component {
    
    state = {
        name: '',
        level: 0, /* To determine whether an item shall be displayed or not, after bought once but balance is too low to buy again */
        increments: 0,
        price: 0,
        priceIncrease: 0,
        purchasedAmount: 0,
        image: '',
    }

    componentDidMount(){
        this.setState({ 
            name: this.props.item.name,
            level: this.props.item.level,
            increments: this.props.item.increments,
            price: this.props.item.price,
            priceIncrease: this.props.item.priceIncrease,
            purchasedAmount: this.props.item.purchasedAmount,
            image: this.props.item.image
        })
    }

    handlePurchase = () => {
        this.decrementCounter();
        this.updateGameStates();
        this.handleCursor();
        this.checkForIncrementSpecials();
    }
    
    updateGameStates = () => {
        this.setState(
            /* Updates local state: */
            {
                price: this.state.price + this.state.priceIncrease,
                purchasedAmount: this.state.purchasedAmount + 1,
            }, 
            /* Updates state in Game calculated on updated local state: */
            this.props.setGameState((this.state.increments*(this.state.purchasedAmount+1)), (this.state.level + 1)) /*level? nja?*/
        );   
    }
    
    decrementCounter = () => {
        this.props.decrementCounter(this.state.price);
    }
    
    checkForIncrementSpecials = () => { 
        if(this.props.incrementSpecialInterval3000){
            this.props.incrementSpecialInterval3000();
        }   
    }
    
    handleCursor = (event) => {
        let cursorArea = document.getElementById('root');
        let cursor = this.state.name;
        cursorArea.classList.add(cursor);
    }
    
    
    render() {
      
        let buyButton = '';
        if(this.props.counter >= this.state.price){
          buyButton = <button onClick={this.handlePurchase}
                             /* onClick={(event) => {  this.handlePurchase(); this.handleCursor(); }} */
          className="button">Buy</button>
        }
        
        
        let gameItemStyle = "game_item";
        if((this.state.level > 1 || this.state.purchasedAmount == 0) && ((this.props.counter+(this.state.price/3)) < this.state.price)){
            gameItemStyle = "game_item game_item_inactive"
        }
       

      
        return (

            <Container style={gameItemStyle}>
                <Paragraph><img src={ this.state.image } /></Paragraph>
                <Paragraph>Item: {this.state.name}</Paragraph>
                <Paragraph>Price: {this.state.price}</Paragraph>
                <Paragraph>If yes, then how many: {this.state.purchasedAmount}</Paragraph>
                <Paragraph>{ buyButton }</Paragraph>
            </Container>

        );
    }
}

export default Game_item;
