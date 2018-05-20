import React, { Component } from 'react';
import './../../App.css';
import App from './../../App.js';

import Container from './../layout/Container';
import WeaponItem from './WeaponItem';
import WeaponItemClass from './WeaponItemClass';

function WeaponList(props) {
    return (
        
        <Container style="weaponListWrapper">
            <WeaponItemClass price={10} item={'Axe'} cursor={'axeCursor'} />
            <WeaponItemClass price={20} item={'Bow'} cursor={'bowCursor'}/>
            <WeaponItemClass price={30} item={'Sword'}/>
        
        </Container>

    );
}

export default WeaponList;
