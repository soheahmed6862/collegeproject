import "./widgetLg.css";
import { useState, useEffect } from 'react';
import { userRequest } from "../../redux/requestmethod";

export default function WidgetLg() {
  const [order,setOrder]=useState([])
    console.log(order)

    useEffect(() =>{

      const getproduct=async()=>{

      try {
        const res= await  userRequest.get("/product/allproduct");
        setOrder(res.data)
        
      } catch (error) {
        console.log(error)
      }
      }
      getproduct()
    },[] )

  const Button = ({ type }) => {
    
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
   
     
     {
       order.map((order,key)=>(
        <tr className="widgetLgTr" key={order._id}>
        <td className="widgetLgUser">
          <img
            src={order.img}
            alt=""
            className="widgetLgImg"
          />
          <span className="widgetLgName">{order.userid}</span>
        </td>
        <td className="widgetLgDate">2 Jun 2021</td>
        <td className="widgetLgAmount">$122.00</td>
        <td className="widgetLgStatus">
          <Button type="Approved" />
        </td>
      </tr>
       ))
     }
        
      </table>
    </div>
  );
}
