import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {TAppDispatch, TState} from '../types/state.js';
import {TOffer} from '../types/offers';
import {TAuth} from '../types/auth';
import {TUser} from '../types/user';
import {TReview} from '../types/review';
import {TComment} from '../types/comment';
import {loadOffers, loadOffer, setLoadingOffersStatus, setLoadingOfferStatus, setAuthorizationStatus, setUser, redirectToRoute, loadNearbyOffers, loadReviews} from './action';
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

export const loadOfferAction = createAsyncThunk<void, number, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'offers/loadOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<TOffer>(`${APIRoute.Offers}/${id}`);
      dispatch(loadOffer(data));
      dispatch(setLoadingOfferStatus(true));
      window.scrollTo(0, 0);
    } catch {
      dispatch(setLoadingOfferStatus(false));
    }
  },
);

export const loadNearbyOffersAction = createAsyncThunk<void, number, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'offers/loadNearbyOffer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TOffer[]>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(loadNearbyOffers(data));
  },
);

export const loadReviewsAction = createAsyncThunk<void, number, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'offers/loadReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TReview[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadReviews(data));
  },
);

export const addReview = createAsyncThunk<void, TComment, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'offers/addReview',
  async ({comment, rating, offerId}, {dispatch, extra: api}) => {
    await api.post<TComment>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
    const {data} = await api.get<TReview[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(loadReviews(data));
  },
);
