import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { IUser, UserState } from './types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrlAuth } from 'shared/config/ApiConfig/ApiConfig';



export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrlAuth,
        
    }),
    endpoints: (build) => ({
        getToken: build.mutation<IUser, FormData>({
            query: (data) => ({
                url: 'token/',
                method: 'POST',
                data
            }),
            transformResponse: (response: IUser) => {
                console.log(response)
                return response
            },
            
        }),
        refreshToken: build.mutation<IUser, FormData>({
            query: (data) => ({
                url: 'token/refresh/',
                method: 'POST',
            }),
        }),
    })
})


// userApi.middleware((getDefaultMiddleware) => 
//     getDefaultMiddleware().concat(()=>({

//     }))

// )