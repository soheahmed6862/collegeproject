import React from 'react'
import { useLocation } from 'react-router-dom';
import "./succsee.css"

function Success() {
    const location=useLocation()
    console.log(location.state)
    console.log("asdfasdfasdfasfdafs")
    return (
        <div className="succsess">
          <div className="card">
        <div className="inner_box">
            
        <div className="card_fonts">
      
        <p>product_id: {location.state.id} </p>
        <p>price:{location.state.amount}</p>
        </div>

        </div>
          </div>


            
        </div>
    )
}

export default Success;