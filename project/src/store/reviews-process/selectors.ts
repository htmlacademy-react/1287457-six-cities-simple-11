import {NameSpace} from '../../const';
import {ReviewType} from '../../types/review-type';
import {State} from '../../types/state';

export const getReviews = (state: State): ReviewType[] => state[NameSpace.Reviews].reviews;
