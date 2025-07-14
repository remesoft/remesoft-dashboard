import { QuestionProps } from "../types";
import { baseApi } from "@/features/brain-bank/api";

export const questionsApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    getQuestion: builder.query<QuestionProps[], number>({
      query: (groupId) => `brain-bank/questions/${groupId}`,
      providesTags: (result, error, groupId) =>
        result ? [{ type: "questions", id: groupId }] : [{ type: "questions" }],
    }),

    createQuestion: builder.mutation<any, { groupId: number }>({
      query: (body) => ({
        url: `brain-bank/questions/create`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["questions", "books"],
    }),

    // update answer mutation
    updateAnswer: builder.mutation<any, { questionId: number; answer: number }>({
      query: ({ questionId, answer }) => ({
        url: `brain-bank/questions/${questionId}`,
        method: "PATCH",
        body: { answer },
      }),

      invalidatesTags: ["questions"],
    }),

    // Inside endpoints
    deleteQuestion: builder.mutation<{ status: boolean }, number>({
      query: (id) => ({
        url: `brain-bank/questions/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["questions"],
    }),
  }),
});

export const { useGetQuestionQuery, useUpdateAnswerMutation, useCreateQuestionMutation, useDeleteQuestionMutation } =
  questionsApi;
