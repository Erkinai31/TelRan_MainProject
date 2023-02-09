import { baseUrl } from "..";
import { AddProductsAction } from "../store/productsReducer";

export const fetchProducts = () => {
  return function (dispatch) {
    fetch(baseUrl + "/products/all")
      .then((res) => res.json())
      .then((data) => dispatch(AddProductsAction(data)));
  };
};


