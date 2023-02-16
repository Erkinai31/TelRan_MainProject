import Main from "./components/Main/Main";
import {Route,Routes } from "react-router-dom";
import Category from "./components/Category/CategoriesList";
import ProductsList from "./components/ProductList/ProductsList";
import CategoryTypes from "./components/categoryTypes/CategoryTypes";
import Product from "./components/ProductList/Product";
import Basket from "./components/Basket/Basket";

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/categories/all' element={<Category/>}/>
          <Route path='/products/all' element={<ProductsList/>}/>
          <Route path='/categories/:id' element={<CategoryTypes/>}/>
          <Route path='/products/:id' element={<Product/>} />
          <Route path='/basket' element={<Basket/>}/>
        </Routes>
    </div>
  );
}

export default App;
