import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {UserProcess} from '../../types/user-process';
import {checkUserStatus, loginUser, logoutUser} from '../api-action';

const initialState: UserProcess = {
  authorizationStatus: false,
  user: null
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkUserStatus.fulfilled, (state) => {
        state.authorizationStatus = true;
      })
      .addCase(checkUserStatus.rejected, (state) => {
        state.authorizationStatus = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.authorizationStatus = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.authorizationStatus = false;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.authorizationStatus = false;
        state.user = null;
      });
  }
});
