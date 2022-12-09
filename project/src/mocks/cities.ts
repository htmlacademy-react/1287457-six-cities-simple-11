import {City} from '../types/city';

export const defaultCity: City = {
  location: {
    latitude: 52.37022,
    longitude: 4.89517,
    zoom: 10,
  },
  name: 'Amsterdam',
};

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
