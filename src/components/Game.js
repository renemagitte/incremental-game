import React, { Component } from 'react';
import './../App.css';

import Container from './layout/Container';
import UserInfo from './UserInfo';
import Soundtrack from './Soundtrack';
import GameTarget from './GameTarget';
import GameMessage from './GameMessage';
import GameStats from './GameStats';
import GameItem from './GameItem';
import Matrix from './Matrix';

import item1 from './../img/item1.png';
import item2 from './../img/item2.png';
import item3 from './../img/item3.png';
import item4 from './../img/item4.png';
import item5 from './../img/item5.png';
import item6 from './../img/item6.png';
import item7 from './../img/item7.png';
import item8 from './../img/item8.png';

class Game extends Component {
    
    state = {
        /* Game state */
        counter: 0,
        level: 1, /* decides whether items shall be displayed or not */
        
        /* Current item */
        increments: 1,
        cursor: 'item1',
        message: 'Okk... eh, what are YOU doin\' here? I really don\'t understand, man. You could have made an appearance on any single place on earth and you still showed up here? I can\'t believe it, you\'re really just too much! What have you got there anyways? Is that an axe? What do you take me for? A f***ing chopping block? You woodenhead!',
        buttonText: 'Answer: - Umm... okay...'
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
    
    setCursor = (cursor) => {
        this.setState({ cursor: cursor });
    }
    
    setMessage = (text) => {
        this.setState({ message: text });
    }
    
    setButtonText = () => {
        let buttonText = Math.floor((Math.random() * 5) + 1);
        
        switch(buttonText) {
            case 1:
                this.setState({ buttonText: "Answer: - idk" });
                break;
            case 2:
                this.setState({ buttonText: "Answer: - Umm okay..." });
                break;
            case 3:
                this.setState({ buttonText: "Answer: - Oh shut up Croesus!" });
                break;
            case 4:
                this.setState({ buttonText: "Answer: - This is 100% stupid" });
                break;
            case 5:
                this.setState({ buttonText: "Answer: - This is 100% stupid" });
                break;
        }
    }
    
    closeMessage = () => {
        this.setState({ message: '' });
    }
    
    /**** Items ***/
    item1 = {
        name: 'Axe',
        level: 1,
        increments: 100,
        special: '',
        price: 10,
        priceIncrease: 2,
        purchasedAmount: 1,
        image: item1,
        cursor: 'item1',
        nextMessage: "Okk... eh, what are YOU doin' here? I really don't understand, man. You could have made an appearance on any single place on earth and you still showed up here? I can't believe it, you're really just too much! What have you got there anyways? Is that an axe? What do you take me for? A f***ing chopping block? You woodenhead!"
    }

    item2 = {
        name: 'Axe 2.0',
        level: 2,
        increments: 3,
        special: ' + autohits',
        price: 20,
        priceIncrease: 10,
        purchasedAmount: 0,
        image: item2,
        cursor:'item2',
        nextMessage: "Ugh, this is worse than I thought! You acctually bought that in a super market, didn't you?"
    }

    item3 = {
        name: 'Sword',
        level: 3,
        increments: 5,
        special: '',
        price: 40,
        priceIncrease: 20,
        purchasedAmount: 0,
        image: item3,
        cursor: 'item3',
        nextMessage: "I just called the Gucci headquarters and asked them deliver a gallon of their finest scent. You simply can't win over me. Hey, I just made up this rhyme for you: You've got a sword - it makes me feel bored."
    }

    item4 = {
        name: 'Bow',
        level: 4,
        increments: 10,
        special: '',
        price: 75,
        priceIncrease: 50,
        purchasedAmount: 0,
        image: item4,
        cursor: 'item4',
        nextMessage: "Cupid? Enough with this BS! Just admit it allready, you're in love with me! Yes, that must be it! That's why you're still here! Call John Bowlby immediatley someone! We have an alarmingly interersting case here!"
    }

    item5 = {
        name: 'Shuriken',
        level: 5,
        increments: 20,
        special: '',
        price: 100,
        priceIncrease: 75,
        purchasedAmount: 0,
        image: item5,
        cursor: 'item5',
        nextMessage: "Two men walked into a bar... oh what's the use... plus, I pressume we've allready got a joke here: your life! He he hehehehhihiihahahaahoho."
    }

    item6 = {
        name: 'Revolver',
        level: 6,
        increments: 100,
        special: '',
        price: 500,
        priceIncrease: 100,
        purchasedAmount: 0,
        image: item6,
        cursor: 'item6',
        nextMessage: "So you're going to shoot me now? Uhh, I'm SO scared! Yes, I am being sarcastic thank you very much."
    }

    item7 = {
        name: 'Bomb',
        level: 7,
        increments: 200,
        special: '',
        price: 1000,
        priceIncrease: 500,
        purchasedAmount: 0,
        image: item7,
        cursor: 'item7',
        nextMessage: "I acctually getting a bit tired now. You are really persistent you know."
    }

    item8 = {
        name: 'Javascript',
        level: 8,
        increments: 500,
        special: '',
        price: 1200,
        priceIncrease: 500,
        purchasedAmount: 0,
        image: item8,
        cursor: 'item8',
        nextMessage: "WTF just happened to me???"
    }

    render() { 
        
        let gameContainerStyle = "game_Container ";
        gameContainerStyle += this.state.cursor;
        
        let targetView;
        if(!this.props.matrix){
            targetView = <React.Fragment>
                            <GameMessage level={this.state.level}
                                        message={this.state.message} 
                                        buttonText={this.state.buttonText}                      
                                        closeMessage={this.closeMessage} 
                            />
                            <GameTarget incrementCounter={this.incrementCounter}
                                        level={this.state.level} 
                                        setCursorHideShow={this.setCursorHideShow}
                            />
                        </React.Fragment>
        }else{
            targetView = <Matrix setWin={this.props.setWin} />
        }
        
        return (
            

            <Container className={gameContainerStyle} id="game_Container">
                    
                <Container className="game_target">

                        { targetView }

                </Container>
            
                <Container className="game_panel">
            
                        <Soundtrack level={this.state.level}  matrix={this.props.matrix} />

                        <UserInfo username={this.props.username} matrix={this.props.matrix} />
            
                    <Container className="game_stats">
                        <GameStats counter={this.state.counter} />
                    </Container>

                    <Container className="game_itemscontainer" >

                        <GameItem   item={this.item1}
                                    counter={this.state.counter} 
                                    setGameState={this.setGameState} 
                                    decrementCounter={this.decrementCounter}
                                    setCursor={this.setCursor}
                                    setMessage={this.setMessage}
                                    setButtonText={this.setButtonText}
    
                        />

                        <GameItem   item={this.item2} 
                                    counter={this.state.counter} 
                                    setGameState={this.setGameState} 
                                    decrementCounter={this.decrementCounter} 
                                    incrementSpecialInterval3000={this.incrementSpecialInterval3000}
                                    setCursor={this.setCursor}
                                    setMessage={this.setMessage}
                                    setButtonText={this.setButtonText}
                        />

                        <GameItem   item={this.item3} 
                                    counter={this.state.counter} 
                                    setGameState={this.setGameState} 
                                    decrementCounter={this.decrementCounter} 
                                    setCursor={this.setCursor}
                                    setMessage={this.setMessage}
                                    setButtonText={this.setButtonText}
                        />

                        <GameItem   item={this.item4} 
                                    counter={this.state.counter} 
                                    setGameState={this.setGameState} 
                                    decrementCounter={this.decrementCounter} 
                                    setCursor={this.setCursor}
                                    setMessage={this.setMessage}
                                    setButtonText={this.setButtonText}
                        />
            
                        <GameItem   item={this.item5}
                                    counter={this.state.counter} 
                                    setGameState={this.setGameState} 
                                    decrementCounter={this.decrementCounter}
                                    setCursor={this.setCursor}
                                    setMessage={this.setMessage}
                                    setButtonText={this.setButtonText}
                    />
            
                        <GameItem   item={this.item6}
                                    counter={this.state.counter} 
                                    setGameState={this.setGameState} 
                                    decrementCounter={this.decrementCounter}
                                    setCursor={this.setCursor}
                                    setMessage={this.setMessage}
                                    setButtonText={this.setButtonText}
                        />
            
                        <GameItem   item={this.item7}
                                    counter={this.state.counter} 
                                    setGameState={this.setGameState} 
                                    decrementCounter={this.decrementCounter}
                                    setCursor={this.setCursor}
                                    setMessage={this.setMessage}
                                    setButtonText={this.setButtonText}
                        />
            
                        <GameItem   item={this.item8} 
                                    counter={this.state.counter} 
                                    setGameState={this.setGameState} 
                                    decrementCounter={this.decrementCounter}
                                    setCursor={this.setCursor}
                                    setMessage={this.setMessage}
                                    setButtonText={this.setButtonText}
                                    setMatrix={this.props.setMatrix}
                        />

                    </Container>

            </Container>

        </Container>


        );
  }
}

export default Game;
