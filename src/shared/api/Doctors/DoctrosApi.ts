import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { baseUrl } from 'shared/config/ApiConfig/ApiConfig';
import { IDoctor } from './types'
import { RootState } from 'app/store/store';





export const doctorsApi =  createApi({
    reducerPath: 'doctorsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,   
        
    }),
    tagTypes: ['Doctor'],
    endpoints: (build) => ({
        fetchAllDoctors: build.query<IDoctor[], any>({
            query: () => ({
                url: 'doctors/',
            }),
            providesTags: result => ['Doctor']
        }),
        fetchOneDoctor: build.mutation<IDoctor, any>({
            query: (id) => ({
                url: `doctor/${id}/`,
                method: "GET"
            }),
            invalidatesTags:  ['Doctor']

        }),
        addDoctor: build.mutation<IDoctor, FormData>({
            query: (body) => ({
                url: 'doctors/',
                method: 'POST',
                credentials: 'same-origin',
                body
            }),
            invalidatesTags:  ['Doctor']

        }),
        updateDoctor: build.mutation<void, [FormData, Pick<IDoctor, 'id'>] & Partial<IDoctor>>({
            query: ([patch, id]) => ({
              url: `doctor/${id}/`,
              method: 'PATCH',
              body: patch,
            }),
            invalidatesTags:  ['Doctor']

        }),
        deleteDoctor: build.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `doctor/${id}/`,
                 method: 'DELETE'
            }),
            invalidatesTags:  ['Doctor']

        })
    })
})
