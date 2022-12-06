import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../mocks/cities';
import {setCity, loadOffers, loadOffer, setLoadingOffersStatus, setLoadingOfferStatus, setAuthorizationStatus, setUser, loadNearbyOffers, loadReviews} from './action';
import {TOffer} from '../types/offers';
import {TCity} from '../types/city';
import {TUser} from '../types/user';
import {TReview} from '../types/review';
import {getOffersByCity} from '../common';

type InitalState = {
  city: TCity;
  offers: TOffer[];
  currentCityOffers: TOffer[];
  currentOffer: TOffer | null;
  isOffersLoaded: boolean;
  isOfferLoaded: boolean | undefined;
  authorizationStatus: boolean;
  user: TUser | null;
  nearbyOffers: TOffer[];
  reviews: TReview[];
}

const initialState: InitalState = {
  city: cities[0],
  offers: [],
  currentCityOffers: [],
  currentOffer: null,
  isOffersLoaded: false,
  isOfferLoaded: undefined,
  authorizationStatus: false,
  user: null,
  nearbyOffers: [],
  reviews: [],
};

type actionTypeCity = {
  payload: TCity;
};

type actionTypeOffers = {
  payload: TOffer[];
};

type actionTypeOffer = {
  payload: TOffer;
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

type actionTypeLoadNearbyOffers = {
  payload: TOffer[];
};

type actionTypeLoadReviews = {
  payload: TReview[];
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
    })
    .addCase(loadOffer, (state, action: actionTypeOffer) => {
      state.currentOffer = action.payload;
    })
    .addCase(setLoadingOfferStatus, (state, action: actionTypeLoadingStatus) => {
      state.isOfferLoaded = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action: actionTypeLoadNearbyOffers) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadReviews, (state, action: actionTypeLoadReviews) => {
      state.reviews = action.payload;
    });
});
