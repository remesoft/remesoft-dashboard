import { ExtraProps } from "../types";
import { baseApi } from "../../api";

export const extraApi = baseApi.injectEndpoints({
  overrideExisting: false,
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
