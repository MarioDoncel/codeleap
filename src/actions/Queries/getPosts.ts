import { api } from '../../config/api';
import { IPost } from '../../interfaces/User';

type TResponseData = {
  count: number;
  next: string;
  previous: string | null;
  results: IPost[];
};
export const getPosts = async (offset = 0) => {
  const responseData: TResponseData = await api
    .get(`/?limit=10&offset=${offset}`)
    .then((res) => res.data);

  return responseData;
};
