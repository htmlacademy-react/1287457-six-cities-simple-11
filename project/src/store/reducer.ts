import {createReducer} from '@reduxjs/toolkit';
import {START_CITY} from '../const';
import {getOffersByCity, getCityByName} from '../common';
import {offers} from '../mocks/offers';
import {cities} from '../mocks/cities';
import {setCity, setOffers} from './action';
import {OfferType} from '../types/offers';
import {CityType} from '../types/city';

const initialState = {
  city: getCityByName(START_CITY, cities),
  offers: getOffersByCity(START_CITY, offers)
};

type actionTypeCity = {
  payload: CityType;
};

type actionTypeOffers = {
  payload: OfferType[];
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
