import React from 'react';

import { Button, ButtonsContainer, Text } from './styles';

const DeleteContent: React.FC = () => {
  return (
    <>
      <Text>Are you sure you want to delete this item?</Text>
      <ButtonsContainer>
        <Button type="button">Cancel </Button>
        <Button type="button">OK </Button>
      </ButtonsContainer>
    </>
  );
};

export default DeleteContent;
