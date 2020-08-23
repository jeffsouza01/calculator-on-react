import React from 'react';
import View from './View';
import Keyboard from './Keyboard';

import { calculatorStore } from '../flux/CalculatorStore';

import './style.css';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = calculatorStore.getState();
    }
    
    componentWillMount() {
        calculatorStore.on('change', () => {
            this.setState(calculatorStore.getState())
        })
    }
    
    render(){
        
        return (
            <div id="calculator">
            <View value={this.state.displayValue}/>
            <Keyboard memoryValue={this.state.lastResult}
                     lastOperation={this.state.operations} 
                     displayValue ={this.state.displayValue} 
                     clearToNextOperation={this.state.clearView}
                     decimalEntryMode={this.state.decimalEntryMode}/>
        </div>
        )
    }
}