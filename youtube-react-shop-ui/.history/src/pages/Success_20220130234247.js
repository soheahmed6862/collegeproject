import React ,{ useRef } from 'react'
import { useLocation } from 'react-router-dom';
import "./succsee.css"
import { useReactToPrint } from "react-to-print";
function Success() {
     const componentRef= useRef();
     const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

    const location=useLocation()
 console.log(location)


    return (
        <div className="succsess">
          <div className="cards">
        <div ref={componentRef}className="inner_box">
            
        <div  className="card_fonts">
              <h4 style={{textAlign: 'center', textTransform:"uppercase", color:"green", marginBottom:"10px"}}> paymant is success</h4>

       <div>
       <p style={{color:"green", marginBottom:"10px"}}>product_id:{location.state.id} </p>
       </div>
        <p style={{color:"green", marginBottom:"10px"}}> price:{location.state.amount}</p>
        <p style={{color:"green", marginBottom:"10px"}}>balance_transaction:{location.state.balance_transaction}</p>
         <button onClick={handlePrint} className="print__button">  Print </button> 
        </div>

        </div>
          </div>
        </div>

    ////////////////////////////////////////////////////////////////////////////////////////////////

    // <div>
        
    //     <button onClick={handlePrint} className="print__button">  Print </button> 
    //     <div ref={componentRef} className="card">
    //         <div class="float__start">
    //           <h3 class="card-title mb-0">Information</h3>
    //         </div>
    //         <hr />
    //         <div class="float__infoss">
    //           <ul>
    //             <li> Name : <span> Dr Andrew C S Koh </span> </li>
    //             <li> Email : <span> Andrew@gmail.com </span> </li>
    //             <li> Gender : <span> Male </span> </li>
    //             <li> Date of Birth : <span> 07-24-1982</span> </li>
    //             <li> Phone No: <span> </span> 9856231456 </li>
    //             <li> Address : <span> 26 Wyle Cop, Shrewsbury, Shropshire, SY1 1XD </span> </li>
    //             <li> Website : <span> www.Andrew.com </span> </li>
    //             <li> Country : <span> United states </span> </li> 
    //           </ul>
    //         </div>
    //       </div>
      
    // </div>
    )
}

export default Success;