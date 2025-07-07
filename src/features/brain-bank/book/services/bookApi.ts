import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export interface BookType {
  id: number;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    // create book query
    createBook: builder.mutation<BookType, FormData>({
      query: (formData) => ({
        url: "brain-bank/books/create",
        method: "POST",
        body: formData,
      }),
    }),

    // get book query
    getBook: builder.query<BookType, number>({
      query: (id) => `brain-bank/books/${id}`,
    }),

    getBooks: builder.query<BookType[], void>({
      query: () => `brain-bank/books`,
    }),
  }),
});

export const { useCreateBookMutation, useGetBookQuery, useGetBooksQuery } = bookApi;
