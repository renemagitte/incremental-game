import React, { Component } from 'react';
import './../App.css';

import Container from './layout/Container';
import Paragraph from './layout/Paragraph';




class GameItem extends Component {
    
    state = {
        name: '',
        level: 0, /* To determine whether an item shall be displayed or not, after bought once but balance is too low to buy again */
        increments: 0,
        price: 0,
        priceIncrease: 0,
        purchasedAmount: 0,
        image: '',
        cursor: '',
        nextMessage: ''
    }

    componentDidMount(){
        this.setState({ 
            name: this.props.item.name,
            level: this.props.item.level,
            increments: this.props.item.increments,
            special: this.props.item.special,
            price: this.props.item.price,
            priceIncrease: this.props.item.priceIncrease,
            purchasedAmount: this.props.item.purchasedAmount,
            image: this.props.item.image,
            cursor: this.props.item.cursor,
            nextMessage: this.props.item.nextMessage
        })
    }

    handlePurchase = (event) => {
        event.preventDefault();
//        this.handleCursor();
        this.decrementCounter();
        this.updateGameStates();
        this.checkForIncrementSpecials();
        this.props.setCursor(this.state.cursor);
        this.props.setMessage(this.state.nextMessage);
        this.props.setButtonText();
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
        if(this.state.name === 'Javascript'){
            this.props.setMatrix();
        }
    }
    
    handleCursor = (event) => {
        let cursorArea = document.getElementById('root');
        let regexCursorClass = /item\d/;
        cursorArea.classList.remove(regexCursorClass);
        let cursor = this.state.cursor;
        window.getComputedStyle(cursorArea).opacity;
        cursorArea.classList.add(cursor);
    }
    
    
    render() {
      
        let buyButton = '';
        if(this.props.counter >= this.state.price){
          buyButton = <button onClick={this.handlePurchase}
                             /* onClick={(event) => {  this.handlePurchase(); this.handleCursor(); }} */
          className="button">Buy</button>
        }
        
        
//        let gameItemStyle = "game_item";
//        if((this.state.level > 1 || this.state.purchasedAmount == 0) && ((this.props.counter+(this.state.price/3)) < this.state.price)){
//            gameItemStyle = "game_item game_item_inactive"
//        }
        
        let gameItemStyle = "game_item game_item_inactive";
        if((this.state.level === 1) || (this.state.purchasedAmount >= 1) || 
           ((this.state.purchasedAmount === 0) && (this.props.counter+(this.state.price*0.25)) > this.state.price)){
            gameItemStyle = "game_item";
        }
       

      
        return (

            <Container className={gameItemStyle}>
                <Container className="game_item_image">
                        <img src={ this.state.image } alt={this.state.name} />
                </Container>
                <Paragraph>Item: {this.state.name}</Paragraph>
                <Paragraph>Power: { this.state.increments } { this.state.special }</Paragraph>   
                <Paragraph>Price: {this.state.price} hits</Paragraph>
                <Paragraph>You have: {this.state.purchasedAmount}</Paragraph>
                <Paragraph>{ buyButton }</Paragraph>
            </Container>

        );
    }
}

export default GameItem;
