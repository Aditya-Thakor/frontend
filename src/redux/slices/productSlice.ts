import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addProductAction: (state: any, action: PayloadAction<object>) =>
      void state.push(action.payload),
  },
});

const { actions, reducer } = productSlice;

export const { addProductAction } = actions;
export default reducer;
