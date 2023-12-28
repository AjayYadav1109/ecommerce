import { createContext, useContext, useReducer } from "react";
import Reducer from "../reducers/data.reducer";

const DataContext = createContext();
export const Provider = DataContext.Provider;
export const DataConsumer = DataContext.Consumer;

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {
    allCategory: [],
    selectedCategoryId: null,
    subcategory: [],
    selectedSubcategory: null,
    product: [],
    singleProduct: null,
    allCart: [],
    cart: null,
  });

  const handleDataState = (name, payload) => {
    dispatch({
      type: "UPDATE STATE",
      name,
      payload,
    });
  };

  return (
    <Provider value={{ state, dispatch, handleDataState }}>{children}</Provider>
  );
};

export const withData = () => useContext(DataContext);

export default DataProvider;
