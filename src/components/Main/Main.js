import React, { useEffect } from "react";
import Header from "../Header/Header";
import mainImg from "../img/image2.svg";
import { useSelector, useDispatch } from "react-redux";
import "./Main.css";
import { fetchCategory} from "../../asyncAction/category";
import saleImg from "../img/image3.svg";
import { fetchProducts } from "../../asyncAction/products";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom"

function Main() {
  let categories = useSelector((store) => store.categories.categories);
  let products = useSelector((store) => store.products.products);
  let dispatch = useDispatch();
  let newCategory = categories.slice(0, 4);
  let newProducts = products.slice(0, 3);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  

  return (
    <div>
      <Header />
      <div className="section_one">
        <div className="section_one_wrapper">
          <h1>New year sale</h1>
          <div>
            <button className="btn btn_sale">all sales</button>
            <button className="btn btn_more">more</button>
          </div>
        </div>
        <div>
          <img src={mainImg} width="900" height="600" />
        </div>
      </div>
      <div className="section_two">
        <div className="section_two_wrapper">
          <h3>Categories</h3>
          <Link to='/category' className="btn_category"> All categories</Link>
        </div>
        <div className="category_types">
          {newCategory.map((elem) => (
            <div>
              <img
                src={`http://localhost:3333${elem.image}`}
                alt="photo"
                width="318"
                height="330"
              />
              <p className="category_text">{elem.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="sale_section">
        <div className="sale_section_wrapper">
          <img src={saleImg} width="422" height="422" />
          <div className="sale_section_text">
            <p>Discount 5% </p>
            <span className="sale_subtitle">for the first order</span>
            <input type="number" placeholder="+49" />
            <button>Get a discount</button>
          </div>
        </div>
      </div>
      <div>
        <div className="products_section">
          <h3>Stock</h3>
          <div className="products">
            {newProducts.map((elem) => (
              <div>
                <img
                  src={`http://localhost:3333${elem.image}`}
                  alt="photo"
                  width="319"
                  height="279"
                />
                <div className="product_price">
                  <p className="price">{elem.price}$</p>
                  <p className="discont_price">{elem.discont_price}$</p>
                  <p className="percent">-{elem.nprice}%</p>
                </div>
                <p className="product_title">{elem.title}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Main;
