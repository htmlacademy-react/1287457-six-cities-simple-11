import {City} from './city';
import {Offer} from './offer';
import {SORT_TYPES} from '../const';

export type OffersProcess = {
  city: City;
  offers: Offer[];
  currentCityOffers: Offer[];
  currentOffer: Offer | null;
  currentSortType: typeof SORT_TYPES[number];
  isOffersLoaded: boolean;
  isOfferLoaded: boolean;
  nearbyOffers: Offer[];
};
