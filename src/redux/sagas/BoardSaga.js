import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addData(data) {
  const uuidv1 = require('uuid/v1');
  const putData = {
    key: uuidv1().substring(0,8),
    title: data.payload.title,
    content: data.payload.content,
    createdDate: new Date().getTime(),
  }
  yield axios.put(`https://react-simple-board.firebaseio.com/post/${putData.key}.json`, putData);
}

export default function* watch() {
  yield takeEvery('ADD_POST', addData);
}