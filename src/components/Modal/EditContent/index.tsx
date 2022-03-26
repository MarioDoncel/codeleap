import React from 'react';
import { IPost } from '../../../interfaces/User';
import PostForm from '../../PostForm';

interface IEditContentProps {
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  post: IPost;
}
const EditContent: React.FC<IEditContentProps> = ({ setEditModal, post }) => {
  return (
    <PostForm
      title="Edit item"
      action="SAVE"
      post={post}
      setEditModal={setEditModal}
    />
  );
};

export default EditContent;
