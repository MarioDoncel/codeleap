import React from 'react';
import DeleteContent from './DeleteContent';

import { Container, Content } from './styles';

const Modal: React.FC = () => {
  return (
    <Container>
      <Content>
        <DeleteContent />
      </Content>
    </Container>
  );
};

export default Modal;
