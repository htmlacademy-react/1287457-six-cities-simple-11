import {userProcess} from './user-process';
import {checkUserStatus, loginUser, logoutUser} from '../api-action';
import {UserProcess} from '../../types/user-process';

const user = {
  avatarUrl: 'img/avatar-max.jpg',
  email: 'test@test.ru',
  id: 4,
  isPro: true,
  name: 'Max',
  token: 'sometoken',
};

describe('Reducer: userProcess', () => {

  it('should set authorization status true and update user (checkstatus)', () => {
    const state: UserProcess = {
      authorizationStatus: false,
      user: null
    };
    expect(userProcess.reducer(state, {type: checkUserStatus.fulfilled.type, payload: user}))
      .toEqual({
        authorizationStatus: true,
        user: user
      });
  });

  it('should set authorization status false (checkstatus)', () => {
    const state: UserProcess = {
      authorizationStatus: true,
      user: null
    };
    expect(userProcess.reducer(state, {type: checkUserStatus.rejected.type}))
      .toEqual({
        authorizationStatus: false,
        user: null
      });
  });

  it('should set authorization status true and update user (login)', () => {
    const state: UserProcess = {
      authorizationStatus: false,
      user: null
    };
    expect(userProcess.reducer(state, {type: loginUser.fulfilled.type, payload: user}))
      .toEqual({
        authorizationStatus: true,
        user: user
      });
  });

  it('should set authorization status false (login)', () => {
    const state: UserProcess = {
      authorizationStatus: true,
      user: null
    };
    expect(userProcess.reducer(state, {type: loginUser.rejected.type}))
      .toEqual({
        authorizationStatus: false,
        user: null
      });
  });

  it('should set authorization status false and reset user', () => {
    const state: UserProcess = {
      authorizationStatus: true,
      user: user
    };
    expect(userProcess.reducer(state, {type: logoutUser.fulfilled.type}))
      .toEqual({
        authorizationStatus: false,
        user: null
      });
  });
});
