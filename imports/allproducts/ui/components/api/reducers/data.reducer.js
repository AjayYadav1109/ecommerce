import { cartDecrement, cartIncrement, updateState } from "../lib/data.lib";
import { addToCart } from "../lib/data.lib";

const Reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE STATE":
      return updateState(state, action);
    // case "ADD TO CART":
    //   return addToCart(state, action);
    // case "INCREMENT":
    //   return cartIncrement(state);
    // case "DECREMENT":
    //   return cartDecrement(state);
    default:
      state;
  }
};

export default Reducer;
