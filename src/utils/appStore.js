import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlics";

const appstore = configureStore({
  reducer: {
    //Big reducer for whole app
    cart: cartReducer, //small cart Slice reducer
  },
}); // will add slices inside it.

export default appstore;
