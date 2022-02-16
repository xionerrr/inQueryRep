import { IComment } from './../models/IComment';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

import { IPost } from '../models/IPost';

interface CreatePostPayload {
    title: string,
    body: string
}

interface CreateCommentPayload {
    body: string,
    postId: number
}


const FETCH_URLS = {
    POSTS: `/posts`,
    COMMNETS: `/comments`
}

export const postAPI = createApi({
    reducerPath: "postAPI",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API }),
    tagTypes: ['Post', 'Comment'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], string>({
            query: () => ({
                url: `${FETCH_URLS.POSTS}`,
            }),
            providesTags: res => ['Post']
        }),
        fetchPost: build.query<IPost, string>({
            query: (id) => ({
                url: `${FETCH_URLS.POSTS}/${id}?_embed=comments`,
            }),
            providesTags: res => ['Post', 'Comment']
        }),
        createPost: build.mutation<IPost, CreatePostPayload>({
            query: (post) => ({
                url: `${FETCH_URLS.POSTS}`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        createComment: build.mutation<IComment, CreateCommentPayload>({
            query: (comment) => ({
                url: `${FETCH_URLS.COMMNETS}`,
                method: 'POST',
                body: comment
            }),
            invalidatesTags: ['Comment']
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `${FETCH_URLS.POSTS}/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        removePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `${FETCH_URLS.POSTS}/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        })
    })
})