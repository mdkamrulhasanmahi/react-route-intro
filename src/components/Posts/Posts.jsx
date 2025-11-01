import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {

    const user=useLoaderData()


    return (
        <div>
            <h3>posts no the post ::::{user.length}</h3>

            {
                user.map(usedata=> <Post usedata={usedata}></Post>)
            }
        </div>
    );
};

export default Posts;