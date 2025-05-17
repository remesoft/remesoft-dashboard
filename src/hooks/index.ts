// useAppDispatch hook
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
export const useAppDispatch: () => AppDispatch = useDispatch;

// useAppSelector hook
import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "../app/store";
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// useTranslation hook
import { useTranslation } from "react-i18next";
export const useAppTranslation = () => useTranslation();
