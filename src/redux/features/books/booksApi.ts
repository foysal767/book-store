import { api } from "../../api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRecentBooks: builder.query({
      query: () => "/recent-book",
    }),
    getAllBooks: builder.query({
      query: () => "/all-books",
    }),
  }),
});
export const { useGetRecentBooksQuery, useGetAllBooksQuery } = booksApi;
