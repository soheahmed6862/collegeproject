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

const Products = ({filter,sort,path}) => {

  const [product,setproduct]=useState({});
  const [filters,setFilters]=useState({})
 console.log(product)
 useEffect(() => {
const getProduct=async() =>{
try {
  const res=await axios.get("http://localhost:5000/api/product/allproduct");

  setproduct(res.data)
} catch (error) {
  
  console.error(error)
}


}
getProduct()

 })

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
