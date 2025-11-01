import React from 'react';
import "./post.css"
import { Link, useNavigate } from 'react-router';

const Post = ({usedata}) => {
    const usenave=useNavigate();

    const Handelas =()=>{
       usenave(`/Posts/${id}`)
    }

    const{id,title}=usedata;
    return (
        <div className='cardpost'>
            <h4>{title}</h4>
            <Link to={`/Posts/${id}`} >

            <button className='btn'>Show More</button>
            
            </Link>

            
            <button onClick={Handelas}>  Use Now {id}</button>
            

        </div>
    );
};

export default Post;