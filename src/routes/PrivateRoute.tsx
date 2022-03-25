import { useNavigate } from 'react-router-dom';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../hooks/redux.hooks';
import { EStateStatus } from '../hooks/locationToastify.hooks';

export const PrivateRoute = ({ children }: any) => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user, shallowEqual);

  const localStorageUser = JSON.parse(
    localStorage.getItem('codeleap::user') as string
  );
  const logged = user || localStorageUser;

  if (!logged)
    return navigate('/signin', {
      state: {
        status: EStateStatus.error,
        message: 'Ocorreu algum erro durante a autenticação.',
      },
    });

  return children;
};
