import { GroupType } from "../types";
import { baseApi } from "../../api";

export const groupApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    // GET groups by some ID
    getGroup: builder.query<{ id: number; name: string }, number>({
      query: (id) => {
        return `brain-bank/groups/${id}`;
      },
    }),

    // ADD group
    addGroup: builder.mutation<GroupType, { chapterId: number }>({
      invalidatesTags: ["books", "group"],
      query: (body) => ({
        url: "brain-bank/groups/create",
        method: "POST",
        body,
      }),
    }),

    // DELETE group
    deleteGroup: builder.mutation<void, number>({
      invalidatesTags: ["books", "group"],
      query: (groupId) => ({
        url: `brain-bank/groups/${groupId}`,
        method: "DELETE",
      }),
    }),

    updateGroup: builder.mutation<GroupType, { id: number; name: string }>({
      invalidatesTags: ["group"],
      query: ({ id, name }) => ({
        url: `brain-bank/groups/${id}`,
        method: "PATCH",
        body: name,
      }),
    }),
  }),
});

// Export hooks
export const { useGetGroupQuery, useAddGroupMutation, useDeleteGroupMutation, useUpdateGroupMutation } = groupApi;
