import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addData(data) {
  const postsData = yield axios.get(`https://react-simple-board.firebaseio.com/post.json`);
  const getData = postsData.data;
  // const uuidv1 = require('uuid/v1');
  const putData = {
    id: getData === null ? 1 : Object.values(getData)[Object.values(getData).length - 1].id + 1,
    key: new Date().getTime(),
    title: data.payload.title,
    content: data.payload.content,
    createdDate: new Date().getTime(),
  }
  yield axios.put(`https://react-simple-board.firebaseio.com/post/${putData.key}.json`, putData);
  // yield put ({type: 'ADD_POST', payload: putData});
}

function* deleteData(key) {
  console.log(key)
  yield axios.delete(`https://react-simple-board.firebaseio.com/post/${key.payload}.json`)
}

export default function* watch() {
  yield takeEvery('ADD_POST', addData);
  yield takeEvery('DELETE_POST', deleteData)
}