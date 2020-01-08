import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addData(post) {
  
}

export default function* watch() {
  yield takeEvery('ADD_POST', addData);
}