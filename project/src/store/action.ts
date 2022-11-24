import {createAction} from '@reduxjs/toolkit';
import {TCity} from '../types/city';
import {TOffer} from '../types/offers';

export const setCity = createAction<TCity>('offers/setCity');

export const loadOffers = createAction<TOffer[]>('offers/loadOffers');

export const setLoadingOffersStatus = createAction<boolean>('offers/setLoadingOffersStatus');
