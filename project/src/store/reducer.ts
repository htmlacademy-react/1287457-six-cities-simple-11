import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../mocks/cities';
import {setCity, loadOffers, setLoadingOffersStatus, setAuthorizationStatus, setUser} from './action';
import {TOffer} from '../types/offers';
import {TCity} from '../types/city';
import {TUser} from '../types/user';
import {getOffersByCity} from '../common';

type InitalState = {
  city: TCity;
  offers: TOffer[];
  currentCityOffers: TOffer[];
  isOffersLoaded: boolean;
  authorizationStatus: boolean;
  user: TUser | null;
}

const initialState: InitalState = {
  city: cities[0],
  offers: [],
  currentCityOffers: [],
  isOffersLoaded: false,
  authorizationStatus: false,
  user: null,
};

type actionTypeCity = {
  payload: TCity;
};

type actionTypeOffers = {
  payload: TOffer[];
};

type actionTypeLoadingStatus = {
  payload: boolean;
};

type actionTypeAuthorizationStatus = {
  payload: boolean;
};

type actionTypeUser = {
  payload: TUser | null;
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action: actionTypeCity) => {
      state.city = action.payload;
      state.currentCityOffers = getOffersByCity(state.city.name, state.offers);
    })
    .addCase(loadOffers, (state, action: actionTypeOffers) => {
      state.offers = action.payload;
    })
    .addCase(setLoadingOffersStatus, (state, action: actionTypeLoadingStatus) => {
      state.isOffersLoaded = action.payload;
      state.currentCityOffers = getOffersByCity(state.city.name, state.offers);
    })
    .addCase(setAuthorizationStatus, (state, action: actionTypeAuthorizationStatus) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action: actionTypeUser) => {
      state.user = action.payload;
    });
});
