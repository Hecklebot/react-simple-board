import { ADD_POST, UPDATE_POST, DELETE_POST, SHOW_MODAL, CLOSE_MODAL, INPUT_TITLE, INPUT_CONTENT } from '../actions/BoardActions';
import React from 'react';
import { Button } from 'antd';

let id = 4;
const initState = {
  visible: false,
  title2: '',
  content2: '',
  post : [
    {
      key: 1,
      title: <Button type="link">tempTitle0</Button>,
      content: 'tempContent0',
      createdDate: '2020-01-07 16:45'
    },
    {
      key: 2,
      title: <Button type="link">tempTitle1</Button>,
      content: 'tempContent1',
      createdDate: '2020-01-07 16:45',
    },
    {
      key: 3,
      title: <Button type="link">tempTitle2</Button>,
      content: 'tempContent2',
      createdDate: '2020-01-07 16:45',
    },
  ],
}

export default function BoardReducer(state = initState, action) {
  switch(action.type) {
    case ADD_POST:
      console.log(action)
      return {
        ...state,
        post: state.post.concat({
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

    case DELETE_POST:
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
      console.log(action.payload, state.title2)
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