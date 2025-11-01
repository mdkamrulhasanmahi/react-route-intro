import React, { use } from 'react';

const UsersDut2 = ({UsersPromis}) => {
    const {name,username}=use(UsersPromis)
    return (
        <div>
            <p><small>User Name : {username}</small></p>
            <p>{name}</p>
        </div>
    );
};

export default UsersDut2;