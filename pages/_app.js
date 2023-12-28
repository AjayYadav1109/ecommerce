import GlobalStyles from "@/styles/GlobalStyles";
import "../styles/globals.css";
import DataProvider from "@/imports/allproducts/ui/components/api/context/data.context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </>
  );
}
