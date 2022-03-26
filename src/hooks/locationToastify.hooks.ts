import { useEffect } from 'react';
import { Location } from 'react-router';
import { EConstant } from '../Enums/constants';
import { popError } from '../utils/popError';
import { popSuccess } from '../utils/popSuccess';

type TState = { status: string; message: string };

export const useLocationToastify = (location: Location) => {
  useEffect(() => {
    const state = location.state
      ? (location.state as TState)
      : { status: '', message: '' };
    if (!state.status) return;
    if (state.status === EConstant.statusSucces) popSuccess(state.message);
    if (state.status === EConstant.statusError) popError(state.message);
  }, [location.state]);
};
