import React from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const API = 'https://jsonplaceholder.typicode.com/posts'
const POSTAPI = 'https://jsonplaceholder.typicode.com/posts'

const fetchPosts = async () => {
    const { data } = await axios.get(API);
    return data;
};

const addPost = async (newPost) => {
    const { data } = await axios.post(POSTAPI, newPost);
    return data;
};

const July10practice = () => {
    const queryClient = useQueryClient();

    const { data, isLoading, error } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });

    const mutation = useMutation({
        mutationFn: addPost,
        onSuccess: () => {
            queryClient.invalidateQueries(['posts']);
        },
    });

    const handleAddPost = () => {
        mutation.mutate({
            title: 'New Post',
            body: 'This is a new post',
            userId: 1,
        });
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <h3>July10practice</h3>
            <button onClick={handleAddPost}>Add Post</button>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
};

export default July10practice;