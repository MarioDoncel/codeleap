import React from 'react';
import { IPost } from '../../interfaces/User';

import { Container, Form, InputContainer, InputSubmit, Title } from './styles';

interface IPostForm {
  action: string;
  title: string;
  post?: IPost;
  setEditModal?: React.Dispatch<React.SetStateAction<boolean>>;
}
const defaultProps = {
  post: undefined,
  setEditModal: undefined,
};

const PostForm: React.FC<IPostForm> = ({
  action,
  title,
  post,
  setEditModal,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!post) {
      return console.log('Create Post');
    }
    if (setEditModal) setEditModal(false);
    return console.log(`Edit post ${post.id}`);
  };

  return (
    <Container $post={!!post}>
      <Title>{title}</Title>
      <Form action="/" onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Hello World"
            className="input-text"
            defaultValue={post?.title}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="content">Content</label>
          <textarea
            placeholder="Content here"
            name="content"
            cols={30}
            rows={5}
            className="input-text"
            defaultValue={post?.content}
          />
        </InputContainer>
        <div className="flex justify-end">
          <InputSubmit type="submit" value={action} />
        </div>
      </Form>
    </Container>
  );
};
PostForm.defaultProps = defaultProps;
export default PostForm;
