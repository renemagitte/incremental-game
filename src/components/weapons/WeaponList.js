import React, { Component } from 'react';
import './../../App.css';
import App from './../../App.js';

import Container from './../layout/Container';
import WeaponItem from './WeaponItem';
import WeaponItemClass from './WeaponItemClass';
import WeaponItemClass2 from './WeaponItemClass2';
import img1 from './../../img/bowCursor.png';

import axeCursor from './../../img/axeCursor.png';
import axeDeoCursor from './../../img/axeDeoCursor.png';
import bowCursor from './../../img/bowCursor.png';
import swordCursor from './../../img/swordCursor.png';
import shurikenCursor from './../../img/shurikenCursor.png';

function WeaponList(props) {
    
    var axe = {
        item: 'Axe',
        price: 10,
        cursor: 'axeCursor',
        imgUrl: axeCursor,
        toggleStartAt: 0,
    }
    
    var axeDeo = {
        item: 'Axe Deodorant',
        price: 20,
        cursor: 'axeDeoCursor',
        imgUrl: axeDeoCursor,
        toggleStartAt: 10,
    }
    
    var bow = {
        item: 'Bow',
        price: 20,
        cursor: 'bowCursor',
        imgUrl: bowCursor,
        toggleStartAt: 20,
    }
    
    var sword = {
        item: 'Sword',
        price: 30,
        cursor: 'swordCursor',
        imgUrl: swordCursor,
        toggleStartAt: 30,
    }
    
    var shuriken = {
        item: 'Shuriken',
        price: 40,
        cursor: 'shurikenCursor',
        imgUrl: shurikenCursor,
        toggleStartAt: 40,
    }
    
    return (
        
        <Container style="weaponListWrapper">
        
                { /*
            <WeaponItemClass price={10} item={'Axe'} cursor={'axeCursor'} toggleStartAt={0} imgUrl={ axeCursor } clicks={ props.clicks } withdrawClicks={ props.withdrawClicks } />
            <WeaponItemClass price={10} item={'Axe Deodorant'} cursor={'axeDeoCursor'} toggleStartAt={10} imgUrl={axeDeoCursor} clicks={ props.clicks } withdrawClicks={ props.withdrawClicks } axeDeoSpecial={ props.axeDeoSpecial }/>
            <WeaponItemClass price={20} item={'Bow'} cursor={'bowCursor'} toggleStartAt={20} imgUrl={bowCursor} clicks={ props.clicks } withdrawClicks={ props.withdrawClicks } />
            <WeaponItemClass price={30} item={'Sword'} cursor={'swordCursor'} toggleStartAt={30} imgUrl={swordCursor} clicks={ props.clicks } withdrawClicks={ props.withdrawClicks } />
              */ }
 
        

            <WeaponItemClass weapon={axe} withdrawClicks={ props.withdrawClicks } clicks={ props.clicks } />
            <WeaponItemClass weapon={axeDeo} withdrawClicks={ props.withdrawClicks } axeDeoSpecial={ props.axeDeoSpecial } clicks={ props.clicks }/>
            <WeaponItemClass weapon={bow} withdrawClicks={ props.withdrawClicks } clicks={ props.clicks } />
            <WeaponItemClass weapon={sword} withdrawClicks={ props.withdrawClicks } clicks={ props.clicks } />
            <WeaponItemClass weapon={shuriken} withdrawClicks={ props.withdrawClicks } clicks={ props.clicks } />
        
        </Container>

    );
}

export default WeaponList;
