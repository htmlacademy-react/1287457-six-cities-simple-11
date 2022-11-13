import {createAction} from '@reduxjs/toolkit';

export const setCity = createAction('offers/setCity', (value) => {
  return {
    payload: value,
  };
});

export const setOffers = createAction('offers/setOffers', (value) => {
  return {
    payload: value,
  };
});
