import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Modal, Input, Typography } from 'antd';

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

const BoardList = ({ post, visible, showModal, closeModal }) => {
  console.log(showModal, closeModal);
  return (
    <div className="boardList">
      <Table dataSource={post} columns={column} />
      <Button type="primary" onClick={showModal}>새 글</Button>

      <Modal
        title="Create post"
        visible={visible}
        onOk={closeModal}
        onCancel={closeModal}
        okButtonProps = {{ disabled: false }}
        cancelButtonProps = {{disabled: false }}
      >
        <Typography level={4}>Title</Typography>
        <Input type="text" placeholder="제목을 입력하세요." />
        <Typography level={4}>Content</Typography>
        <Input.TextArea rows={6} placeholder="내용을 입력하세요." />
      </Modal>
    </div>
  );
};

BoardList.propTypes = {
  post: PropTypes.array,
} 

export default BoardList;