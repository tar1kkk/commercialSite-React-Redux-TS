import { createSlice } from "@reduxjs/toolkit";


const cartUISlice = createSlice({
	name: 'cartUISlice',
	initialState: { cartIsVisible: false },

	reducers: {
		toggle(state) {
			state.cartIsVisible = !state.cartIsVisible;
		}
	}
})


export const { toggle } = cartUISlice.actions;

export default cartUISlice.reducer;