import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../interfaces/User';

interface IUserInitialState {
  user: Partial<IUser>;
}

const localStorageUser: IUser = JSON.parse(
  localStorage.getItem('codeleap::user') as string
);

const initialState: IUserInitialState = {
  user: {
    name: localStorageUser.name || '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logUser: (state, action: PayloadAction<IUser>) => {
      localStorage.setItem('codeleap::user', JSON.stringify(action.payload));
      return { user: { ...state.user, ...action.payload } };
    },
    logout: () => {
      localStorage.removeItem('codeleap::user');
      return initialState;
    },
  },
});

export const { logUser, logout } = userSlice.actions;

export default userSlice.reducer;
