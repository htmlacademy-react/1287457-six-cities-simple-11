import {createAction} from '@reduxjs/toolkit';
import {TCity} from '../types/city';
import {TOffer} from '../types/offers';
import {TUser} from '../types/user';
import {AppRoute} from '../const';

export const setCity = createAction<TCity>('offers/setCity');

export const loadOffers = createAction<TOffer[]>('offers/loadOffers');

export const setLoadingOffersStatus = createAction<boolean>('offers/setLoadingOffersStatus');

export const setAuthorizationStatus = createAction<boolean>('user/setAuthorizationStatus');

export const setUser = createAction<TUser | null>('user/setUser');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
