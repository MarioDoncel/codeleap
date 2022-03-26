import React, { useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useLocation } from 'react-router';
import CreatePostForm from '../../components/PostForm';
import Header from '../../components/Header';
import Post from '../../components/Post';
import { useAppSelector } from '../../hooks/redux.hooks';
import { POSTS } from '../../Mock/posts';

import { Container, Presentation, Main } from './styles';
import Toastify from '../../components/Toastify';
import { useLocationToastify } from '../../hooks/locationToastify.hooks';

const Posts: React.FC = () => {
  const location = useLocation();
  const [clearPresentation, setClearPresentation] = useState(false);
  const { user } = useAppSelector((state) => state.user, shallowEqual);

  useLocationToastify(location);
  useEffect(() => {
    setTimeout(() => setClearPresentation(true), 3000);
  }, []);
  return (
    <>
      <Toastify />
      {!clearPresentation && <Presentation />}
      {clearPresentation && (
        <Container>
          <Header>Codeleap Network</Header>
          <Main>
            <CreatePostForm title={`What's on your mind?`} action="CREATE" />
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
