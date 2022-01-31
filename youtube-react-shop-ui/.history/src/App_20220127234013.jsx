import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  Navigate ,
  Routes,
  Route
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from 'react-redux';
import Test from "./pages/Test";
const App = () => {

  const user=false
  return (
  <Routes>
    <Route path="/"  element={<Home />}/>
    <Route path="/product/:id"  element={<Product />}/>
    <Route path="/products/:catagory"  element={<ProductList />}/>
    <Route path="/register"  element={user? <Navigate to="/"/> :<Register/> }/>
    <Route path="/login"  element={user? <Navigate to="/"/> :<Login/> }/>
    <Route path="/Cart"  element={<Cart/>}/>
    <Route path="/success" element={<Success />}/>
    <Route path="/test" element={<Test/>}/> 
  </Routes>
  )
};

export default App;