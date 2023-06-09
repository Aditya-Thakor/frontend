import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const offerSlice = createSlice({
  name: "offer",
  initialState: [],
  reducers: {
    addOfferAction: (state: any, action: PayloadAction<object>) => {
      console.log(action.payload);
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = offerSlice;

export const { addOfferAction } = actions;
export default reducer;
