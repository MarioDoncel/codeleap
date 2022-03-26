import React, { Navigate } from 'react-router-dom';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../hooks/redux.hooks';
import { EConstant } from '../Enums/constants';

export const PrivateRoute = ({ children }: any) => {
  const { user } = useAppSelector((state) => state.user, shallowEqual);

  const localStorageUser = JSON.parse(
    localStorage.getItem(EConstant.localStorageName) as string
  );
  const logged = user?.name || localStorageUser;

  if (!logged)
    return (
      <Navigate
        to="/signup"
        state={{
          status: EConstant.statusError,
          message: 'Please login.',
        }}
      />
    );

  return children;
};
