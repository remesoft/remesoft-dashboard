// useAppDispatch.ts
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/store';
export const useAppDispatch: () => AppDispatch = useDispatch;

// useAppSelector.ts
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
