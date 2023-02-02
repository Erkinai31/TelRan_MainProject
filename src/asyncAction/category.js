import { AddCategoryAction } from "../store/categoryReducer";

export const fetchCategory = () => {
  return function (dispatch) {
    let url = "http://localhost:3333/categories/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(AddCategoryAction(data)));
  };
};
