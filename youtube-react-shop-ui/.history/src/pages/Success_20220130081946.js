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
              <h4>mapent is success</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi 
          impedit dolor eligendi blanditiis quisquam vel iusto temporibus laborum nihil odio?
      </p>
       <div>
       <p>product_id:{location.state.id} </p>
       </div>
        <p>price:{location.state.amount}</p>
        <p>balance_transaction:{location.state.balance_transaction}</p>
        </div>

        </div>
          </div>


            
        </div>
    )
}

export default Success;