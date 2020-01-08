export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const INPUT_TITLE = 'INPUT_TITLE';
export const INPUT_CONTENT = 'INPUT_CONTENT';

export const showModal = () => ({type: SHOW_MODAL});
export const closeModal = () => ({type: CLOSE_MODAL});
export const inputTitle = (title) => ({type: INPUT_TITLE, title});
export const inputContent = (content) => ({type: INPUT_CONTENT, content});