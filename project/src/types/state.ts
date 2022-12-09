import {store} from '../store/index.js';

export type State = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
