import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

interface InitialState {
  isLoggedIn: boolean;
}

const initialState: InitialState = {
  isLoggedIn: false,
};

export const appStateSlice = createSlice({
  initialState,
  name: 'appState',
  reducers: {
    setIsLoggedIn(state, { payload }: PayloadAction<boolean>) {
      state.isLoggedIn = payload;
    },
  },
});

export const selectIsLoggedIn = ({ appState }: RootState) =>
  appState.isLoggedIn;

export const { setIsLoggedIn } = appStateSlice.actions;
