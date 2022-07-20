import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<appDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
