import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Modal, Input, Typography } from 'antd';

const BoardList = ({
  id,
  key,
  posts,
  visible,
  secondModalVisible,
  showModal,
  showSecondModal,
  closeModal,
  addPost,
  updatePost,
  deletePost,
  inputTitle,
  inputContent,
  title,
  content,
}) => {
  let getKey;
  const column = [
    { title: '번호', dataIndex: 'id', key: 'id' },
    { title: '제목', dataIndex: 'title', key: 'title' },
    { title: '작성일', dataIndex: 'createdDate', key: 'createdDate' },
    {
      title: '',
      dataIndex: '',
      key: '',
      render: () => (
        <Button type="danger" onClick={() => deletePost(getKey)}>
          Delete
        </Button>
      ),
    },
    {
      title: '',
      dataIndex: '',
      key: '',
      render: (column, { key, title, content }) => (
        <Button type="primary" onClick={() => showSecondModal({ key, title, content })}>
          Update
        </Button>
      ),
    },
  ];
  //   <Button type="primary" onClick={() => showSecondModal({ key, title, content })}>
  //   Update
  // </Button>;
  const newPost = {
    id,
    title,
    content,
  };

  return (
    <div className="boardList">
      <Table
        dataSource={posts}
        columns={column}
        expandedRowRender={record => <p>{record.content}</p>}
        pagination={{ pageSize: 20 }}
        onRow={record => ({
          onMouseEnter: () => {
            getKey = record.key;
          },
          onMouseLeave: () => {
            getKey = record.key;
          },
        })}
      />
      <Button type="primary" onClick={showModal}>
        새 글
      </Button>

      <Modal
        title={<Typography.Title level={2}>Create post</Typography.Title>}
        visible={visible}
        onOk={() => addPost(newPost)}
        onCancel={closeModal}
        okText="작성"
        cancelText="취소"
      >
        <Typography.Title level={4}>Title</Typography.Title>
        <Input value={title} placeholder="제목을 입력하세요." onChange={e => inputTitle(e.target.value, getKey)} />
        <Typography.Title level={4}>Content</Typography.Title>
        <Input.TextArea value={content} rows={6} placeholder="내용을 입력하세요." onChange={e => inputContent(e.target.value, getKey)} />
      </Modal>

      <Modal
        title={<Typography.Title level={2}>Update post</Typography.Title>}
        visible={secondModalVisible}
        onOk={() => updatePost({ key, title, content })}
        onCancel={closeModal}
        okText="수정"
        cancelText="취소"
      >
        <Typography.Title level={4}>Title</Typography.Title>
        <Input value={title} placeholder="제목을 입력하세요." onChange={e => inputTitle(e.target.value, key)} />
        <Typography.Title level={4}>Content</Typography.Title>
        <Input.TextArea value={content} rows={6} placeholder="내용을 입력하세요." onChange={e => inputContent(e.target.value, getKey)} />
      </Modal>
    </div>
  );
};

BoardList.propTypes = {
  id: PropTypes.number,
  key: PropTypes.string,
  posts: PropTypes.array,
  visible: PropTypes.bool,
  secondModalVisible: PropTypes.bool,
  showModal: PropTypes.func,
  showSecondModal: PropTypes.func,
  closeModal: PropTypes.func,
  addPost: PropTypes.func,
  deletePost: PropTypes.func,
  updatePost: PropTypes.func,
  inputTitle: PropTypes.func,
  inputContent: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default BoardList;
