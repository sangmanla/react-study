import { createSlice } from "@reduxjs/toolkit";

const myReduxTestSlice = createSlice({
  name: "myReduxTest",
  initialState: { index: 0, text: "Hello, Redux!" },
  reducers: {
    addIndex(state) {
      state.index++;
    },
    subIndex(state) {
      state.index--;
    },
    addText(state, action) {
      state.text += action.payload;
    },
  },
});

export const { addIndex, subIndex, addText } = myReduxTestSlice.actions;
export default myReduxTestSlice.reducer;
