import {createSelector} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';
import {City} from '../../types/city';
import {sort} from '../../common';

export const getCurrentOffer = (state: State): Offer | null => state[NameSpace.Offers].currentOffer;

export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Offers].nearbyOffers;

export const getCurrentCityOffers = (state: State): Offer[] => state[NameSpace.Offers].currentCityOffers;

export const getCurrentSortType = (state: State) => state[NameSpace.Offers].currentSortType;

export const getCity = (state: State): City => state[NameSpace.Offers].city;

export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersLoaded;

export const getOfferLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOfferLoaded;

export const getCurrentCitySortedOffers = createSelector(
  [getCurrentCityOffers, getCurrentSortType],
  (offers, currentSortType) => sort(offers, currentSortType)
);
