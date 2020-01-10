import { APP_INIT, ADD_POST, UPDATE_POST, DELETE_POST, SHOW_MODAL, CLOSE_MODAL, INPUT_TITLE, INPUT_CONTENT } from '../actions/BoardActions';

const initState = {
  id: 1,
  visible: false,
  title: '',
  content: '',
  posts: [],
}

export default function BoardReducer(state = initState, action) {
  const uuidv1 = require('uuid/v1');
  switch(action.type) {
    case APP_INIT:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
      };
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          id: state.posts[state.posts.length - 1].id + 1,
          key: uuidv1().substring(0,8),
          title: state.title,
          content: state.content,
          createdDate: new Date().getTime(),
        }),
        id: state.id + 1,
        title: '',
        content: '',
        visible: false,
      };

    case UPDATE_POST:
      return {
        ...state,
      };
    
    case DELETE_POST:
      return  {
        ...state,
        posts: state.posts.filter(item => item.key !== parseInt(action.payload)),
      };
    case SHOW_MODAL:
      return {
        ...state,
        visible: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        visible: false,
        title: '',
        content: '',
      };

    case INPUT_TITLE:
      return {
        ...state,
        title: action.payload,
      };

    case INPUT_CONTENT:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return {
        ...state,
      }
  }
}