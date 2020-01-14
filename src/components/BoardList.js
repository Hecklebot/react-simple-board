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
  // const getPost = posts.find(item => item.key === getKey);

  const column = [
    { title: '번호', dataIndex: 'id', key: 'id' },
    { title: '제목', dataIndex: 'title', key: 'title' },
    { title: '작성일', dataIndex: 'createdDate', key: 'createdDate' },
  ];

  const newPost = {
    id,
    title,
    content,
    createdDate: new Date().getTime(),
  };

  return (
    <div className="boardList">
      <Table
        dataSource={posts}
        columns={column}
        pagination={{ pageSize: 20 }}
        expandRowByClick
        onRow={record => ({
          onMouseEnter: () => {
            getKey = record.key;
          },
          onMouseLeave: () => {
            getKey = record.key;
          },
          onClick: () => {
            showSecondModal(getKey);
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
        title={<Typography.Title level={2}>post detail</Typography.Title>}
        visible={secondModalVisible}
        footer={[
          <Button
            type="primary"
            onClick={e => {
              const value = {
                key: getKey,
                title,
                content,
              };
              e.stopPropagation();
              updatePost(value);
            }}
          >
            Update
          </Button>,
          <Button
            type="danger"
            onClick={e => {
              e.stopPropagation();
              deletePost(getKey);
              closeModal();
            }}
          >
            Delete
          </Button>,
          <Button
            onClick={() => {
              closeModal();
            }}
          >
            close
          </Button>,
        ]}
        onCancel={closeModal}
        // onOk={() => updatePost({ key, title, content })}
        // okText="수정"
        // cancelText="취소"
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
