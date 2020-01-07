import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Modal } from 'antd';

const column = [
  {
    title: '번호',
    dataIndex: 'key',
    key: 'id',
  },
  {
    title: '제목',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '작성일',
    dataIndex: 'createdDate',
    key: 'createdDate',
  },
]

const BoardList = ({ post, showModal, closeModal }) => {
  console.log(showModal, closeModal);
  return (
    <div className="boardList">
      <Table dataSource={post} columns={column} />
      <Button type="primary" onClick={showModal}>새 글</Button>

      <Modal
        title="Create post"
        visible={false}
        okButtonProps = {{ disabled: true}}
        cancelButtonProps = {{disabled: false}}
      >
        <input type="text" placeholder="제목을 입력하세요."></input>
        <input type="text" placeholder="내용을 입력하세요."></input>
      </Modal>
    </div>
  );
};

BoardList.propTypes = {
  post: PropTypes.array,
} 

export default BoardList;