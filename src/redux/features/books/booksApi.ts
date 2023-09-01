import { IBook } from "../../../types/globalTypes";
import { api } from "../../api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRecentBooks: builder.query({
      query: () => "/recent-book",
      providesTags: [{ type: "books" }],
    }),
    getAllBooks: builder.query({
      query: () => "/all-books",
      providesTags: [{ type: "books" }],
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
      providesTags: [{ type: "books" }, "comment"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "books" }],
    }),
    bookComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),
    bookEdit: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [{ type: "books" }],
    }),
    addNewBook: builder.mutation<IBook, Partial<IBook>>({
      query: (newBook) => ({
        url: "/book",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: [{ type: "books" }],
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ["comment"],
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
  useDeleteBookMutation,
  useBookEditMutation,
} = booksApi;
