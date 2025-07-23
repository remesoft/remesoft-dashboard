import { ExtraProps } from "../types";
import { baseApi } from "../../api";

export const extraApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    getExtra: builder.query<ExtraProps, number>({
      query: (id) => `brain-bank/extras/${id}`,
    }),

    // add extra information
    addExtra: builder.mutation<
      ExtraProps,
      {
        questionId: number;
        type: string | undefined;
        content: string | undefined;
      }
    >({
      invalidatesTags: ["questions"],
      query: (body) => ({
        url: "brain-bank/extras/create",
        method: "POST",
        body,
      }),
    }),

    updateExtra: builder.mutation<ExtraProps, Partial<ExtraProps>>({
      query: (body) => ({
        url: `brain-bank/extras/${body.questionId}`,
        method: "PATCH",
        body,
      }),
    }),

    // Inside endpoints
    deleteExtra: builder.mutation<{ status: boolean }, number>({
      invalidatesTags: ["questions"],
      query: (id) => ({
        url: `brain-bank/extras/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks
export const { useGetExtraQuery, useAddExtraMutation, useUpdateExtraMutation, useDeleteExtraMutation } = extraApi;
