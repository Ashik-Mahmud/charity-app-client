import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import loginUserReducer from "../Features/LoginUser/LoginUserSlice";

const store = configureStore({
  reducer: {
    loginUser: loginUserReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<appDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
