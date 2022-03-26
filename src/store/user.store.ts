import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EConstant } from '../Enums/constants';
import { IUser } from '../interfaces/User';

interface IUserInitialState {
  user: IUser;
}

const localStorageUser: IUser = JSON.parse(
  localStorage.getItem(EConstant.localStorageName) as string
);

const initialState: IUserInitialState = {
  user: {
    name: localStorageUser?.name,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logUser: (state, action: PayloadAction<IUser>) => {
      localStorage.setItem(
        EConstant.localStorageName,
        JSON.stringify(action.payload)
      );
      return { user: { ...state.user, ...action.payload } };
    },
    logout: () => {
      localStorage.removeItem(EConstant.localStorageName);
      return initialState;
    },
  },
});

export const { logUser, logout } = userSlice.actions;

export default userSlice.reducer;
