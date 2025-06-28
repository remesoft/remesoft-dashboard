import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GroupProps } from "../types";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const groupsApi = createApi({
  reducerPath: "groupApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    // get book query
    getGroups: builder.query<GroupProps[], number>({
      query: (id) => `brain-bank/groups/${id}`,
    }),
  }),
});

export const { useGetGroupsQuery } = groupsApi;
