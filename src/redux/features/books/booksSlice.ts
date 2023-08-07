import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";

interface IRecentBook {
  books: IBook[];
  publicationRange: number;
}
const initialState: IRecentBook = {
  books: [],
  publicationRange: 1800,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    recentBooks: (state) => {
      state.books;
    },
    allBooks: (state) => {
      state.books;
    },
    setPublicationRange: (state, action: PayloadAction<number>) => {
      state.publicationRange = action.payload;
    },
  },
});
export const { recentBooks, allBooks, setPublicationRange } =
  booksSlice.actions;
export default booksSlice.reducer;
