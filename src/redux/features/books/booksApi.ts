import { api } from "../../api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRecentBooks: builder.query({
      query: () => "/recent-book",
    }),
  }),
});
export const { useGetRecentBooksQuery } = booksApi;
