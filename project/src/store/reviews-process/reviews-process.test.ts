import {reviewsProcess} from './reviews-process';
import {loadReviews, addReview} from '../api-action';
import {ReviewsProcess} from '../../types/reviews-process';

const reviews = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24',
    id: 1,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Max',
    }
  },
  {
    comment: 'A quiet cozy',
    date: '2019-04-24',
    id: 2,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: false,
      name: 'Angelina',
    }
  },
];

const newReview = {
  comment: 'some new text',
  date: '2019-04-24',
  id: 5,
  rating: 3,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 5,
    isPro: false,
    name: 'Max',
  }
};


describe('Reducer: reviewsProcess', () => {

  it('should replace reviews with a given value', () => {
    const state: ReviewsProcess = {
      reviews: [],
    };
    expect(reviewsProcess.reducer(state, {type: loadReviews.fulfilled.type, payload: reviews}))
      .toEqual({
        reviews: reviews,
      });
  });

  it('should update reviews with a given value', () => {
    const state: ReviewsProcess = {
      reviews: reviews,
    };
    const payload = [...reviews, newReview];
    expect(reviewsProcess.reducer(state, {type: addReview.fulfilled.type, payload: payload}))
      .toEqual({
        reviews: payload,
      });
  });
});
