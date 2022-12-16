import {City} from './types/city';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Page404 = '*',
  Offer = '/offer',
}

export const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const LEAFLET_TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const LEAFLET_COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}

export enum SortType {
  Popular = 'Popular',
  PriceUp = 'Price: low to high',
  PriceDown = 'Price: high to low',
  TopRated = 'Top rated first'
}

export const SORT_TYPES = Object.values(SortType);

export enum NameSpace {
  Offers = 'OFFERS',
  User = 'USER',
  Reviews = 'REVIEWS',
}

export const MAX_OFFER_IMAGES = 6;

export const PASSWORD_MASK = /^\S*(?=\S{1,})(?=\S*[a-zA-Z])(?=\S*[\d])\S*$/;

export const cities: City[] = [
  {
    location: {
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 10,
    },
    name: 'Paris',
  },
  {
    location: {
      latitude: 50.9333,
      longitude: 6.95,
      zoom: 10,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 50.8504,
      longitude: 4.34878,
      zoom: 10,
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude: 52.37022,
      longitude: 4.89517,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.5753,
      longitude: 10.0153,
      zoom: 10,
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude: 51.22774,
      longitude: 6.77346,
      zoom: 10,
    },
    name: 'Dusseldorf',
  },
];


export enum ReviewOptions {
  MaxLength = 300,
  MinLength = 50,
}

export const MAX_REVIEWS_COUNT = 10;
