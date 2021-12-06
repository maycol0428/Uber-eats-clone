import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  restaurantName: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddToCart: (state, action) => {
      let check = action.payload.checkBoxValue;
      let newItem = action.payload.item;
      let restaurantName = action.payload.restaurantName;
      // add if check
      if (check) {
        state.items = [...state.items, newItem];
      } else {
        state.items = state.items.filter(
          (item) => item.title !== newItem.title
        );
      }
      state.restaurantName = restaurantName;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAddToCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartRestaurantName = (state) => state.cart.restaurantName;

export default cartSlice.reducer;
