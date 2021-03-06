import { createAction } from 'redux-actions';

export const APP_INIT = 'APP_INIT';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const SHOW_MODAL = 'SHOW_MODAL';
export const SHOW_SECOND_MODAL = 'SHOW_SECOND_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const INPUT_TITLE = 'INPUT_TITLE';
export const INPUT_CONTENT = 'INPUT_CONTENT';
export const SHOW_UPDATE = 'SHOW_UPDATE';

export const appInit = createAction(APP_INIT, posts => posts);
export const addPost = createAction(ADD_POST, post => post);
export const updatePost = createAction(UPDATE_POST, key => key);
export const deletePost = createAction(DELETE_POST, key => key);

export const showModal = createAction(SHOW_MODAL);
export const showSecondModal = createAction(SHOW_SECOND_MODAL);
export const showUpdate = createAction(SHOW_UPDATE);
export const closeModal = createAction(CLOSE_MODAL);
export const inputTitle = createAction(INPUT_TITLE, title => title);
export const inputContent = createAction(INPUT_CONTENT, content => content);
