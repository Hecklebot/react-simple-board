import React, { Children, useEffect } from 'react';
import './App.css';
import BoardList from './components/BoardList';
import { connect } from 'react-redux';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import { appInit, addPost, showModal, closeModal, inputTitle, inputContent } from './redux/actions/BoardActions';
import axios from 'axios';

const mapToStateToProps = state => {
  const { isLoading, posts, title, content, visible } = state.BoardReducer;
  return {
    isLoading,
    posts,
    title,
    content,
    visible,
  };
};

const mapDispatchToProps = dispatch => ({
  appInit: posts => dispatch(appInit(posts)),
  addPost: post => dispatch(addPost(post)),
  showModal: () => dispatch(showModal()),
  closeModal: () => dispatch(closeModal()),
  inputTitle: title => dispatch(inputTitle(title)),
  inputContent: content => dispatch(inputContent(content)),
})

const App = ({ appInit, inputTitle, inputContent, posts, visible, showModal, closeModal, addPost, title, content }) => {

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://react-simple-board.firebaseio.com/post.json');
      const data = result.data;
      appInit(Object.values(data));
    };
    
    fetchData();
  }, [appInit]);
  console.log(posts)
  return (
    <div className="App">
      <Typography.Title level={1}>Simple Board</Typography.Title>
      <BoardList
        posts={posts} 
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
