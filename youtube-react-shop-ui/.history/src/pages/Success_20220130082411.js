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
              <h4 style={{textAlign: 'center', textTransform:"uppercase", color:"green", marginBottom:"10px"}}> paymant is success</h4>

       <div>
       <p style={{color:"green", marginBottom:"10px"}}>product_id:{location.state.id} </p>
       </div>
        <p style={{color:"green", marginBottom:"10px"}}> price:{location.state.amount}</p>
        <p style={{color:"green", marginBottom:"10px"}}>balance_transaction:{location.state.balance_transaction}</p>
        </div>

        </div>
          </div>


            
        </div>
    )
}

export default Success;