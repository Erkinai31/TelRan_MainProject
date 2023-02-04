import { AddCategoriesAction, AddOneCategoryAction} from "../store/categoryReducer";

export const fetchCategory = () => {
  return function (dispatch) {
    let url = "http://localhost:3333/categories/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(AddCategoriesAction(data)));
  };
};

export const fetchCategory2 = (id) => {
  return function (dispatch) {
    let url = `http://localhost:3333/categories/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
      dispatch(AddOneCategoryAction(data));
  });
}
}