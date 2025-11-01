import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const users=useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>this is a users</h1>

            {
                users.map(use=> <User use={use}></User>)
            }
        </div>
    );
};

export default Users;