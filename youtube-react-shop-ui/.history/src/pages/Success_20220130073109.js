import React from 'react'
import { useLocation } from 'react-router-dom';
import "./succsee.css"

function Success() {
    const location=useLocation()
    console.log(location.state)
    console.log("asdfasdfasdfasfdafs")
    return (
        <div className="succsess">
          <div className="cart">
              
          </div>

            <h1>product id {location.state.id}</h1>
            
        </div>
    )
}

export default Success;