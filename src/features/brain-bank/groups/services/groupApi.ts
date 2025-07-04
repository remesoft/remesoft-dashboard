import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GroupProps } from "../types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const groupsApi = createApi({
  reducerPath: "groupApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    // GET groups by some ID
    getGroups: builder.query<GroupProps[], number>({
      query: (id) => `brain-bank/groups/${id}`,
    }),

    // ADD group
    addGroup: builder.mutation<GroupProps, { chapterId: number }>({
      query: (body) => ({
        url: "brain-bank/groups/create",
        method: "POST",
        body,
      }),
    }),

    // DELETE group
    deleteGroup: builder.mutation<void, number>({
      query: (groupId) => ({
        url: `brain-bank/groups/${groupId}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks
export const { useGetGroupsQuery, useAddGroupMutation, useDeleteGroupMutation } = groupsApi;
