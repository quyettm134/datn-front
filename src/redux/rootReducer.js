import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import orderReducer from "./order/orderSlice";
import productReducer from "./product/productSlice";
import cartReducer from "./cart/cartSlice";

const rootReducer = combineReducers({
    user: userReducer,
    order: orderReducer,
    products: productReducer,
    cart: cartReducer
});

export default rootReducer;