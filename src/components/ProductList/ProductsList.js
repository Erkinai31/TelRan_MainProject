import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import { baseUrl } from "../..";
import { fetchProducts } from "../../asyncAction/products";

function ProductsList() {
  let productsList = useSelector((store) => store.productsList.productsList);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="category_part">
      <div className="category_part_wrapper">
        <Header />
        <div className="all_categories">
          <div>
            <h3>Products</h3>
          </div>
          <div className="category_types">
            {productsList.map((elem) => (
              <div>
                <Link key={elem.id} to={`/products/${elem.id}`} className="category_text">  
                <img
                   src={baseUrl + elem.image}
                  alt="photo"
                  width="318"
                  height="330"
                />
                {elem.title}
                </Link>
                <div className="product_price">
                  <p className="price">{elem.price}$</p>
                  <p className="discont_price">{elem.discont_price}$</p>
                  <p className="percent">
                    -{Math.round(100 - (elem.discont_price * 100) / elem.price)}
                    %
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsList;
