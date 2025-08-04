import { ChapterProps } from "../types";
import { GroupType } from "../../groups/types";
import { baseApi } from "../../api";

export const chaptersApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    /*-----------------------------------------
          GET ALL CHAPTER
    -----------------------------------------*/
    getChapters: builder.query<ChapterProps[], number>({
      query: (bookId) => `brain-bank/chapters/${bookId}`,
      providesTags: ["chapters"],
    }),

    /*-----------------------------------------
          GET SINGLE CHAPTER
    -----------------------------------------*/
    getGroups: builder.query<GroupType[], number>({
      providesTags: ["group"],
      query: (id) => `brain-bank/chapters/${id}/groups`,
    }),

    /*-----------------------------------------
          ADD NEW CHAPTER
    -----------------------------------------*/
    addChapter: builder.mutation<ChapterProps[], { bookId: number }>({
      query: (body) => ({
        url: "brain-bank/chapters/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["chapters", "books"],
    }),

    /*-----------------------------------------
         DELETE CHAPTER
    -----------------------------------------*/
    deleteChapter: builder.mutation<{ status: boolean }, { chapterId: number; bookId: number }>({
      query: ({ chapterId }) => ({
        url: `brain-bank/chapters/${chapterId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["chapters", "books"],
    }),

    /*-----------------------------------------
         UPDATE CHAPTER
    -----------------------------------------*/
    updateChapter: builder.mutation<ChapterProps[], { id: number; bookId: number; data: Partial<ChapterProps> }>({
      query: ({ id, data }) => ({
        url: `brain-bank/chapters/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["chapters"],
    }),
  }),
});

// Export Chapters Hooks
export const {
  useGetChaptersQuery, // Get Chapter Information Hook
  useGetGroupsQuery, // Get Group Information Hook
  useAddChapterMutation, // Add Chapter Information Hook
  useDeleteChapterMutation, // Delete Chapter Information Hook
  useUpdateChapterMutation, // Update Chapter Information Hook
} = chaptersApi;
