import { ChapterProps } from "../types";
import { GroupType } from "../../groups/types";
import { baseApi } from "../../api";

export const chaptersApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    getChapters: builder.query<ChapterProps[], number>({
      query: (bookId) => `brain-bank/chapters/${bookId}`,
      providesTags: ["chapters"],
    }),

    getGroups: builder.query<GroupType[], number>({
      providesTags: ["group"],
      query: (id) => `brain-bank/chapters/${id}/groups`,
    }),

    addChapter: builder.mutation<ChapterProps[], { bookId: number }>({
      query: (body) => ({
        url: "brain-bank/chapters/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["chapters", "books"],
    }),

    deleteChapter: builder.mutation<{ status: boolean }, { chapterId: number; bookId: number }>({
      query: ({ chapterId }) => ({
        url: `brain-bank/chapters/${chapterId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["chapters", "books"],
    }),

    updateChapter: builder.mutation<ChapterProps[], { id: number; data: Partial<ChapterProps>; bookId: number }>({
      query: ({ id, data }) => ({
        url: `brain-bank/chapters/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["chapters"],
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
