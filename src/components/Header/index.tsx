import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';

import { Container, IconsContainer } from './styles';

interface IHeaderProps {
  postOwner?: boolean;
}
const defaultProps = {
  postOwner: false,
};
const Header: React.FC<IHeaderProps> = ({ children, postOwner }) => (
  <Container>
    {children}
    {postOwner && (
      <IconsContainer>
        <MdDeleteForever className="cursor-pointer" />
        <BiEdit className="cursor-pointer" />
      </IconsContainer>
    )}
  </Container>
);
Header.defaultProps = defaultProps;
export default Header;
