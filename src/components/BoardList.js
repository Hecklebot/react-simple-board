import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Modal, Input, Typography } from 'antd';

const column = [
  {title: '번호', dataIndex: 'key', key: 'id',},
  {title: '제목', dataIndex: 'title', key: 'title',},
  {title: '내용', dataIndex: 'content', key: 'content',},
  {title: '작성일', dataIndex: 'createdDate', key: 'createdDate',},
]


const BoardList = ({ post, visible, showModal, closeModal, addPost, inputTitle, inputContent, title, content }) => {
  const newPost = {
    title,
    content,
  }
  return (
    <div className="boardList">
      <Table dataSource={post} columns={column} />
      <Button type="primary" onClick={showModal}>새 글</Button>

      <Modal
        title={<Typography.Title level={2}>Create post</Typography.Title>}
        visible={visible}
        onOk={() => addPost(newPost)}
        onCancel={closeModal}
        okButtonProps = {{ disabled: false }}
        cancelButtonProps = {{ disabled: false }}
        okText = "작성"
        cancelText = "취소"
        destroyOnClose = {true}
      >
        <Typography.Title level={4}>Title</Typography.Title>
        <Input value={title} placeholder="제목을 입력하세요." onChange={(e) => inputTitle(e.target.value)} />
        <Typography.Title level={4}>Content</Typography.Title>
        <Input.TextArea value={content} rows={6} placeholder="내용을 입력하세요." onChange={(e) => inputContent(e.target.value)} />
      </Modal>
    </div>
  );
};

BoardList.propTypes = {
  post: PropTypes.array,
} 

export default BoardList;