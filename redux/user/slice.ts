import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { ResponseUser } from '../../utils/api/types';
import { TUserSlice } from './types';

const initialState: TUserSlice = {
  data: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, { payload }: PayloadAction<ResponseUser>) {
      state.data = payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {
      state.data = payload.user;
    } 
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;