import React, { Component } from 'react';
import './../../App.css';
import App from './../../App.js';

import Container from './../layout/Container';
import WeaponItem from './WeaponItem';
import WeaponItemClass from './WeaponItemClass';
import WeaponItemClass2 from './WeaponItemClass2';

function WeaponList(props) {
    
    var axe = {
        item: 'Axe',
        price: 10,
        cursor: 'axeCursor',
        imgUrl: './../../img/axeCursor.png'   
    }
    
    var bow = {
        item: 'Bow',
        price: 20,
        cursor: 'bowCursor',
        imgUrl: './../../img/bowCursor.png'   
    }
    
    return (
        
        <Container style="weaponListWrapper">
            <WeaponItemClass price={10} item={'Axe'} cursor={'axeCursor'} toggleStartAt={0} imgUrl={'./../../img/axeCursor.png'} clicks={ props.clicks } withdrawClicks={ props.withdrawClicks } />
            <WeaponItemClass price={20} item={'Bow'} cursor={'bowCursor'} toggleStartAt={10} imgUrl={'./../../img/bowCursor.png'} clicks={ props.clicks } withdrawClicks={ props.withdrawClicks } />
            <WeaponItemClass price={30} item={'Sword'} cursor={'bowCursor'} toggleStartAt={20} imgUrl={'./../../img/bowCursor.png'} clicks={ props.clicks } withdrawClicks={ props.withdrawClicks } />
        
       { /* <WeaponItemClass2 itemInfo={axe} />
        <WeaponItemClass2 itemInfo={bow} /> */ }
        
        </Container>

    );
}

export default WeaponList;
