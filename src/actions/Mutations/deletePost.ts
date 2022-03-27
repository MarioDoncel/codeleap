import { api } from '../../config/api';

export const deletePost = async ({ id }: { id: number }) => {
  return api.delete(`/${id}/`).then((res) => res.data);
};
