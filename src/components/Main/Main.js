import React, { useEffect } from "react";
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import "./Main.css";
import { fetchCategories} from "../../asyncAction/categories";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { baseUrl } from "../..";
import { fetchProducts } from "../../asyncAction/products";
import NewYearSale from "./newYearSale/NewYearSale";
import Discount from "./Discount/Discount";

function Main() {
  let categories = useSelector((store) => store.categoriesList.categoriesList);
  let products = useSelector((store) => store.productsList.productsList);
  let dispatch = useDispatch();
  let newCategory = categories.slice(0, 4);
  let newProduct = products.filter(elem=>elem.price-elem.discont_price!==0);
  let newProducts = newProduct.slice(0,3);

 

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  return (
    <div>
      <Header />
      <NewYearSale/>
      <div className="section_two">
        <div className="section_two_wrapper">
          <h3>Categories</h3>
          <Link to="/categories/all" className="btn_category">
            {" "}
            All categories
          </Link>
        </div>
        <div className="category_types">
          {newCategory.map((elem) => (
            <div>
              <img
                src={baseUrl + elem.image}
                alt="photo"
                width="310"
                height="280"
              />
              <p className="category_text">{elem.title}</p>
            </div>
          ))}
        </div>
      </div>
     <Discount/>
      <div>
        <div className="products_section">
          <h3>Stock</h3>
          <div className="products">
            {newProducts.map((elem) => (
              <div>
                <img
                  src={baseUrl + elem.image}
                  alt="photo"
                  width="319"
                  height="279"
                />
                <div className="product_price">
                  <p className="discont_price">{elem.discont_price}$</p>
                  <p className="price">{elem.price}$</p>
                  <p className="percent">
                    -{Math.round(100 - (elem.discont_price * 100) / elem.price)}
                    %
                  </p>
                </div>
                <Link
                  key={elem.id}
                  to={`/products/${elem.id}`}
                  className="product_title"
                >
                  {elem.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
