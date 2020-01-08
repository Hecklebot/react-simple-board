import React, { Children } from 'react';
import './App.css';
import BoardList from './components/BoardList';
import { connect } from 'react-redux';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import { addPost, showModal, closeModal, inputTitle, inputContent } from './redux/actions/BoardActions';

const mapToStateToProps = state => {
  const { post, title, content, visible, newPost } = state.BoardReducer;
  return {
    post,
    title,
    content,
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

const App = ({ inputTitle, inputContent, post, visible, showModal, closeModal, addPost, title, content}) => {
  return (
    <div className="App">
      <Typography.Title level={1}>Simple Board</Typography.Title>
      <BoardList 
        post={post} 
        visible={visible} 
        showModal={showModal} 
        closeModal={closeModal}
        addPost={addPost}
        inputTitle={inputTitle} // function
        inputContent={inputContent} // function
        title={title} // string 
        content={content} // string
      >
        {Children}
      </BoardList>
    </div>
  );
}

export default connect(mapToStateToProps, mapDispatchToProps)(App);
