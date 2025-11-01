import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const Userdut = () => {

    const user=useLoaderData();
     
    const{website,name}=user;

    const nagi=useNavigate();

    console.log(user);
    return (
        <div>
            <h3>this is the not users</h3>
            <h5>name: {name}</h5>
            <h4>Website:  {website}</h4>
            <button onClick={()=> nagi(-1)}>Go Back</button>
        </div>
    );
};

export default Userdut;