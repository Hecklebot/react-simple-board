import { SHOW_MODAL, CLOSE_MODAL, INPUT_TITLE, INPUT_CONTENT } from '../actions/ModalActions';

const initState = {
  visible: false,
  inputTitle: '',
  inputContent: '',
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
        inputTitle: '',
        inputContent: '',
      };
    case INPUT_TITLE:
      console.log('inputTitle', action.title);
      return {
        ...state,
        inputTitle: action.title,
      };
    case INPUT_CONTENT:
      console.log('inputContent', action.content);
      return {
        ...state,
        inputContent: action.content,
      };
    default:
      return {
        ...state,
      };
  };
};