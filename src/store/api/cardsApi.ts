import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://real-estate-back-production.up.railway.app' }),
    endpoints: (builder) => ({
        getCards: builder.query({
            query: () => ({
                url: '/cards',
                method: 'GET',
            }),
        }),
    })
})

export const { useGetCardsQuery } = cardsApi