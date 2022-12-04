import {months, SORT_TYPES, SortType} from './const';
import {TOffer} from './types/offers';

export const formatRating = function(rating: number): string {
  return `${Math.floor(rating) * 20}%`;
};

export const addSIfNeeded = function(count: number, word: string): string {
  return count > 1 ? `${word}s` : word;
};

export const formatDate = function(date: string): string {
  const [year, month] = date.split('-');
  return `${months[Number(month) - 1]} ${year}`;
};

export const getOffersByCity = function(city: string, offers: TOffer[]): TOffer[] {
  return offers.filter((item) => item.city.name === city);
};

export const sort = function(offers: TOffer[], activeSortItem: typeof SORT_TYPES[number]): TOffer[] {
  const sortedOffers = [...offers];
  switch (activeSortItem) {
    case SortType.PriceUp:
      sortedOffers.sort((a, b) => a.price - b.price);
      break;
    case SortType.PriceDown:
      sortedOffers.sort((a, b) => b.price - a.price);
      break;
    case SortType.TopRated:
      sortedOffers.sort((a, b) => b.rating - a.rating);
      break;
  }
  return sortedOffers;
};
