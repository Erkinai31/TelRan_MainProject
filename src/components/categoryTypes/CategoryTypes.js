/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../..";
import { fetchCategories} from "../../asyncAction/categories";
import { fetchCategory } from "../../asyncAction/category";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./CategoryTypes.css";

export default function CategoryTypes() {
  let dispatch = useDispatch();
  let { id } = useParams();
  const category = useSelector((store) => store.category.category);
  const categories = useSelector(
    (store) => store.categoriesList.categoriesList
  ).find((elem) => elem.id == id);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCategory(id));
  }, []);

  return (
    <div className="category_part">
      <div className="category_part_wrapper">
        <Header />
        <div className="all_categories">
          <div className="filtration">
            <div className="price_filtration">
              <p>Price</p>
              <input type="number" placeholder="from" />
              <input type="number" placeholder="to" />
            </div>
            <div className="checkbox">
              <p>Items on sale</p>
              <input type="checkbox" />
            </div>
            <div className="select_filtration">
              <p>Sort:</p>
              <select>
                <option>default</option>
              </select>
            </div>
          </div>
          <div>
            <h3>{id != "all" ? categories?.title : "All products"}</h3>
            <div className="category_types">
              {category.map((elem) => (
                <div key={elem.id}>
                  <img
                    src={baseUrl + elem.image}
                    alt="photo"
                    width="318"
                    height="330"
                  />
                  <Link to={`/products/${elem.id}`} className="category_text">
                    {elem.title}
                  </Link>
                  <div className="product_price">
                    <p className="price">{elem.price}$</p>
                    <p className="discont_price">{elem.discont_price}$</p>
                    <p className="percent">
                      -
                      {Math.round(
                        100 - (elem.discont_price * 100) / elem.price
                      )}
                      %
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
