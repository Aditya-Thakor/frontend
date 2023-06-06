import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: { token: "" },
  reducers: {
    addToken: (state, action) => ({ ...state, token: action.payload }),
  },
});

const { actions, reducer } = tokenSlice;

export const { addToken } = actions;
export default reducer;
