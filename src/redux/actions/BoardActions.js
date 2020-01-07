import { createAction } from 'redux-actions'; 

export const ADD_POST = "ADD_POST"
export const UPDATE_POST = "UPDATE_POST"
export const DELETE_POST = "DELETE_POST"

export const addPost = createAction(ADD_POST, post => post);
export const updatePost = createAction(UPDATE_POST, post => post);
export const deletePost = createAction(DELETE_POST, post => post);


