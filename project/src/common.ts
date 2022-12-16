import {months, SORT_TYPES, SortType, cities} from './const';
import {Offer} from './types/offer';
import {City} from './types/city';
import {ReviewType} from './types/review-type';

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

export const getOffersByCity = function(city: string, offers: Offer[]): Offer[] {
  return offers.filter((item) => item.city.name === city);
};

export const sort = function(offers: Offer[], activeSortItem: typeof SORT_TYPES[number]): Offer[] {
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

export const sortReviewsByDate = function(reviews: ReviewType[]): ReviewType[] {
  const sortedReviews = [...reviews];
  sortedReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return sortedReviews;
};

const getRandomNumber = function(min: number, max: number): number {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const getRandomCity = function(): City {
  const randNumber = getRandomNumber(0, cities.length);
  return cities[randNumber];
};
