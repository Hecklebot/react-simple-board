import { createAction } from 'redux-actions'; 

export const ADD_POST = "ADD_POST"
export const UPDATE_POST = "UPDATE_POST"
export const DELETE_POST = "DELETE_POST"
export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const INPUT_TITLE = 'INPUT_TITLE';
export const INPUT_CONTENT = 'INPUT_CONTENT';

export const addPost = createAction(ADD_POST, post => post);
export const updatePost = createAction(UPDATE_POST, post => post);
export const deletePost = createAction(DELETE_POST, post => post);

export const showModal = createAction(SHOW_MODAL);
export const closeModal = createAction(CLOSE_MODAL);
export const inputTitle = createAction(INPUT_TITLE, title => title);
export const inputContent = createAction(INPUT_CONTENT, content => content);