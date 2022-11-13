import {months} from './const';
import {OfferType} from './types/offers';
import {CityType} from './types/city';
import {defaultCity} from './mocks/cities';

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

export const getOffersByCity = function(city: string, offers: OfferType[]): OfferType[] | [] {
  return offers.filter((item) => item.city === city);
};

export const getCityByName = function(city: string, cities: CityType[]): CityType {
  return cities.find((item) => item.name === city) || defaultCity;
  /*
    суть проблемы - я не хочу отдавать тут никакой defaultCity, потому что с точки зрения логики это бред сивой кобылы - с чего бы мы должны увидеть париж, если искали урюпинск?
    но если его не отдавать, то линтер ругается, что Type 'CityType | undefined' is not assignable to type 'CityType'.
    т.е. т.к. find может вернуть undefined, То одного CityType недостаточно
    даже если я перепишу getCityByName  на
    export const getCityByName = function(city: string, cities: CityType[]): CityType | undefined {
    и во всех местах, где у меня происходит типизация city допишу также CityType | undefined (что уже выглядит плохой идеей), то в конце концов я получу другую ошибку вроде Property 'lon' does not exist on type 'CityType | undefined' когда в компоненте карты попытаюсб получить поля города

    как такой момент правильно пофиксить?
  */
};
