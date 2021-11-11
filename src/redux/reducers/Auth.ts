import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  loading: boolean;
  error: string;
  accessToken: string;
}

const initialState: IAuth = {
  loading: false,
  error: "",
  accessToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
});

export default authSlice.reducer;
