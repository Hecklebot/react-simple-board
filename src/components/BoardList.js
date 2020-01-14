import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Modal, Input, Typography } from 'antd';

const BoardList = ({
  id,
  isDetail,
  showUpdate,
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
        pagination={{ pageSize: 10 }}
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

      <Modal title={<Typography>Create post</Typography>} visible={visible} onOk={() => addPost(newPost)} onCancel={closeModal} okText="작성" cancelText="취소">
        <Typography>Title</Typography>
        <Input value={title} placeholder="제목을 입력하세요." onChange={e => inputTitle(e.target.value)} />
        <Typography>Content</Typography>
        <Input.TextArea value={content} rows={6} placeholder="내용을 입력하세요." onChange={e => inputContent(e.target.value, getKey)} />
      </Modal>

      <Modal
        title={<Typography>post detail</Typography>}
        visible={secondModalVisible}
        footer={
          isDetail ? (
            <Button type="primary" onClick={() => showUpdate()}>
              수정
            </Button>
          ) : (
            [
              <Button
                type="primary"
                onClick={() => {
                  const value = {
                    key: getKey,
                    title,
                    content,
                  };
                  updatePost(value);
                }}
              >
                Update
              </Button>,
              <Button type="danger" onClick={() => deletePost()}>
                Delete
              </Button>,
            ]
          )
        }
        onCancel={closeModal}
      >
        {isDetail ? (
          <div>
            <Typography>Title</Typography>
            <p>{title}</p>
            <Typography>Content</Typography>
            <p>{content}</p>
          </div>
        ) : (
          <div>
            <Typography>Title</Typography>
            <Input value={title} placeholder="제목을 입력하세요." onChange={e => inputTitle(e.target.value)} />
            <Typography>Content</Typography>
            <Input.TextArea value={content} rows={6} placeholder="내용을 입력하세요." onChange={e => inputContent(e.target.value)} />
          </div>
        )}
      </Modal>
    </div>
  );
};

BoardList.propTypes = {
  id: PropTypes.number,
  isDetail: PropTypes.bool,
  showUpdate: PropTypes.func,
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
