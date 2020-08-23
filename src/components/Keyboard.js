import React from 'react';
import Button from './Button';

export default class Keyboard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
    return (
        <div id="keyboard">
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="c"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="+/-"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="%"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="/"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="7"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="8"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="9"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="*"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="4"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="5"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="6"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="+"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="1"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="2"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="3"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="-"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="0"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="."/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="pi"/>
            <Button memoryValue={this.props.memoryValue} lastOperation={this.props.operations} displayValue={this.props.displayValue} clearToNextOperation={this.props.clearView}
                       decimalEntryMode={this.props.decimalEntryMode} value="="/>
        </div>
    )
}}