import { combineReducers } from 'redux';
import BoardReducer from './BoardReducer';
import ModalReducer from './ModalReducer';

const RootReducer = combineReducers({
  BoardReducer,
  ModalReducer,
});

export default RootReducer;