import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {User} from '../../types/user';

export const getAuthorizationStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus;

export const getUser = (state: State): User | null => state[NameSpace.User].user;
