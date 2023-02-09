import { baseUrl } from "..";
import { AddCategoryAction} from "../store/categoryReducer";

export const fetchCategory = (id) => {
  return function (dispatch) {
    fetch(baseUrl + (id !== "all" ? `/categories/${id}` : `/products/all`))
      .then((res) => res.json())
      .then((data) => dispatch(AddCategoryAction(data)));
  };
};
