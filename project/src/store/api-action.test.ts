import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import {State} from '../types/state.js';
import {Offer} from '../types/offer';
import {Auth} from '../types/auth';
import {User} from '../types/user';
import {ReviewType} from '../types/review-type';
import {Comment} from '../types/comment';
import {APIRoute} from '../const';
import {checkUserStatus, loginUser, logoutUser, loadOffers, loadCurrentOffer, loadNearbyOffers, loadReviews, addReview} from './api-action';
import {redirectToRoute} from './action';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  describe('Async user actions', () => {
    it('should authorization status is «auth» when server return 200', async () => {
      const store = mockStore();
      mockAPI
        .onGet(APIRoute.Login)
        .reply(200, []);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(checkUserStatus());

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        checkUserStatus.pending.type,
        checkUserStatus.fulfilled.type
      ]);
    });
    
    it('should dispatch loginUser when POST /login', async () => {
      const mockUser: Auth = {email: 'test@test.ru', password: '123456'};

      mockAPI
        .onPost(APIRoute.Login)
        .reply(200, {token: 'token'});


      const store = mockStore();
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(loginUser(mockUser));

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        loginUser.pending.type,
        redirectToRoute.type,
        loginUser.fulfilled.type
      ]);

      expect(Storage.prototype.setItem).toBeCalledTimes(1);
      expect(Storage.prototype.setItem).toBeCalledWith('six-cities-simple-token', 'token');
    });
    
    it('should dispatch logoutUser when Delete /logout', async () => {
      mockAPI
        .onDelete(APIRoute.Logout)
        .reply(204);

      const store = mockStore();
      Storage.prototype.removeItem = jest.fn();

      await store.dispatch(logoutUser());

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        logoutUser.pending.type,
        logoutUser.fulfilled.type
      ]);

      expect(Storage.prototype.removeItem).toBeCalledTimes(1);
      expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-simple-token');
    });
  });

  describe('Async offers actions', () => {
    it('should dispatch loadOffers when GET /hotels', async () => {
      const mockOffers = [
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

      mockAPI
        .onGet(APIRoute.Offers)
        .reply(200, mockOffers);

      const store = mockStore();

      await store.dispatch(loadOffers());

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        loadOffers.pending.type,
        loadOffers.fulfilled.type
      ]);
    });

    it('should dispatch loadCurrentOffer when GET /hotels/{hotelId}', async () => {
      const hotelId = 1;
      const mockOffer = {
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
      };

      mockAPI
        .onGet(`${APIRoute.Offers}/${hotelId}`)
        .reply(200, mockOffer);

      const store = mockStore();

      await store.dispatch(loadCurrentOffer(hotelId));

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        loadCurrentOffer.pending.type,
        loadCurrentOffer.fulfilled.type,
      ]);
    });

    it('should dispatch loadNearbyOffers when GET /hotels/{hotelId}/nearby', async () => {
      const hotelId = 1;
      const mockOffers = [
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

      mockAPI
        .onGet(`${APIRoute.Offers}/${hotelId}/nearby`)
        .reply(200, mockOffers);

      const store = mockStore();

      await store.dispatch(loadNearbyOffers(hotelId));

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        loadNearbyOffers.pending.type,
        loadNearbyOffers.fulfilled.type,
      ]);
    });
  });

  describe('Async reviews actions', () => {
    it('should dispatch loadReviews when GET /comments/{hotelId}', async () => {
      const hotelId = 1;
      const mockReviews = [
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

      mockAPI
        .onGet(`${APIRoute.Comments}/${hotelId}`)
        .reply(200, mockReviews);

      const store = mockStore();

      await store.dispatch(loadReviews(hotelId));

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        loadReviews.pending.type,
        loadReviews.fulfilled.type,
      ]);
    });

    it('should dispatch addReview when POST /comments/{hotelId}', async () => {
      const hotelId = 1;
      const mockReviews = [
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
        rating: 3,
        offerId: 1
      };

      mockAPI
        .onPost(`${APIRoute.Comments}/${hotelId}`)
        .reply(200, mockReviews);

      const store = mockStore();

      await store.dispatch(addReview(newReview));

      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        addReview.pending.type,
        addReview.fulfilled.type,
      ]);
    });
  });
});
