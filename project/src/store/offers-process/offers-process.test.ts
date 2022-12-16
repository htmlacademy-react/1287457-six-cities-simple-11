import {offersProcess, setCity, setSortType} from './offers-process';
import {loadOffers, loadNearbyOffers, loadCurrentOffer} from '../api-action';
import {OffersProcess} from '../../types/offers-process';
import {SortType, cities} from '../../const';


const offers = [
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 3,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 1,
    'images': [
      'https://11.react.pages.academy/static/hotel/6.jpg'
    ],
    'isPremium': false,
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.364499,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'https://11.react.pages.academy/static/hotel/6.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment'
  },
  {
    'bedrooms': 1,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Paris'
    },
    'description': 'descr',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 3,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 2,
    'images': [
      'https://11.react.pages.academy/static/hotel/9.jpg'
    ],
    'isPremium': false,
    'location': {
      'latitude': 48.843610000000005,
      'longitude': 2.338499,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'https://11.react.pages.academy/static/hotel/9.jpg',
    'price': 220,
    'rating': 1.8,
    'title': 'Beautiful',
    'type': 'apartment'
  },
  {
    'bedrooms': 5,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Moscow'
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 3,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 3,
    'images': [
      'https://11.react.pages.academy/static/hotel/4.jpg'
    ],
    'isPremium': false,
    'location': {
      'latitude': 48.846610000000005,
      'longitude': 2.374499,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'https://11.react.pages.academy/static/hotel/4.jpg',
    'price': 20,
    'rating': 4.8,
    'title': 'location',
    'type': 'apartment'
  },
];

const offersParis = offers.filter((offer)=>offer.city.name === 'Paris');

const offersMoscow = offers.filter((offer)=>offer.city.name === 'Moscow');

const cityParis = {
  location: {
    latitude: 48.8534,
    longitude: 2.3488,
    zoom: 10,
  },
  name: 'Paris',
};

const cityMoscow = {
  location: {
    latitude: 48.8534,
    longitude: 2.3488,
    zoom: 10,
  },
  name: 'Moscow',
};

const emptyState: OffersProcess = {
  city: cities[0],
  offers: [],
  currentCityOffers: [],
  currentOffer: null,
  currentSortType: SortType.Popular,
  isOffersLoaded: false,
  isOfferLoaded: false,
  nearbyOffers: [],
};

describe('Reducer: offersProcess', () => {

  it('should replace city with a given value', () => {
    const state = {...emptyState, offers: offers};
    expect(offersProcess.reducer(state, setCity(cityParis)))
      .toEqual({
        ...emptyState,
        city: cityParis,
        offers: offers,
        currentCityOffers: offersParis,
      });

    expect(offersProcess.reducer(state, setCity(cityMoscow)))
      .toEqual({
        ...emptyState,
        city: cityMoscow,
        offers: offers,
        currentCityOffers: offersMoscow,
      }); 
  });

  it('should replace currentSortType with a given value', () => {
    const state = {...emptyState};
    expect(offersProcess.reducer(state, setSortType(SortType.PriceDown)))
      .toEqual({
        ...emptyState,
        currentSortType: SortType.PriceDown,
      });

    expect(offersProcess.reducer(state, setSortType(SortType.TopRated)))
      .toEqual({
        ...emptyState,
        currentSortType: SortType.TopRated,
      });
  });

  it('should update offers by load offers', () => {
    const state = {...emptyState, city: cityParis};

    expect(offersProcess.reducer(state, {type: loadOffers.fulfilled.type, payload: offers}))
      .toEqual({
        ...emptyState,
        city: cityParis,
        offers: offers,
        currentCityOffers: offersParis,
        isOffersLoaded: true,
      });
  });

  it('should clear offers if no offers loaded', () => {
    const state = {
      ...emptyState,
      city: cityParis,
      offers: offers,
      currentCityOffers: offersParis,
      isOffersLoaded: true,
    };
    expect(offersProcess.reducer(state, {type: loadOffers.rejected.type}))
      .toEqual({
        ...emptyState,
        city: cityParis,
        isOffersLoaded: true,
      });
  });
  
  it('should update nearby offers by load nearby offers', () => {
    const state = {...emptyState};
    expect(offersProcess.reducer(state, {type: loadNearbyOffers.fulfilled.type, payload: offers}))
      .toEqual({
        ...emptyState,
        nearbyOffers: offers,
      });
  });

  it('should update currentOffer by load currentOffer', () => {
    const state = {...emptyState};
    expect(offersProcess.reducer(state, {type: loadCurrentOffer.fulfilled.type, payload: offers[0]}))
      .toEqual({
        ...emptyState,
        currentOffer: offers[0],
        isOfferLoaded: true,
      });
  });

  it('should clear currentOffer if no currentOffer loaded', () => {
    const state = {
      ...emptyState,
      currentOffer: offers[0],
    };
    expect(offersProcess.reducer(state, {type: loadCurrentOffer.rejected.type}))
      .toEqual({
        ...emptyState
      });
  });
});
