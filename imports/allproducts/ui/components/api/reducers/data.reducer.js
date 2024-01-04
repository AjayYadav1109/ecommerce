import { cartDecrement, cartIncrement, updateState } from "../lib/data.lib";
import { addToCart } from "../lib/data.lib";

const Reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE STATE":
      return updateState(state, action);
    default:
      state;
  }
};

export default Reducer;
