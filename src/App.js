import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome.js';
import Main from './Main.js';
import Container from './components/layout/Container';
import ContainerHalf from './components/layout/ContainerHalf';
import NameField from'./NameField';
import CounterField from'./CounterField';
import VoleFunction from'./components/VoleFunction';
import Vole from './components/Vole';
import WeaponItem from'./components/weapons/WeaponItem';
import WeaponList from'./components/weapons/WeaponList';

class App extends Component {
    
    state = {
        loggedIn: false,
        username: '',
        clicks: 0
    }

  handleUsername = (username) => {
    this.setState({ loggedIn: true, username: username });
  }
  
    handleClick = (clicks) => {
        this.setState({ clicks: this.state.clicks + 1 });
      }
    
    withdrawClicks = (clicks) => {
        this.setState({ clicks: this.state.clicks - clicks });  
    }
    
    axeDeoSpecial = () => {
            alert("Get free click every 5th second"); 
        setInterval(() => { 
            this.setState({ clicks: this.state.clicks + 1 });
        }, 5000); 
    }



checkLevel = () => {
    if(this.state.clicks < 20){
        console.log("Level 1");
        let axe = document.getElementById('Axe');
//        axe.classList.remove('weaponItemInactive');
    }else if(this.state.clicks > 20){
        console.log("Level 2");
    }else if(this.state.clicks > 30){
        console.log("Level 3");
    }
}

 
  render() {
      
      this.checkLevel();
      
        let view = <Welcome handleUsername={this.handleUsername}/>;
        if(this.state.loggedIn){
          view = <Container style="container">
                    <ContainerHalf style="containerHalf">
          
                        <Vole onClick={ this.handleClick }/>
                    </ContainerHalf>        
                    <ContainerHalf style="containerHalf">
                { /* props.username */ }
            { /* <div> <NameField username={props.username} /></div> */ }
                        <NameField username={ this.state.username } />
                        <CounterField clicks={ this.state.clicks } />
                        <WeaponList clicks={ this.state.clicks } withdrawClicks={ this.withdrawClicks } axeDeoSpecial={ this.axeDeoSpecial } />


                </ContainerHalf>

                    </Container>;
              
              /* <Main username={ this.state.username } />; */
        }
      
      
      
         
    return (
        
        <Container style="container">
        { view }
        </Container>
        
    );
  }
}

export default App;
