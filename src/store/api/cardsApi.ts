import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_BASE_URL }),
    endpoints: (builder) => ({
        getCards: builder.query({
            query: () => ({
                url: '/api/cards',
                method: 'GET',
            }),
        }),
    })
})

export const { useGetCardsQuery } = cardsApi;