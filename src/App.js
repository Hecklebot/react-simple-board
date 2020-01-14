import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import BoardList from './components/BoardList';
import * as actions from './redux/actions/BoardActions';

const mapToStateToProps = state => {
  const { id, isDetail, posts, title, content, visible, secondModalVisible } = state.BoardReducer;
  return {
    id,
    isDetail,
    posts,
    title,
    content,
    visible,
    secondModalVisible,
  };
};
// BoardList에서 쓰는 건 BoardList에서 받기?
const mapDispatchToProps = dispatch => ({
  appInit: posts => dispatch(actions.appInit(posts)),
  addPost: post => dispatch(actions.addPost(post)),
  updatePost: post => dispatch(actions.updatePost(post)),
  deletePost: () => dispatch(actions.deletePost()),
  showModal: () => dispatch(actions.showModal()),
  showSecondModal: payload => {
    dispatch(actions.showSecondModal(payload));
  },
  closeModal: () => dispatch(actions.closeModal()),
  inputTitle: payload => {
    dispatch(actions.inputTitle(payload));
  },
  inputContent: content => dispatch(actions.inputContent(content)),
  showUpdate: () => dispatch(actions.showUpdate()),
});

const App = ({
  id,
  key,
  isDetail,
  showUpdate,
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
      const { data } = result;
      if (data) {
        appInit(Object.values(data));
      }
    };

    fetchData();
  }, [appInit]);

  return (
    <div className="App">
      <Typography.Title level={1}>Simple Board</Typography.Title>
      <BoardList
        id={id}
        key={key}
        isDetail={isDetail}
        showUpdate={showUpdate}
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
};

App.propTypes = {
  id: PropTypes.number,
  key: PropTypes.string,
  appInit: PropTypes.func,
  inputTitle: PropTypes.func,
  inputContent: PropTypes.func,
  posts: PropTypes.array,
  visible: PropTypes.bool,
  secondModalVisible: PropTypes.bool,
  showModal: PropTypes.func,
  showSecondModal: PropTypes.func,
  closeModal: PropTypes.func,
  addPost: PropTypes.func,
  updatePost: PropTypes.func,
  deletePost: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  isDetail: PropTypes.bool,
  showUpdate: PropTypes.func,
};

export default connect(mapToStateToProps, mapDispatchToProps)(App);
