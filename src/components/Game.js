import React, { Component } from 'react';
import './../App.css';

import Container from './layout/Container';
import UserInfo from './UserInfo';
import Game_target from './Game_target';
import Game_stats from './Game_stats';
import Game_item from './Game_item';


class Game extends Component {
    
    state = {
        /* Game state */
        counter: 0,
        itemsAvailable: 1,
        
        /* Current item */
        name: '',
        increments: 1
    }

    /**** Functions ***/
    setItem = (name, increments) => {
        this.setState({ 
            name: name,
            increments: increments
        })
    }

    incrementCounter = () => {
        this.setState({ counter: this.state.counter + this.state.increments})
    }
    
    decrementCounter = (price) => {
        this.setState({ counter: this.state.counter - price})
    }
    
    /**** Items ***/
    item1 = {
        name: 'item1',
        increments: 1,
        price: 10,
        priceIncrease: 2,
        purchased: false,
        purchasedAmount: 0,
        image: ''
    }

    item2 = {
        name: 'item2',
        increments: 5,
        price: 20,
        priceIncrease: 10,
        purchased: false,
        purchasedAmount: 0,
        image: ''
    }
 

    render() {
         
      
        return (

            <Container>

                <Container>
                    <UserInfo username={this.props.username}  />
                </Container>

                <Container>
                    <Game_stats counter={this.state.counter} />
                </Container>
            
                <Container>
                    <Game_target incrementCounter={this.incrementCounter} />
                </Container>

                <Container>
                    <Game_item counter={this.state.counter} item={this.item1} 
                                setItem={this.setItem} decrementCounter={this.decrementCounter}
                    />
                    <Game_item counter={this.state.counter} item={this.item2} 
                                setItem={this.setItem} decrementCounter={this.decrementCounter} 
                    />
                </Container>

            </Container>


        );
  }
}

export default Game;
