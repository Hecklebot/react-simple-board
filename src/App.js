import React, { Children } from 'react';
import './App.css';
import BoardList from './components/BoardList';
import { connect } from 'react-redux';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import { showModal, closeModal, inputTitle, inputContent } from './redux/actions/ModalActions';
import { addPost } from './redux/actions/BoardActions';

const mapToStateToProps = state => {
  const { post } = state.BoardReducer;
  const { inputTitle, inputContent, visible, newPost } = state.ModalReducer;
  return {
    inputTitle,
    inputContent,
    post,
    visible,
    newPost,
  };
};

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
  showModal: () => dispatch(showModal()),
  closeModal: () => dispatch(closeModal()),
  inputTitle: title => dispatch(inputTitle(title)),
  inputContent: content => dispatch(inputContent(content)),
})

const App = ({ inputTitle, inputContent, post, visible, showModal, closeModal, addPost}) => {
  return (
    <div className="App">
      <Typography level={1}>Simple Board</Typography>
      <BoardList 
        post={post} 
        visible={visible} 
        showModal={showModal} 
        closeModal={closeModal}
        addPost={addPost}
        inputTitle={inputTitle}
        inputContent={inputContent}
      >
        {Children}
      </BoardList>
    </div>
  );
}

export default connect(mapToStateToProps, mapDispatchToProps)(App);
