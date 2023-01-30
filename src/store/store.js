import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUISlice from "./shopping-cart/cartUISlice";

export const store = configureStore({
	reducer: {
		cartSlice,
		cartUISlice
	}
});
