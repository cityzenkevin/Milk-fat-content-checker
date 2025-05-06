import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./features";

export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
