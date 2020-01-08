import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* appInit() {
  yield axios.get(`https://react-simple-board.firebaseio.com/post.json`).then(res => appInit(res.data));
}

function* addData() {
  const uuidv1 = require('uuid/v1');
  const tempPost = {
    id: uuidv1(),
    title: 'hello',
    content: 'Lorem ipsum dolor sit amet,',
    createdDate: new Date().getTime(),
  }
  yield axios.put(`https://react-simple-board.firebaseio.com/post/${new Date().getTime()}.json`, tempPost);
}

export default function* watch() {
  yield takeEvery('APP_INIT', appInit);
  yield takeEvery('ADD_POST', addData);
}