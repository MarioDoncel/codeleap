import React, { useState } from 'react';

import { IPost, IUser } from '../../interfaces/User';
import Header from '../Header';
import Modal from '../Modal';

import { Container, Content, Info, Text } from './styles';

interface IPostProps {
  post: IPost;
  user: IUser;
}

const Post: React.FC<IPostProps> = ({ post, user }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <>
      <Container>
        <Header
          postOwner={post?.username === user?.name}
          setDeleteModal={setShowDeleteModal}
          setEditModal={setShowEditModal}
        >
          {post.title}{' '}
        </Header>
        <Content>
          <Info>
            <span>{`@${post.username}`}</span>
            <span className="text-center">{post.created_datetime}</span>
          </Info>
          <Text>{post.content}</Text>
        </Content>
      </Container>
      {(showDeleteModal || showEditModal) && (
        <Modal
          post={post}
          editModal={!!showEditModal}
          deleteModal={!!showDeleteModal}
          setDeleteModal={setShowDeleteModal}
          setEditModal={setShowEditModal}
        />
      )}
    </>
  );
};

export default Post;
