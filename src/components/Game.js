import React, { Component } from 'react';
import './../App.css';

import Container from './layout/Container';
import UserInfo from './UserInfo';
import Soundtrack from './Soundtrack';
import Game_target from './Game_target';
import Game_stats from './Game_stats';
import Game_item from './Game_item';

import item1 from './../img/item1.png';
import item2 from './../img/item2.png';
import item3 from './../img/item3.png';
import item4 from './../img/item4.png';

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
    
    incrementSpecialInterval3000 = () => {
        setInterval(() => { 
            this.setState({ counter: this.state.counter + 1 });
        }, 3000); 
    }
    
    /**** Items ***/
    item1 = {
        name: 'Axe',
        level: 1,
        increments: 1,
        price: 10,
        priceIncrease: 2,
        purchasedAmount: 1,
        image: item1,
        cursor: 'item1'
    }

    item2 = {
        name: 'Axe Deodorant',
        level: 2,
        increments: 3,
        price: 20,
        priceIncrease: 10,
        purchasedAmount: 0,
        image: item2,
        cursor:'item2'
    }

    item3 = {
        name: 'Bow',
        level: 3,
        increments: 5,
        price: 40,
        priceIncrease: 20,
        purchasedAmount: 0,
        image: item3,
        cursor: 'item3'
    }

    item4 = {
        name: 'Sword',
        level: 4,
        increments: 10,
        price: 75,
        priceIncrease: 50,
        purchasedAmount: 0,
        image: item4,
        cursor: 'item4'
    }
 

    render() { 
        
        if(this.state.level == 1){
            let cursorArea = document.getElementById('root');
            cursorArea.classList.add('item1');
        }
        
        return (

            <Container style="game_Container" id="game_Container">

                    <Game_target style="game_target" incrementCounter={this.incrementCounter}
                                level={this.state.level}
                    />
   

                <Container style="game_panel">

                    <Container style="game_userinfo">
                        <UserInfo username={this.props.username}  />
                    </Container>
            
                    <Container style="game_soundtrack">
                        <Soundtrack level={this.state.level}  />
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
                                    incrementSpecialInterval3000={this.incrementSpecialInterval3000}

                        />

                        <Game_item style="game_item" 
                                    item={this.item3} 
                                    counter={this.state.counter} 
                                    setGameState={this.setGameState} 
                                    decrementCounter={this.decrementCounter} 
                        />

                        <Game_item style="game_item" 
                                    item={this.item4} 
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
