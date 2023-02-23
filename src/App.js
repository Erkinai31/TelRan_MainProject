import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import Category from "./components/Category/CategoriesList";
import CategoryTypes from "./components/categoryTypes/CategoryTypes";
import Product from "./components/ProductList/Product";
import Basket from "./components/Basket/Basket";
import { useRef } from "react";

function App() {
  const ref = useRef(null);

 
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main ref={ref} />} />
        <Route path="/categories/all" element={<Category />} />
        <Route path="/products/all" element={<CategoryTypes />} />
        <Route path="/categories/:id" element={<CategoryTypes />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}
export default App;
