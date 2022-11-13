import {store} from '../store/index.js';

export type StateType = ReturnType<typeof store.getState>;
