import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_BASE_URL }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (body: { firstName: string, lastName: string, email: string; password: string }) => {
                return {
                    url: '/api/auth/signip',
                    method: 'post',
                    body,
                };
            },
        }),

        signIn: builder.mutation({
            query: (body: { email: string; password: string }) => {
                return {
                    url: '/api/auth/signup',
                    method: 'post',
                    body,
                };
            },
        }),

    })
})

export const { useSignUpMutation, useSignInMutation } = authApi;