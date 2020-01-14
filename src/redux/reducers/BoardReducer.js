import {
  APP_INIT,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  SHOW_MODAL,
  CLOSE_MODAL,
  INPUT_TITLE,
  INPUT_CONTENT,
  SHOW_SECOND_MODAL,
  SHOW_UPDATE,
} from '../actions/BoardActions';

const initState = {
  key: 0,
  id: 1,
  isDetail: true,
  visible: false,
  secondModalVisible: false,
  title: '',
  content: '',
  posts: [],
};

export default function BoardReducer(state = initState, action) {
  const getIndex = state.posts.findIndex(item => item.key === state.key);
  const findValue = state.posts.find(item => item.key === action.payload);
  switch (action.type) {
    case APP_INIT:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
      };

    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          id: state.posts.length === 0 ? 1 : state.posts[state.posts.length - 1].id + 1,
          key: action.payload.createdDate,
          title: state.title,
          content: state.content,
          createdDate: new Date().toString().substring(3, 21),
        }),
        id: state.id + 1,
        title: '',
        content: '',
        visible: false,
      };

    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.fill(
          {
            id: state.posts[getIndex].id,
            key: state.posts[getIndex].key,
            title: action.payload.title,
            content: action.payload.content,
            createdDate: state.posts[getIndex].createdDate,
          },
          getIndex,
          getIndex + 1,
        ),
        secondModalVisible: false,
        title: '',
        content: '',
        isDetail: true,
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(item => item.key !== state.key),
        secondModalVisible: false,
        isDetail: true,
      };

    case SHOW_MODAL:
      return {
        ...state,
        visible: true,
      };

    case SHOW_SECOND_MODAL:
      return {
        ...state,
        key: action.payload,
        secondModalVisible: true,
        title: findValue.title,
        content: findValue.content,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        visible: false,
        secondModalVisible: false,
        isDetail: true,
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

    case SHOW_UPDATE:
      return {
        ...state,
        isDetail: false,
      };
    default:
      return {
        ...state,
      };
  }
}
