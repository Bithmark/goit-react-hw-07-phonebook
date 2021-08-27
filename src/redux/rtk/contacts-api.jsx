import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  tagTypes: ["contacts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://611bfe4c22020a00175a4834.mockapi.io/api/v1/",
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["contacts"],
    }),
    addContacts: builder.mutation({
      query: (contact) => ({
        url: "/contacts",
        method: "POST",
        body: { ...contact },
      }),
      invalidatesTags: ["contacts"],
    }),
    deleteContacts: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = contactsApi;
