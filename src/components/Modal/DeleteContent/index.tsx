import React from 'react';

import { Button, ButtonsContainer, Text } from './styles';

interface IDeleteContentProps {
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleDeletePost: () => void;
}
const DeleteContent: React.FC<IDeleteContentProps> = ({
  setDeleteModal,
  handleDeletePost,
}) => {
  return (
    <>
      <Text>Are you sure you want to delete this item?</Text>
      <ButtonsContainer>
        <Button type="button" onClick={() => setDeleteModal(false)}>
          Cancel
        </Button>
        <Button type="button" onClick={handleDeletePost}>
          OK
        </Button>
      </ButtonsContainer>
    </>
  );
};

export default DeleteContent;
