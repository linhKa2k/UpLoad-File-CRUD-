import { combineReducers } from 'redux';
import itemsReducer from './reducer'
export default combineReducers({
    itemReducer: itemsReducer
});