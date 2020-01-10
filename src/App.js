import React, { useEffect } from 'react';
import './App.css';
import BoardList from './components/BoardList';
import { connect } from 'react-redux';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import { appInit, addPost, updatePost, deletePost, showModal, showSecondModal, closeModal, inputTitle, inputContent } from './redux/actions/BoardActions';
import axios from 'axios';
import PropTypes from 'prop-types';

const mapToStateToProps = state => {
  const { id, isLoading, posts, title, content, visible, secondModalVisible } = state.BoardReducer;
  return {
    id,
    isLoading,
    posts,
    title,
    content,
    visible,
    secondModalVisible,
  };
};

const mapDispatchToProps = dispatch => ({
  appInit: posts => dispatch(appInit(posts)),
  addPost: post => dispatch(addPost(post)),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: key => dispatch(deletePost(key)),
  showModal: () => dispatch(showModal()),
  showSecondModal: () => dispatch(showSecondModal()),
  closeModal: () => dispatch(closeModal()),
  inputTitle: title => dispatch(inputTitle(title)),
  inputContent: content => dispatch(inputContent(content)),
})

const App = ({ 
  id,
  appInit,
  inputTitle,
  inputContent,
  posts,
  visible,
  secondModalVisible,
  showModal,
  showSecondModal,
  closeModal,
  addPost,
  updatePost,
  deletePost,
  title,
  content,
}) => {

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://react-simple-board.firebaseio.com/post.json');
      const data = result.data;
      if(data) {
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
        secondModalVisible={secondModalVisible}
        showModal={showModal}
        showSecondModal={showSecondModal}
        closeModal={closeModal}
        addPost={addPost}
        updatePost={updatePost}
        deletePost={deletePost}
        inputTitle={inputTitle}
        inputContent={inputContent}
        title={title}
        content={content}
      />
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
