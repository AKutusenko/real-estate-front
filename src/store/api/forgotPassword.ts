import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const forgotPasswordApi = createApi({
    reducerPath: 'forgotPasswordApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_BASE_URL }),
    endpoints: (builder) => ({
        sendEmail: builder.mutation({
            query: (body: { email: string; }) => {
                return {
                    url: '/api/forgotpassword',
                    method: 'post',
                    body,
                };
            },
        })
    })
})

export const { useSendEmailMutation } = forgotPasswordApi;