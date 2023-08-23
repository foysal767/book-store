import { IBook } from "../../../types/globalTypes";
import { api } from "../../api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRecentBooks: builder.query({
      query: () => "/recent-book",
    }),
    getAllBooks: builder.query({
      query: () => "/all-books",
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    bookComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["comments"],
    }),
    addNewBook: builder.mutation<IBook, Partial<IBook>>({
      query: (newBook) => ({
        url: "/book",
        method: "POST",
        body: newBook,
      }),
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      // providesTags: ["comments"],
    }),
  }),
});
export const {
  useGetRecentBooksQuery,
  useGetAllBooksQuery,
  useAddNewBookMutation,
  useSingleBookQuery,
  useBookCommentMutation,
  useGetCommentQuery,
} = booksApi;
