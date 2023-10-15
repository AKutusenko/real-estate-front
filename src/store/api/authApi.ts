import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_BASE_URL }),
    endpoints: (builder) => ({
        addUsers: builder.query({
            query: () => ({
                url: '/auth/signup',
                method: 'POST',
            }),
        }),
    })
})

export const { useAddUsersQuery } = authApi;