import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import myReduxTestReducer from "./reducers/myReduxTestReducer";
import activeMenuReducer from "./reducers/activeMenuReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    myReduxTest: myReduxTestReducer,
    activeMenu: activeMenuReducer,
  },
});

export default store;
