import React from 'react';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    console.log(children)

    const admin=true;
    return (
        <div>
            {
                admin ? children : <Navigate to="/Login" />
            }
        </div>
    );
};

export default Privateroute;