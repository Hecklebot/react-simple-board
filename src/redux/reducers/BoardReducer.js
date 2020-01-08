import { ADD_POST, UPDATE_POST, SHOW_MODAL, CLOSE_MODAL, INPUT_TITLE, INPUT_CONTENT } from '../actions/BoardActions';
import React from 'react';
import { Button } from 'antd';

let id = 4;
const initState = {
  visible: false,
  title2: '',
  content2: '',
  posts : [
    {
      key: 1,
      title: <Button type="link">tempTitle0</Button>,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis semper risus, non vestibulum velit sollicitudin ac. Nulla et molestie ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam fringilla erat id tortor consequat venenatis. Vestibulum scelerisque ex ac finibus bibendum. Pellentesque ac mi at libero tempor molestie. Mauris aliquet nibh arcu, sit amet sollicitudin elit elementum a. Curabitur luctus nunc non pretium pretium. Mauris vehicula erat vel risus vestibulum, ac interdum nisl efficitur. Donec hendrerit efficitur est. Sed viverra neque at porta elementum. Nulla facilisi.',
      createdDate: '2020-01-07 16:45'
    },
    {
      key: 2,
      title: <Button type="link">tempTitle1</Button>,
      content: 'Aenean auctor purus sit amet lacus dignissim tristique nec in metus. Nullam nec arcu nisl. Nam posuere, velit at malesuada efficitur, eros orci consectetur neque, in ultrices diam libero non ex. Ut posuere luctus rhoncus. Mauris justo tortor, pellentesque a lacinia in, pulvinar eu magna. Sed id neque arcu. Ut pretium, nisi in mattis faucibus, velit diam interdum turpis, sed sollicitudin elit magna a ipsum. Fusce ut ullamcorper sapien. Duis augue mauris, suscipit et erat vitae, ultricies fermentum eros.',
      createdDate: '2020-01-07 16:45',
    },
    {
      key: 3,
      title: <Button type="link">tempTitle2</Button>,
      content: 'Aliquam neque orci, rutrum sit amet tempor sit amet, sodales ac orci. Integer vitae sem nec mauris interdum volutpat eget sed sapien. Morbi vel nulla eleifend, interdum massa ut, consequat augue. Nullam facilisis tempor ultrices. Cras vitae mollis nisl. Vivamus sed leo lorem. Suspendisse fermentum lacus nibh. Nullam eu magna semper sem ornare porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus risus sem, tincidunt sed dolor sit amet, pellentesque tempor turpis. Donec faucibus vitae diam a facilisis.',
      createdDate: '2020-01-07 16:45',
    },
  ],
}

export default function BoardReducer(state = initState, action) {
  switch(action.type) {
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