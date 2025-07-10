import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export interface BookType {
  id: number;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  totalChapters: number;
  totalGroups: number;
  totalQuestions: number;
}

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    // get book query
    getBook: builder.query<BookType, number>({
      query: (id) => `brain-bank/books/${id}`,
    }),

    // get books query
    getBooks: builder.query<BookType[], void>({
      query: () => `brain-bank/books`,
    }),

    // create book query
    createBook: builder.mutation<BookType, FormData>({
      query: (formData) => ({
        url: "brain-bank/books/create",
        method: "POST",
        body: formData,
      }),
    }),

    // update book information
    updateBook: builder.mutation<BookType, { formData: FormData; bookId: number }>({
      query: ({ formData, bookId }) => ({
        url: `brain-bank/books/${bookId}`,
        method: "PATCH",
        body: formData,
      }),
    }),

    // delete book query
    deleteBook: builder.mutation<{ status: boolean }, number>({
      query: (id) => ({
        url: `brain-bank/books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateBookMutation,
  useGetBookQuery,
  useGetBooksQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
