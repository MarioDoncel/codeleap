import { api } from '../../config/api';

type TCreatePostDto = {
  username: string;
  title: string;
  content: string;
};

export const createPost = async (body: TCreatePostDto) => {
  return api.post(`/`, body).then((res) => res.data);
};
