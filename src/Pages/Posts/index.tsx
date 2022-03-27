import React, { useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useLocation } from 'react-router';
import { useQuery } from 'react-query';
import CreatePostForm from '../../components/PostForm';
import Header from '../../components/Header';
import Post from '../../components/Post';
import { useAppSelector } from '../../hooks/redux.hooks';
import { Container, Presentation, Main } from './styles';
import Toastify from '../../components/Toastify';
import { useLocationToastify } from '../../hooks/locationToastify.hooks';
import { getPosts } from '../../actions/Queries/getPosts';
import { popError } from '../../utils/popError';
import { Pagination } from '../../components/Pagination';

const fiveMinutesInMiliseconds = 1000 * 60 * 5;

const Posts: React.FC = () => {
  const location = useLocation();
  const [clearPresentation, setClearPresentation] = useState(false);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * 10;
  const { user } = useAppSelector((state) => state.user, shallowEqual);
  const { data } = useQuery(['posts', page], () => getPosts(offset), {
    staleTime: fiveMinutesInMiliseconds,
    onError: () => {
      popError('Something got wrong when fetching posts.');
    },
  });
  const numberOfPages = data ? Math.ceil(data.count / 10) : 1;
  const handleClickPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > (numberOfPages || 1)) return;
    setPage(pageNumber);
  };

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
            {data?.results?.map((post) => (
              <Post key={post.id} post={post} user={user} />
            ))}
            <Pagination
              current={page}
              numberOfPages={numberOfPages || 1}
              onClickPage={handleClickPage}
            />
          </Main>
        </Container>
      )}
    </>
  );
};

export default Posts;
