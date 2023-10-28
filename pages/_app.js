import GlobalStyles from "@/styles/GlobalStyles";
import "../styles/globals.css";
import Header from "@/imports/landing/ui/components/Header";
import Footer from "@/imports/landing/ui/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
