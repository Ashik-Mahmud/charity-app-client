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
}

const initialState: initStateTypes = {
  user: {},
};

const loginUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<initStateInterface, any>) => {
      state.user = action.payload;
    },
  },
});

export default loginUserSlice.reducer;
export const { setUser } = loginUserSlice.actions;
