import { createSlice } from "@reduxjs/toolkit";

const rolesSlice = createSlice({
  name: "roles",
  initialState: { role: "", permission: ["edit", "add"] },
  reducers: {
    addRoles: (state, action) => ({ ...state, ...action.payload }),
  },
});

const { actions, reducer } = rolesSlice;

export const { addRoles } = actions;
export default reducer;
