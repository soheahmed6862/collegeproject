import React from 'react';
import { useSelector } from 'react-redux';
import { navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    console.log(children)

    const admin=useSelector(state =>console.log(state.user.currentuser))
    return (
        <div>
            {
                admin ? children : <navigate to="/Login" />
            }
        </div>
    );
};

export default Privateroute;