import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({filters,sort,path}) => {
  console.log(filters)


  const [product,setproduct]=useState({});
  const [prouctfilters,setFilters]=useState({})
 console.log(product)
 useEffect(() => {
const getProduct=async() =>{
try {
  const res=await axios.get(path ?`http://localhost:5000/api/product/allproduct?category=${path}`:
  "http://localhost:5000/api/product/allproduct?category");

  setproduct(res.data)
} catch (error) {
  
  console.error(error)
}


}
getProduct()

 },[path]);

//  useEffect(() => {
//    path && setFilters(

//     product.filter(item=>console.log(item))
//    )
//  },[product,filters,path]);

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
