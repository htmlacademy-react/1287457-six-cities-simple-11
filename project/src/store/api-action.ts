import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {TAppDispatch, State} from '../types/state.js';
import {Offer} from '../types/offer';
import {Auth} from '../types/auth';
import {User} from '../types/user';
import {ReviewType} from '../types/review-type';
import {Comment} from '../types/comment';
import {redirectToRoute} from './action';
import {APIRoute, AppRoute} from '../const';
import {setToken, deleteToken} from '../services/token';

export const checkUserStatus = createAsyncThunk<User, undefined, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkStatus',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<User>(APIRoute.Login);
    return data;
  },
);

export const loginUser = createAsyncThunk<User, Auth, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: user} = await api.post<User>(APIRoute.Login, {email, password});
    setToken(user.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return user;
  },
);

export const logoutUser = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    deleteToken();
  },
);

export const loadOffers = createAsyncThunk<Offer[], undefined, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  },
);

export const loadCurrentOffer = createAsyncThunk<Offer, number, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadOffer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
    window.scrollTo(0, 0);
    return data;
  },
);

export const loadNearbyOffers = createAsyncThunk<Offer[], number, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadNearbyOffer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);

export const loadReviews = createAsyncThunk<ReviewType[], number, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/loadReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const addReview = createAsyncThunk<ReviewType[], Comment, {
  dispatch: TAppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/addReview',
  async ({comment, rating, offerId}, {dispatch, extra: api}) => {
    await api.post<Comment>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
    const {data} = await api.get<ReviewType[]>(`${APIRoute.Comments}/${offerId}`);
    return data;
  },
);
