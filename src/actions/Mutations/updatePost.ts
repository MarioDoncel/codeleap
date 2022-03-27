import { api } from '../../config/api';

type TUpdatePostDto = {
  title: string;
  content: string;
};

export const updatePost = async ({
  id,
  body,
}: {
  id: number;
  body: TUpdatePostDto;
}) => {
  return api.patch(`/${id}/`, body).then((res) => res.data);
};
