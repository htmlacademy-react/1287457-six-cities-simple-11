import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {TAppDispatch, TState} from '../types/state.js';
import {TOffer} from '../types/offers';
import {TAuth} from '../types/auth';
import {TUser} from '../types/user';
import {loadOffers, setLoadingOffersStatus, setAuthorizationStatus, setUser, redirectToRoute} from './action';
import {APIRoute, AppRoute} from '../const';
import {setToken, deleteToken} from '../services/token';

export const loadOffersAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'offers/loadOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TOffer[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setLoadingOffersStatus(true));
  },
);

export const checkUserStatus = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/checkStatus',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: user} = await api.get<TUser>(APIRoute.Login);
      dispatch(setAuthorizationStatus(true));
      dispatch(setUser(user));
    } catch {
      dispatch(setAuthorizationStatus(false));
    }
  },
);

export const loginUser = createAsyncThunk<void, TAuth, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: user} = await api.post<TUser>(APIRoute.Login, {email, password});
    setToken(user.token);
    dispatch(setAuthorizationStatus(true));
    dispatch(setUser(user));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutUser = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    deleteToken();
    dispatch(setAuthorizationStatus(false));
    dispatch(setUser(null));
  },
);
