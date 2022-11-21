import {months} from './const';
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
  return offers.filter((item) => item.city === city);
};
