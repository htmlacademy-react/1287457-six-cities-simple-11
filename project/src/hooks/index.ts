import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux';
import {State, TAppDispatch} from '../types/state';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useAppDispatch = () => useDispatch<TAppDispatch>();
