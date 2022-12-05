import {createAction} from '@reduxjs/toolkit';
import {TCity} from '../types/city';
import {TOffer} from '../types/offers';
import {TUser} from '../types/user';
import {TReview} from '../types/review';
import {AppRoute} from '../const';

export const setCity = createAction<TCity>('offers/setCity');

export const loadOffers = createAction<TOffer[]>('offers/loadOffers');

export const loadOffer = createAction<TOffer>('offers/loadOffer');

export const setLoadingOffersStatus = createAction<boolean>('offers/setLoadingOffersStatus');

export const setLoadingOfferStatus = createAction<boolean>('offers/setLoadingOfferStatus');

export const setAuthorizationStatus = createAction<boolean>('user/setAuthorizationStatus');

export const setUser = createAction<TUser | null>('user/setUser');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const loadNearbyOffers = createAction<TOffer[]>('offers/loadNearbyOffers');

export const loadReviews = createAction<TReview[]>('offers/loadReviews');
