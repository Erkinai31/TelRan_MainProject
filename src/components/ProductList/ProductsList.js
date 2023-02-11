import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import { baseUrl } from "../..";
import { fetchProducts } from "../../asyncAction/products";
import { filterProductsAction, sortProductsAction } from "../../store/productsReducer";

function ProductsList() {
  let productsList = useSelector((store) => store.productsList.productsList).filter(elem=>elem.show);
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
          <div className="filtration">
              <div className="price_filtration">
                <p>Price</p>
                <input type="number" placeholder="from" />
                <input type="number" placeholder="to" />
              </div>
              <div className="checkbox">
                <p>Items on sale</p>
                <input onChange={(e) => dispatch(filterProductsAction(e.target.checked))} type={'checkbox'}/>
              </div>
              <div className="select_filtration">
                <p>Sort:</p>
                <select onChange={(e) => dispatch(sortProductsAction(e.target.value))}>
                  <option value={0}>default</option>
                  <option value={1}>Price Descending</option>
                  <option value={2}>Ascending price</option>
                  <option value={3}>alphabetically</option>
                </select>
              </div>
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
                <div>
                    {(elem.price - elem.discont_price != 0) ?
                    <div className="product_price">
                    <p className="discont_price">{elem.discont_price}$</p>
                    <p className="price">{elem.price}</p>
                    <p className="percent">
                    -
                    {Math.round(
                      100 - (elem.discont_price * 100) / elem.price
                    )}
                    %
                  </p>
                      </div>:<p className="discont_price">{elem.price}$</p>}
                   
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
