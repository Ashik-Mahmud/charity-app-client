import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initStateInterface {
  name: string;
  email: string;
  phone?: string;
  gender?: string;
  username: string;
  createdAt: string;
  password: string;
  _v: number;
  _id: string;
}

interface initStateTypes {
  user: initStateInterface | {};
  loading: boolean;
}

const initialState: initStateTypes = {
  user: {},
  loading: false,
};

const loginUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUser: (state, action: PayloadAction<initStateInterface>) => {
      state.user = action.payload;
    },
  },
});

export default loginUserSlice.reducer;
export const { setUser, getUser } = loginUserSlice.actions;
