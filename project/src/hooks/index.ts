import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {StateType} from '../types/state';

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
