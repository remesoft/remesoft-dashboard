// services/questionsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { QuestionProps } from "../types";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const questionsApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getQuestion: builder.query<QuestionProps[], number>({
      query: (groupId) => `brain-bank/questions/${groupId}`,
    }),

    // create question
    createQuestion: builder.mutation<any, { groupId: number }>({
      query: (body) => ({
        url: `brain-bank/questions/create`,
        method: "POST",
        body,
      }),
    }),

    // update answer mutation
    updateAnswer: builder.mutation<any, { questionId: number; answer: number }>({
      query: ({ questionId, answer }) => ({
        url: `brain-bank/questions/${questionId}`,
        method: "PATCH",
        body: { answer },
      }),
    }),
  }),
});

export const { useGetQuestionQuery, useUpdateAnswerMutation, useCreateQuestionMutation } = questionsApi;
