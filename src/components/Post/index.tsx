import React from 'react';

import { IPost, IUser } from '../../interfaces/User';
import Header from '../Header';

import { Container, Content, Info, Text } from './styles';

interface IPostProps {
  post: IPost;
  user: IUser;
}

const Post: React.FC<IPostProps> = ({ post, user }) => {
  return (
    <Container>
      <Header postOwner={post?.username === user?.name}>{post.title} </Header>
      <Content>
        <Info>
          <span>{`@${post.username}`}</span>
          <span className="text-center">{post.created_datetime}</span>
        </Info>
        <Text>{post.content}</Text>
      </Content>
    </Container>
  );
};

export default Post;
