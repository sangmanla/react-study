import { createSlice } from "@reduxjs/toolkit";

const activeMenuSlice = createSlice({
  name: "activeMenu",
  initialState: { activeMenu: { path: "/", label: "Home" } },
  reducers: {
    setActiveMenu(state, action) {
      state.activeMenu = action.payload;
    },
  },
});

export const { setActiveMenu } = activeMenuSlice.actions;
export default activeMenuSlice.reducer;
