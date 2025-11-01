import React, { use } from 'react';

const Users2 = ({usepromuse}) => {

    const usedata=use(usepromuse)

    console.log(usedata);

    return (
        <div>
            <h1>this is the users 2</h1>
        </div>
    );
};

export default Users2;