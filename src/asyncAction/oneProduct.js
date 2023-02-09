import { baseUrl } from "..";
import { AddOneProductAction } from "../store/oneProductReducer";

export const fetchOneProduct = (id) => {
  return function (dispatch) {
    fetch(baseUrl + (id !== "all" ? `/products/${id}` : `/products/all`))
      .then((res) => res.json())
      .then((data) => dispatch(AddOneProductAction(data)));
  };
};
