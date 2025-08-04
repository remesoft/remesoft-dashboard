import { ExtraProps } from "../types";
import { baseApi } from "../../api";

export const extraApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    /* --------------------------------------
        Get Extra Information
    --------------------------------------- */
    getExtra: builder.query<ExtraProps, number>({
      providesTags: ["extra"],
      query: (id) => `brain-bank/extras/${id}`,
    }),

    /* --------------------------------------
        Add Extra Information
    --------------------------------------- */
    addExtra: builder.mutation<
      ExtraProps,
      {
        questionId: number;
        type: string | undefined;
        content: string | undefined;
      }
    >({
      invalidatesTags: ["questions", "extra"],
      query: (body) => ({
        url: "brain-bank/extras/create",
        method: "POST",
        body,
      }),
    }),

    /* --------------------------------------
        Update Extra Information
    --------------------------------------- */
    updateExtra: builder.mutation<ExtraProps, Partial<ExtraProps>>({
      invalidatesTags: ["extra"],
      query: (body) => ({
        url: `brain-bank/extras/${body.questionId}`,
        method: "PATCH",
        body,
      }),
    }),

    /* --------------------------------------
        Delete Extra Information
    --------------------------------------- */
    deleteExtra: builder.mutation<{ status: boolean }, number>({
      invalidatesTags: ["questions", "extra"],
      query: (id) => ({
        url: `brain-bank/extras/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks
export const {
  useGetExtraQuery, // Get Extra Information Hook
  useAddExtraMutation, // Add Extra Information Hook
  useUpdateExtraMutation, // Update Extra Information Hook
  useDeleteExtraMutation, // Delete Extra Information Hook
} = extraApi;
