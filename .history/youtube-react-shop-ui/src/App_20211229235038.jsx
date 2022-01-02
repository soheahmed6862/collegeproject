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
const App = () => {
  const user=true
  return (
  <Routes>
    <Route path="/"  element={<Home />}/>
    <Route path="/product/:id"  element={<Product />}/>
    <Route path="/products/:catagory"  element={<ProductList />}/>
    <Route path="/register"  element={user? <Navigate to="/"/> :<Register/> }/>
    <Route path="/login"  element={user? <Navigate to="/"/> :<Login/> }/>
    <Route path="/Cart"  element={<Cart/>}/>

  </Routes>
  )
};

export default App;