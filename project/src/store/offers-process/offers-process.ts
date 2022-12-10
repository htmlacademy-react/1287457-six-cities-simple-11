import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, SortType, SORT_TYPES, AppRoute} from '../../const';
import {cities} from '../../mocks/cities';
import {loadOffers, loadCurrentOffer, loadNearbyOffers} from '../api-action';
import {getOffersByCity} from '../../common';
import {City} from '../../types/city';
import {OffersProcess} from '../../types/offers-process';
import browserHistory from '../../browser-history';

const initialState: OffersProcess = {
  city: cities[0],
  offers: [],
  currentCityOffers: [],
  currentOffer: null,
  currentSortType: SortType.Popular,
  isOffersLoaded: false,
  isOfferLoaded: false,
  nearbyOffers: [],
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
      state.currentCityOffers = getOffersByCity(state.city.name, state.offers);
    },
    setSortType: (state, action: PayloadAction<typeof SORT_TYPES[number]>) => {
      state.currentSortType = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoaded = true;
        state.currentCityOffers = getOffersByCity(state.city.name, action.payload);
      })
      .addCase(loadOffers.rejected, (state) => {
        state.offers = [];
        state.isOffersLoaded = true;
        state.currentCityOffers = [];
      })
      .addCase(loadCurrentOffer.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isOfferLoaded = true;
      })
      .addCase(loadCurrentOffer.rejected, (state) => {
        state.currentOffer = null;
        browserHistory.push(AppRoute.Page404);
      })
      .addCase(loadNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      });
  }
});

export const {setCity, setSortType} = offersProcess.actions;
