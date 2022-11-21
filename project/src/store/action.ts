import {createAction} from '@reduxjs/toolkit';
import {TCity} from '../types/city';
import {TOffer} from '../types/offers';

export const setCity = createAction('offers/setCity', (value: TCity) => ({
  payload: value,
}));

export const setOffers = createAction('offers/setOffers', (value: TOffer[]) => ({
  payload: value,
}));
