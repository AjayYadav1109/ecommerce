import { cloneDeep } from "lodash";

export const updateState = (state, action) => {
  const data = cloneDeep(state);
  data[action.name] = action.payload;
  return data;
};

export const cartIncrement = (state) => {
  return {
    ...state,
    quantity: state.quantity + 1,
  };
};

export const cartDecrement = (state) => {
  return {
    ...state,
    quantity: state.quantity - 1,
  };
};
