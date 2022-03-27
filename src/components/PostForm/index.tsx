import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { shallowEqual } from 'react-redux';
import { createPost } from '../../actions/Mutations/createPost';
import { updatePost } from '../../actions/Mutations/updatePost';
import { useAppSelector } from '../../hooks/redux.hooks';
import { IPost } from '../../interfaces/User';
import { popError } from '../../utils/popError';
import { popSuccess } from '../../utils/popSuccess';

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
  const queryClient = useQueryClient();
  const { user } = useAppSelector((state) => state.user, shallowEqual);
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const inputTitle = useRef<HTMLInputElement>(null);
  const textareaContent = useRef<HTMLTextAreaElement>(null);
  const { mutate: mutateCreatePost } = useMutation(createPost);
  const { mutate: mutateUpdatePost } = useMutation(updatePost);

  const checkFieldsContent = () => {
    const postTitleValue = inputTitle?.current?.value;
    const contentValue = textareaContent?.current?.value;
    if ((!postTitleValue || !contentValue) && disabledSubmit) return;
    if ((!postTitleValue || !contentValue) && !disabledSubmit) {
      setDisabledSubmit(true);
      return;
    }
    if (disabledSubmit) setDisabledSubmit(false);
  };

  const mutateError = () => {
    popError(
      'An error has ocurred when saving the post, please try again or contact our support.'
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const postTitleValue = inputTitle?.current?.value;
    const postContentValue = textareaContent?.current?.value;
    const username = user?.name;
    if (!postTitleValue || !postContentValue) {
      return popError('Please fill all fields');
    }
    if (!post) {
      return mutateCreatePost(
        {
          title: postTitleValue,
          content: postContentValue,
          username,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries('posts');
            form.reset();
            popSuccess('Post created!');
          },
          onError: mutateError,
        }
      );
    }
    return mutateUpdatePost(
      {
        id: post.id,
        body: { title: postTitleValue, content: postContentValue },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries('posts');
          if (setEditModal) setEditModal(false);
          popSuccess('Post updated!');
        },
        onError: mutateError,
      }
    );
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
