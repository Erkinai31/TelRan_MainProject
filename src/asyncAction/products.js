import { AddProductAction } from "../store/productsReducer";

export const fetchProducts = () => {
  return function (dispatch) {
    let url = "http://localhost:3333/products/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) =>{
        data=data.map(elem=>({...elem,nprice:(Math.round(100-(elem.discont_price*100)/elem.price))}))
      dispatch(AddProductAction(data))
      })
}
}

export const fetchProducts2 = (id) => {
  return function (dispatch) {
    let url = `http://localhost:3333/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
      dispatch(AddProductAction(data));
  });
}
}
