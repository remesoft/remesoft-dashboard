import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ChapterProps } from "../types";
import { GroupProps } from "../../groups/types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const chaptersApi = createApi({
  reducerPath: "chaptersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Chapters"], // ✅ Tag for cache tracking
  endpoints: (builder) => ({
    // ✅ GET all chapters for a book
    getChapters: builder.query<ChapterProps[], number>({
      query: (bookId) => `brain-bank/chapters/${bookId}`,
      providesTags: (result, error, bookId) => [{ type: "Chapters", id: bookId }],
    }),

    // ✅ GET groups inside a chapter (not tagged for now, unless needed)
    getGroups: builder.query<GroupProps[], number>({
      query: (id) => `brain-bank/chapters/${id}/groups`,
    }),

    // ✅ ADD chapter & invalidate chapter list for that book
    addChapter: builder.mutation<ChapterProps[], { bookId: number }>({
      query: (body) => ({
        url: "brain-bank/chapters/create",
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, { bookId }) => [{ type: "Chapters", id: bookId }],
    }),

    // ✅ DELETE chapter & invalidate chapter list
    deleteChapter: builder.mutation<{ status: boolean }, { chapterId: number; bookId: number }>({
      query: ({ chapterId }) => ({
        url: `brain-bank/chapters/${chapterId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { bookId }) => [{ type: "Chapters", id: bookId }],
    }),

    // ✅ UPDATE chapter & invalidate chapter list
    updateChapter: builder.mutation<ChapterProps[], { id: number; data: Partial<ChapterProps>; bookId: number }>({
      query: ({ id, data }) => ({
        url: `brain-bank/chapters/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { bookId }) => [{ type: "Chapters", id: bookId }],
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
