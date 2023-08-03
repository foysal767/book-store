import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";

interface IRecentBook {
  books: IBook[];
}
const initialState: IRecentBook = {
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    recentBooks: (state) => {
      state.books;
    },
  },
});
export const { recentBooks } = booksSlice.actions;
export default booksSlice.reducer;
