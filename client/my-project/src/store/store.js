import {configureStore, combineReducers} from "@reduxjs/toolkit";

import titleReducer from "./slices/title.slice";
import productReducer from './slices/product.slice';
import cartReducer from './slices/cart.slice';



const rootReducer = combineReducers({
    titles: titleReducer,
    products: productReducer,
    cart: cartReducer,
});



const store = configureStore({
    reducer: rootReducer,
});

export default store;