import React, { Suspense, useState } from 'react';
import './user.css'
import { Link, Navigate, useLocation } from 'react-router';
import UsersDut2 from '../UsersDut2/UsersDut2';

const User = ({use}) => {
    const [showinfo,setshowinfo]=useState(false);
    const [visited,stevisited]=useState(false);
    const location= useLocation();
    console.log(location);
    const {id,name,username,email,phone}=use;
    const UsersPromis=fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>res.json())
    if(visited){
       return <Navigate to="/"></Navigate>
    }
    return (
        <div className='card'>
                <h3>{name}</h3>
                <p>{username}</p>
                <p>Email:{email}</p>
                <p>Phone:{phone}</p>
                <Link to={`/Users/${id}`}>Show Id</Link>
                <button onClick={()=>setshowinfo(!showinfo)}>{showinfo? "Hide" : "Show"} info</button>
                <button onClick={()=>stevisited(true)}>Go Home</button>
                {
                    showinfo && <Suspense fallback={<span>....loding</span>}>
                        <UsersDut2 UsersPromis={UsersPromis}></UsersDut2>
                    </Suspense>
                }
        </div>
    );
};

export default User;