import React, { Children } from 'react';
import './App.css';
import BoardList from './components/BoardList';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { showModal, closeModal } from './redux/actions/ModalActions';

const mapToStateToProps = state => {
  console.log(state);
  const { post } = state.BoardReducer;
  const { visible } = state.ModalReducer;
  return {
    post,
    visible,
  };
};

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showModal()),
  closeModal: () => dispatch(closeModal()),
})


const App = ({ post, visible, showModal, closeModal }) => {
  return (
    <div className="App">
      <div>Simple Board</div>
      <BoardList post={post} visible={visible} showModal={showModal} closeModal={closeModal}>{Children}</BoardList>
    </div>
  );
}

export default connect(mapToStateToProps, mapDispatchToProps)(App);
