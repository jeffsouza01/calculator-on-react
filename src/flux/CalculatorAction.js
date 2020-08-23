import {appDispatcher} from './AppDispatcher';

export function viewUpdate (oldValue, holdValue, clearDisplayOnNextOperation, decimalEntryMode) {
    let newValue = holdValue;

    if (!clearDisplayOnNextOperation) {
        oldValue = parseFloat(oldValue);
        holdValue = parseFloat(holdValue);

        if (!decimalEntryMode) {
            newValue = (oldValue*10) + holdValue;
        } else {
            newValue = oldValue + holdValue / Math.pow(10, decimalsValues(oldValue)+1)
        }
    } else {
        setClearValueToNextAction(false);
    }

    appDispatcher.dispatch({type:Action.VIEW_REFRSH, value:newValue})
}

export function executeMathOperation(currentOperation, memoryOperation, viewValue, memoryValue) {
    debugger
    let result = viewValue;
    viewValue = parseFloat(viewValue);
    memoryValue = parseFloat(memoryValue)
    appDispatcher.dispatch({type:Action.CLEAR_OPERATION}) 
    setDecimalEntryMode(false);

    if(currentOperation !== '=') {
        appDispatcher.dispatch({type:Action.SET_OPERATION, value: currentOperation})
    }

    if (memoryOperation) {
        switch(memoryOperation) {
            case ('+'):
                result = viewValue + memoryValue;
                break;
            case ('-'):
                result = viewValue - memoryValue;
                break;
            case ('*'):
                result = viewValue * memoryValue;
                break;
            case ('/'):
                result = viewValue / memoryValue;
                break;
            default:
                break;

        }
    }

    appDispatcher.dispatch({type:Action.SAVE_VALUE, value:result});
    blink(result);
    setClearValueToNextAction(true);
}

export function setDecimalEntryMode(value) {
    appDispatcher.dispatch({type:Action.ENTER_DECIMAIS_DIGITS, value:value})
}

export function setClearValueToNextAction(value) {
    appDispatcher.dispatch({type:Action.CLEAR_VALUE_TO_NEXT_ACTION, value:value})
}

export function setView(value) {
    appDispatcher.dispatch({ type:Action.VIEW_REFRESH,value:value})
}

export function reset(){
    appDispatcher.dispatch({type:Action.SAVE_VALUE,value:0});
    appDispatcher.dispatch({type:Action.CLEAR_OPERATION});
    blink(0)
}


export function blink(value) {
    setView('')
    setTimeout(() => setView(value), 100)
}


function decimalsValues(value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
}