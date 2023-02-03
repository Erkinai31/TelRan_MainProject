import Main from "./components/Main/Main";
import { HashRouter, Route,Routes } from "react-router-dom";
import Category from "./components/Category/Category";
import ProductsList from "./components/ProductList/ProductsList";
import CategoryTypes from "./components/categoryTypes/CategoryTypes";
import Products from "./components/ProductList/Product";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/productsList' element={<ProductsList/>}/>
          <Route path='/categoryTypes' element={<CategoryTypes/>}/>
          <Route path='/products' element={<Products/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
