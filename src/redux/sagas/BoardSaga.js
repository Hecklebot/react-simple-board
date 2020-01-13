import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

let getKey;

function* addData(data) {
  const postsData = yield axios.get(`https://react-simple-board.firebaseio.com/post.json`);
  const getData = postsData.data;
  // const uuidv1 = require('uuid/v1');
  const putData = {
    id: !getData ? 1 : Object.values(getData)[Object.values(getData).length - 1].id + 1,
    key: data.payload.createdDate,
    title: data.payload.title,
    content: data.payload.content,
    createdDate: new Date().toString().substring(3, 21),
  };
  yield axios.put(`https://react-simple-board.firebaseio.com/post/${putData.key}.json`, putData);

  // 임시 데이터 넣기
  // for (let i = 1; i < 50; i += 1) {
  //   yield axios.put(`https://react-simple-board.firebaseio.com/post/${putData.key + i}.json`, {
  //     id: i,
  //     key: new Date().getTime(),
  //     title: `${i} temp title`,
  //     content: `${i} temp content`,
  //     createdDate: new Date().toString().substring(3, 21),
  //   });
  // }
}
function* updateData(post) {
  yield axios.patch(`https://react-simple-board.firebaseio.com/post/${getKey}.json`, { title: post.payload.title, content: post.payload.content });
}

function* deleteData(key) {
  yield axios.delete(`https://react-simple-board.firebaseio.com/post/${key.payload}.json`);
}

function getSecondModalValue(post) {
  getKey = post.payload.key;
}

export default function* watch() {
  yield takeEvery('ADD_POST', addData);
  yield takeEvery('DELETE_POST', deleteData);
  yield takeEvery('UPDATE_POST', updateData);
  yield takeEvery('SHOW_SECOND_MODAL', getSecondModalValue);
}
