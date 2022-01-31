import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    console.log(children)

    const admin=useSelector(state =>console.log(state.user.currentuser))
    return (
        <div>
            {
                admin ? children : <Navigate to="/Login" />
            }
        </div>
    );
};

export default Privateroute;