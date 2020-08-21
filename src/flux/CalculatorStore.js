import EventEmmiter from 'events';
import Action from './Constants';
import { appDispatcher } from './AppDispatcher';
const change = 'change';

let store = {
    displayValue: 0,
    lastResult: 0,
    clearView: false,
    operations: undefined,
    decimalEntryMode: false,
}

class CalculatorStore extends EventEmmiter {

    getDisplayValue() {
        return store.displayValue;
    }

    setDisplayValue(value) {
        store.displayValue = value;
        this.emit(change);
    }

    getLastResult() {
        return store.lastResult;
    }

    setLastResult(value) {
        store.lastResult = value;
        this.emit(change);
    }

    getClearView() {
        return store.clearView;
    }

    setClearView(value) {
        store.clearView = value;
        this.emit(change);
    }

    getOperations() {
        return store.operations;
    }

    setOperations(value) {
        store.operations = value;
        this.emit(change);
    }

    getDecimalEntryMode() {
        return store.decimalEntryMode;
    }

    setDecimalEntryMode(value) {
        store.decimalEntryMode = value;
        this.emit(change)
    }

    getState() {
        return store
    }

    handleActions(action){
        switch(action.type){
            case Action.VIEW_REFRESH:
                this.setDisplayValue(action.value);
                break;
            case Action.ENTER_DECIMAIS_DIGITS:
                this.setDecimalEntryMode(action.value);
                break;
            case Action.SAVE_VALUE:
                this.setLastResult(action.value);
                break;
            case Action.CLEAR_OPERATION:
                this.setOperations(undefined);
                break;
            case Action.CLEAR_VIEW:
                this.setDisplayValue('')
                break;
            case Action.CLEAR_VALUE_TO_NEXT_ACTION:
                this.setClearView(action.value);
                break;
            case Action.SET_OPERATION:
                this.setOperations(action.value);
                break;
            default:
                break;
        }
    }

}

export const calculatorStore = new CalculatorStore();
appDispatcher.register(calculatorStore.handleActions.bind(calculatorStore));
