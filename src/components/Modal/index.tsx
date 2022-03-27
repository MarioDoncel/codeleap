import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { deletePost } from '../../actions/Mutations/deletePost';
import { IPost } from '../../interfaces/User';
import { popError } from '../../utils/popError';
import { popSuccess } from '../../utils/popSuccess';
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
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deletePost);
  const handleDeletePost = () => {
    mutate(
      { id: post.id },
      {
        onSuccess: () => {
          popSuccess('Post deleted');
          queryClient.invalidateQueries('posts');
          setDeleteModal(false);
        },
        onError: () => {
          popError(
            'An error has ocurred when deleting post, please try again or contact our support team'
          );
        },
      }
    );
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
