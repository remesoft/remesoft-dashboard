import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ChapterProps } from "../types";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const chaptersApi = createApi({
  reducerPath: "chaptersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    // get book query
    getChapters: builder.query<ChapterProps[], number>({
      query: (id) => `brain-bank/chapters/${id}`,
    }),
  }),
});

export const { useGetChaptersQuery } = chaptersApi;
