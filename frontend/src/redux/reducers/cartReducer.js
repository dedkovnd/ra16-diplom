import { ADD_CART, DELETE_CART } from "../actions/actionTypes";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const newCart = action.payload
      state.push(newCart);
      return state;
    case DELETE_CART:
      const cart = action.payload;
      return state.filter((newCart) => newCart.id !== cart.id && cart.size);
  }
  return state;
};
