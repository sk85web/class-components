import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../../constants';

export const cardAPI = createApi({
  reducerPath: 'cardAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getAllCards: builder.query({
      query: ({ query, currentPage }) => ({
        url: '/people/',
        params: { search: query, page: currentPage },
      }),
    }),
    getCardById: builder.query({
      query: id => ({
        url: `/people/${id}/`,
      }),
    }),
  }),
});

export const { useGetAllCardsQuery, useGetCardByIdQuery } = cardAPI;
