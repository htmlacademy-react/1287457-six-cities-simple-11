import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {TAppDispatch, TState} from '../types/state.js';
import {TOffer} from '../types/offers';
import {loadOffers, setLoadingOffersStatus} from './action';
import {APIRoute} from '../const';

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
