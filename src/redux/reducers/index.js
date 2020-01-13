import { combineReducers } from 'redux';
import BoardReducer from './BoardReducer';

const RootReducer = combineReducers({
  BoardReducer,
});

export default RootReducer;
