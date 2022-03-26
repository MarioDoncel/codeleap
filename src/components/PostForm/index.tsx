import React, { useEffect, useRef, useState } from 'react';
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
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const inputTitle = useRef<HTMLInputElement>(null);
  const textareaContent = useRef<HTMLTextAreaElement>(null);

  const checkFieldsContent = () => {
    const titleValue = inputTitle?.current?.value;
    const contentValue = textareaContent?.current?.value;
    if ((!titleValue || !contentValue) && disabledSubmit) return;
    if ((!titleValue || !contentValue) && !disabledSubmit) {
      setDisabledSubmit(true);
      return;
    }
    if (disabledSubmit) setDisabledSubmit(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!post) {
      return console.log('Create Post');
    }
    if (setEditModal) setEditModal(false);
    return console.log(`Edit post ${post.id}`);
  };
  useEffect(() => {
    checkFieldsContent();
  }, []);
  return (
    <Container $post={!!post}>
      <Title>{title}</Title>
      <Form action="/" onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="title">Title</label>
          <input
            ref={inputTitle}
            type="text"
            name="title"
            placeholder="Hello World"
            className="input-text"
            defaultValue={post?.title}
            onChange={checkFieldsContent}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="content">Content</label>
          <textarea
            ref={textareaContent}
            placeholder="Content here"
            name="content"
            cols={30}
            rows={5}
            className="input-text"
            defaultValue={post?.content}
            onChange={checkFieldsContent}
          />
        </InputContainer>
        <div className="flex justify-end">
          <InputSubmit type="submit" value={action} disabled={disabledSubmit} />
        </div>
      </Form>
    </Container>
  );
};
PostForm.defaultProps = defaultProps;
export default PostForm;
