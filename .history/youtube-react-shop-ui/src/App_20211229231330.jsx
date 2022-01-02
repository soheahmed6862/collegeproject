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
    <Route path="/"  element={<Home />}/>
    <Route path="/"  element={<Home />}/>
    <Route path="/register"  element={<Register />}/>
    <Route path="/login"  element={<Login  />}/>

  </Routes>
  )
};

export default App;