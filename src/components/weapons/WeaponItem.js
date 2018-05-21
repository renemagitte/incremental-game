import React, { Component } from 'react';
import './../../App.css';
import App from './../../App.js';

import Container from './../layout/Container';

function WeaponItem(props) {
    
    return (
        
        <div class="weaponItem weaponItemInactive">
            { props.children }
        </div>

    );
}

export default WeaponItem;
