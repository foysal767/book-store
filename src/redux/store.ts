import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import booksReducer from "./features/books/booksSlice";
import userReducer from "./features/users/usersSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
