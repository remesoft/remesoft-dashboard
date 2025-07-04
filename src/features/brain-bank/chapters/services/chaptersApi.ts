import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ChapterProps } from "../types";
import { GroupProps } from "../../groups/types";
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

    // GET groups by some ID
    getGroups: builder.query<GroupProps[], number>({
      query: (id) => `brain-bank/chapters/${id}/groups`,
    }),

    // ADD group
    addChapter: builder.mutation<ChapterProps[], { bookId: number }>({
      query: (body) => ({
        url: "brain-bank/chapters/create",
        method: "POST",
        body,
      }),
    }),

    // Inside endpoints
    deleteChapter: builder.mutation<{ status: boolean }, number>({
      query: (id) => ({
        url: `brain-bank/chapters/${id}`,
        method: "DELETE",
      }),
    }),

    updateChapter: builder.mutation<ChapterProps[], { id: number; data: Partial<ChapterProps> }>({
      query: ({ id, data }) => ({
        url: `brain-bank/chapters/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetChaptersQuery,
  useGetGroupsQuery,
  useAddChapterMutation,
  useDeleteChapterMutation,
  useUpdateChapterMutation,
} = chaptersApi;
