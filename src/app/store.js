import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//Global store set up
export const store = configureStore({
    reducer: {
      basket: basketReducer,
    },
  });