import {createReducer} from '@reduxjs/toolkit';
import {START_CITY} from '../const';
import {getOffersByCity} from '../common';
import {offers} from '../mocks/offers';
import {cities} from '../mocks/cities';
import {setCity, setOffers} from './action';
import {TOffer} from '../types/offers';
import {TCity} from '../types/city';

const initialState = {
  city: cities[0],
  offers: getOffersByCity(START_CITY, offers)
};

type actionTypeCity = {
  payload: TCity;
};

type actionTypeOffers = {
  payload: TOffer[];
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action: actionTypeCity) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action: actionTypeOffers) => {
      state.offers = action.payload;
    });
});
