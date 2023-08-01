import { api } from "../../api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRecentBooks: builder.query({
      query: () => "/books",
    }),
  }),
});
export const { useGetRecentBooksQuery } = booksApi;
