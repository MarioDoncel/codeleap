import React from 'react';
import { IPost } from '../../interfaces/User';
import DeleteContent from './DeleteContent';
import EditContent from './EditContent';

import { Container, Content } from './styles';

interface IModalProps {
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  editModal: boolean;
  deleteModal: boolean;
  post: IPost;
}

const Modal: React.FC<IModalProps> = ({
  setDeleteModal,
  setEditModal,
  deleteModal,
  editModal,
  post,
}) => {
  const handleDeletePost = () => {
    console.log(`Delete :${post.id}`);
  };

  return (
    <Container>
      <Content>
        {deleteModal && (
          <DeleteContent
            handleDeletePost={handleDeletePost}
            setDeleteModal={setDeleteModal}
          />
        )}
        {editModal && <EditContent post={post} setEditModal={setEditModal} />}
      </Content>
    </Container>
  );
};

export default Modal;
