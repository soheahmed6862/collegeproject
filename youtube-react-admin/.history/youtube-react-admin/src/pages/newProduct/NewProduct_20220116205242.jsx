import "./newProduct.css";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/apiCalls";
import { axios } from 'axios';

export default function NewProduct() {
const dispatch=useDispatch();
  const [ desc,setProductname] =useState()
  const [titles,setTitle] = useState()
  const [img,setimage]=useState()

  const handlechnage = (e) => {
    e.preventDefault();

    const postdata=async()=>{

      try {
        
        const res=await axios.post("http://localhost:5000/api/product/addproduct",{
          desc,titles
        })
        console.log(res.data)
      } catch (error) {
        
      }
    }
    postdata()
  }
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" onChange={(e)=>setimage(e.target.value)} name="image" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" onChange={(e)=>setProductname(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button onClick={handlechnage} className="addProductButton">Create</button>
      </form>
    </div>
  );
}
