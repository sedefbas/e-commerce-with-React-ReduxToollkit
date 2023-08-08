import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(), //localStorgedaki veriyi temsil edicez burda :)
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (isItemCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty * item.price;
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        storeInLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
      }
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },
    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return cartTotal += cartItem.price 
      }, 0);
      
      state.itemCount = state.carts.length;
    },
    updateQuantity: (state, action) => {
      const itemId = action.payload.id;
      const newQuantity = action.payload.quantity;
  
      // Find the item in the cart
      const itemToUpdate = state.carts.find((item) => item.id === itemId);
  
      if (itemToUpdate) {
        // Calculate the new total price based on the updated quantity
        const newTotalPrice = newQuantity * itemToUpdate.price;
  
        // Update the item with the new quantity and total price
        itemToUpdate.quantity = newQuantity;
        itemToUpdate.totalPrice = newTotalPrice;
  
        // Save the changes to the local storage
        storeInLocalStorage(state.carts);
      }
    },
    
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart, getCartTotal,updateQuantity} =
  cartSlice.actions;
