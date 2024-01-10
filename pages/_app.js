import GlobalStyles from "@/styles/GlobalStyles";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "@/imports/allproducts/apis/store/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
