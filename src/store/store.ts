import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
const store = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: moviesReducer,
  },
});

export default store;
