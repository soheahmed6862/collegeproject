import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {

  Routes,
  Route
} from "react-router-dom";
const App = () => {
  return (
  <Routes>
    <Route path="/"  element={<Home />}/>
    <Route path="/product/:id"  element={<Product />}/>
    <Route path="/products/:catagory"  element={<ProductList />}/>
    <Route path="/register"  element={<Register />}/>
    <Route path="/login"  element={<Login  />}/>
    <Route path="/Cart"  element={<Cart  />}/>

  </Routes>
  )
};

export default App;