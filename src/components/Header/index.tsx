import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';

import { Container, IconsContainer } from './styles';

interface IHeaderProps {
  postOwner?: boolean;
  setDeleteModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setEditModal?: React.Dispatch<React.SetStateAction<boolean>>;
}
const defaultProps = {
  postOwner: false,
  setDeleteModal: () => undefined,
  setEditModal: () => undefined,
};
const Header: React.FC<IHeaderProps> = ({
  children,
  postOwner,
  setDeleteModal,
  setEditModal,
}) => {
  const handleClickDelete = () => {
    if (setDeleteModal) setDeleteModal(true);
  };
  const handleClickEdit = () => {
    if (setEditModal) setEditModal(true);
  };
  return (
    <Container>
      {children}
      {postOwner && (
        <IconsContainer>
          <MdDeleteForever
            className="cursor-pointer"
            onClick={handleClickDelete}
          />
          <BiEdit className="cursor-pointer" onClick={handleClickEdit} />
        </IconsContainer>
      )}
    </Container>
  );
};
Header.defaultProps = defaultProps;
export default Header;
