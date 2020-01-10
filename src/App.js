import React, { Children, useEffect } from 'react';
import './App.css';
import BoardList from './components/BoardList';
import { connect } from 'react-redux';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import { appInit, addPost, showModal, closeModal, inputTitle, inputContent } from './redux/actions/BoardActions';
import axios from 'axios';
import PropTypes from 'prop-types';

const mapToStateToProps = state => {
  const { id, isLoading, posts, title, content, visible } = state.BoardReducer;
  return {
    id,
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

const App = ({ id, appInit, inputTitle, inputContent, posts, visible, showModal, closeModal, addPost, title, content }) => {

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://react-simple-board.firebaseio.com/post.json');
      const data = result.data;
      if(data !== null) {
        appInit(Object.values(data));
      };

    };
    
    fetchData();
  }, [appInit]);
  return (
    <div className="App">
      <Typography.Title level={1}>Simple Board</Typography.Title>
      <BoardList
        id={id}
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

App.propTypes = {
  id: PropTypes.number,
  appInit: PropTypes.func,
  inputTitle: PropTypes.func,
  inputContent: PropTypes.func,
  posts: PropTypes.array,
  visible: PropTypes.bool,
  showModal: PropTypes.func,
  closeModal: PropTypes.func,
  addPost: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default connect(mapToStateToProps, mapDispatchToProps)(App);
