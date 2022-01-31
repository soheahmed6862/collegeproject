import React from 'react'
import { useLocation } from 'react-router-dom';

function Success() {
    const location=useLocation()
    console.log(location.state)
    console.log("asdfasdfasdfasfdafs")
    return (
        <div>
            <h1>payment is success</h1>
        </div>
    )
}

export default Success;