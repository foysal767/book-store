import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-app-server.vercel.app/",
  }),
  tagTypes: ["comment", "books"],
  endpoints: () => ({}),
});
