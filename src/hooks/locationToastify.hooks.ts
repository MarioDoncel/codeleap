import { useEffect } from 'react';
import { Location } from 'react-router';
import { popError } from '../utils/popError';
import { popSuccess } from '../utils/popSuccess';

type TState = { status: string; message: string };
export enum EStateStatus {
  success = 'Success',
  error = 'Error',
}

export const useLocationToastify = (location: Location) => {
  useEffect(() => {
    const state = location.state
      ? (location.state as TState)
      : { status: '', message: '' };
    if (!state.status) return;
    if (state.status === EStateStatus.success) popSuccess(state.message);
    if (state.status === EStateStatus.error) popError(state.message);
  }, [location.state]);
};
