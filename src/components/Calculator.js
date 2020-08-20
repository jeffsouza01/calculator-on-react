import React from 'react';
import View from './View';
import Keyboard from './Keyboard';

import './style.css';

export default function Calculator() {
    return (
        <div id="calculator">
            <View />
            <Keyboard />
            <h1>Hello!!!</h1>
        </div>
    )
}