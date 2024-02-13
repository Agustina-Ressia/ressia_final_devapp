import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { base_url } from "../../Firebase/database"

export const rpApi = createApi({
    reducerPath:'rpApi',
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: (builder) => ({
        getPlaces: builder.query({
            query: () => `places.json`,
        }),
        getUsers: builder.query({
            query: () => `users.json`,
        }),
        getCategories: builder.query({
            query: () => "categories.json",
        }),
        getPlacesByCategory: builder.query({
            query: () => `places.json?orderBy="category"&equalTo="${category}"`,
        }),
        postPlaceImage: builder.mutation({
            query: ({placeFormatted }) => ({
                url:`places.json`,
                method:"PUT",
                body:placeFormatted
            }),
        }),
        getPlaceImage: builder.query({
            query: (localId) => `placeImage/${localId}.json`,
        }),                        
    })
})

export const {useGetCategoriesQuery, useGetPlacesQuery, useGetUsersQuery, useGetPlacesByCategoryQuery, usePostPlaceImageMutation,useGetPlaceImageQuery} = rpApi;