import { cloneDeep } from "lodash";

export const updateState = (state, action) => {
  const data = cloneDeep(state);
  data[action.name] = action.payload;
  return data;
};
