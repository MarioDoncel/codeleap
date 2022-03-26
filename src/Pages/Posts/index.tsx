import React, { useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import CreatePostForm from '../../components/CreatePostForm';
import Header from '../../components/Header';
import Post from '../../components/Post';
import { useAppSelector } from '../../hooks/redux.hooks';
import { POSTS } from '../../Mock/posts';

import { Container, Presentation, Main } from './styles';

const Posts: React.FC = () => {
  const [clearPresentation, setClearPresentation] = useState(false);
  const { user } = useAppSelector((state) => state.user, shallowEqual);
  console.log(user);
  useEffect(() => {
    setTimeout(() => setClearPresentation(true), 3000);
  }, []);
  return (
    <>
      {!clearPresentation && <Presentation />}
      {clearPresentation && (
        <Container>
          <Header>Codeleap Network</Header>
          <Main>
            <CreatePostForm />
            {POSTS.map((post) => (
              <Post key={post.id} post={post} user={user} />
            ))}
          </Main>
        </Container>
      )}
    </>
  );
};

export default Posts;
