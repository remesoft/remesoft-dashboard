import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ExtraProps } from "../types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const extraApi = createApi({
  reducerPath: "extraApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getExtra: builder.query<ExtraProps, number>({
      query: (id) => `brain-bank/extras/${id}`,
    }),

    // ADD group
    addExtra: builder.mutation<
      ExtraProps,
      {
        questionId: number;
        type: string;
        content: string;
      }
    >({
      query: (body) => ({
        url: "brain-bank/extras/create",
        method: "POST",
        body,
      }),
    }),

    // Inside endpoints
    deleteExtra: builder.mutation<{ status: boolean }, number>({
      query: (id) => ({
        url: `brain-bank/extras/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks
export const { useGetExtraQuery, useAddExtraMutation, useDeleteExtraMutation } = extraApi;
