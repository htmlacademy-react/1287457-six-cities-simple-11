import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux';
import {TState, TAppDispatch} from '../types/state';

export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;

export const useAppDispatch = () => useDispatch<TAppDispatch>();
