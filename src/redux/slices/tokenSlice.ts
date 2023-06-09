import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "authToken",
  initialState: { token: "", role: "" },
  reducers: {
    addToken: (state, action) => ({ ...state, ...action.payload }),
  },
});

const { actions, reducer } = tokenSlice;

export const { addToken } = actions;
export default reducer;
