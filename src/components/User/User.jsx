import React from 'react';
import './user.css'
import { Link } from 'react-router';

const User = ({use}) => {
    const {id,name,username,email,phone}=use
    return (
        <div className='card'>
                <h3>{name}</h3>
                <p>{username}</p>
                <p>Email:{email}</p>
                <p>Phone:{phone}</p>
                <Link to={`/Users/${id}`}>Show Id</Link>
        </div>
    );
};

export default User;