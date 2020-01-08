import { ADD_POST, UPDATE_POST, DELETE_POST } from '../actions/BoardActions';
import React from 'react';
import { Button } from 'antd';

const initState = {
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
  ]
}

export default function BoardReducer(state = initState, action) {
  switch(action.type) {
    case ADD_POST:
      return {
        ...state,
        post: state.post.concat({
          key: action.payload.key,
          title: <Button type="link">{action.payload.title}</Button>,
          content: action.payload.content,
          createdDate: new Date().getTime(),
        }),
      }
    case UPDATE_POST:
      return {
        ...state,
      }
    case DELETE_POST:
      return {
        ...state,
      }
    default:
      return {
        ...state,
      }
  }
}