import { SHOW_MODAL, CLOSE_MODAL } from '../actions/ModalActions';

const initState = {
  visible: false,
}

export default function ModalReducer(state = initState, action) {
  switch(action.type) {
    case SHOW_MODAL: 
      return {
        ...state,
        visible: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        visible: false,
      }
    default:
      return {
        ...state,
      }
  };
};