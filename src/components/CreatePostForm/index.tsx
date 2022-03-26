import React from 'react';

import {
  Container,
  Form,
  InputContainer,
  InputSubmit,
  Title,
  styleTextFields,
} from './styles';

const CreatePostForm: React.FC = () => {
  return (
    <Container>
      <Title>{`What's on your mind?`}</Title>
      <Form action="/">
        <InputContainer>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Hello World"
            className={styleTextFields}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="content">Content</label>
          <textarea
            placeholder="Content here"
            name="content"
            cols={30}
            rows={5}
            className={styleTextFields}
          />
        </InputContainer>
        <div className="flex justify-end">
          <InputSubmit type="submit" value="CREATE" />
        </div>
      </Form>
    </Container>
  );
};

export default CreatePostForm;
