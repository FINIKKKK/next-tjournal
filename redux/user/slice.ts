import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;