import {User} from './user';

export type UserProcess = {
  authorizationStatus: boolean;
  user: User | null;
}
