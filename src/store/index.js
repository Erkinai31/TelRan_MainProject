import {configureStore} from "@reduxjs/toolkit"
import { categoryReducer } from "./categoryReducer";
import { productsReducer } from "./productsReducer";


export const store = configureStore({
    reducer:{
        categories: categoryReducer,
        products: productsReducer,
    }
});

