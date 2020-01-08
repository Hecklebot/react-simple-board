import { APP_INIT, ADD_POST, UPDATE_POST, SHOW_MODAL, CLOSE_MODAL, INPUT_TITLE, INPUT_CONTENT } from '../actions/BoardActions';
import React from 'react';
import { Button } from 'antd';

let id = 4;
const initState = {
  visible: false,
  title2: '',
  content2: '',
  posts : [],
}

export default function BoardReducer(state = initState, action) {
  switch(action.type) {
    case APP_INIT:
      console.log(action.payload);
      return{
        ...state,
        posts: state.posts.concat(action.payload),
      }
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          key: id++,
          title: <Button type="link">{state.title}</Button>,
          content: state.content,
          createdDate: new Date().getTime(),
        }),
        title: '',
        content: '',
        visible: false,
      };

    case UPDATE_POST:
      return {
        ...state,
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