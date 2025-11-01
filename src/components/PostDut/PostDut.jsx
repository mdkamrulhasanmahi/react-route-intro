import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDut = () => {
    const users= useLoaderData();
    const Navagiton=useNavigate();
    return (
        <div>
           <h5>{users.title}</h5>
           <p>{users.body}</p>
           <button onClick={()=> Navagiton(-1)}>Go Back</button>
        </div>
    );
};

export default PostDut;