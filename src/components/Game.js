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
        level: 1, /* decides whether items shall be displayed or not */
        
        /* Current item */
        increments: 1
    }

    /**** Functions ***/
    setGameState = (increments, level) => {
        this.setState({ 
            increments: increments
        })
        
        if(this.state.level < level){
            this.setState({ 
                level: level,
            })
        }

    }
    
    incrementCounter = () => {
        this.setState({ counter: this.state.counter + this.state.increments })
    }
    
    decrementCounter = (price) => {
        this.setState({ counter: this.state.counter - price })
    }
    
    incrementSpecial = () => {
            alert("Get free click every 3rd second"); 
        setInterval(() => { 
            this.setState({ clicks: this.state.clicks + 1 });
        }, 3000); 
    }
    
    /**** Items ***/
    item1 = {
        name: 'item1',
        level: 1,
        increments: 1,
        price: 10,
        priceIncrease: 2,
        purchased: true,
        purchasedAmount: 1,
        image: ''
    }

    item2 = {
        name: 'item2',
        level: 2,
        increments: 3,
        price: 20,
        priceIncrease: 10,
        purchased: false,
        purchasedAmount: 1,
        image: ''
    }

    item3 = {
        name: 'item3',
        level: 3,
        increments: 5,
        price: 40,
        priceIncrease: 20,
        purchased: false,
        purchasedAmount: 1,
        image: ''
    }
 

    render() {   
        
        return (

            <Container style="game_Container">

                <Container style="game_target">
                    <Game_target incrementCounter={this.incrementCounter}
                                level={this.state.level}
                />
            </Container>

            <Container style="game_panel">

                <Container style="game_userinfo">
                    <UserInfo username={this.props.username}  />
                </Container>

                <Container style="game_stats">
                    <Game_stats counter={this.state.counter} />
                </Container>

                <Container style="game_itemscontainer">

                    <Game_item style="game_item" 
                                item={this.item1} 
                                counter={this.state.counter} 
                                setGameState={this.setGameState} 
                                decrementCounter={this.decrementCounter}
                    />

                    <Game_item style="game_item" 
                                item={this.item2} 
                                counter={this.state.counter} 
                                setGameState={this.setGameState} 
                                decrementCounter={this.decrementCounter} 
                                
                    />
            
                    <Game_item style="game_item" 
                                item={this.item3} 
                                counter={this.state.counter} 
                                setGameState={this.setGameState} 
                                decrementCounter={this.decrementCounter} 
                    />

                </Container>

            </Container>

        </Container>


        );
  }
}

export default Game;
