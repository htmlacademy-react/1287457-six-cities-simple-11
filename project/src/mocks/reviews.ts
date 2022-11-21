import {TReview} from '../types/review';

export const reviews: TReview[] = [
  {
    id: 1,
    offerId: 1,
    user: {
      name: 'Max',
      avatar: 'img/avatar-max.jpg',
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-01-24',
    rating: 4
  },
  {
    id: 2,
    offerId: 1,
    user: {
      name: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
    },
    comment: 'some text',
    date: '2011-04-24',
    rating: 2
  },
  {
    id: 3,
    offerId: 1,
    user: {
      name: 'Max',
      avatar: 'img/avatar-max.jpg',
    },
    comment: 'more reviews',
    date: '2019-04-21',
    rating: 5
  },
  {
    id: 4,
    offerId: 2,
    user: {
      name: 'Max',
      avatar: 'img/avatar-max.jpg',
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24',
    rating: 4
  },
];
