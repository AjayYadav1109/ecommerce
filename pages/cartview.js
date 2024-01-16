import { handleCartApi } from "@/imports/allproducts/apis/api/api";
import { getAllCart } from "@/imports/allproducts/apis/slice/cartSlice";
import Footer from "@/imports/landing/ui/components/Footer";
import dynamic from "next/dynamic";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Header = dynamic(() => import("@/imports/landing/ui/components/Header"), {
  ssr: false,
});

const CartProduct = dynamic(
  () => import("@/imports/cartview/ui/components/CartProduct"),
  {
    ssr: false,
  }
);

const cartView = ({ pageProps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCart(pageProps));
  }, []);

  return (
    <>
      <Header />
      <CartProduct />
      <Footer />
    </>
  );
};

cartView.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx);
  try {
    const responseData = await handleCartApi(token);
    return { pageProps: responseData.cartItems };
  } catch (error) {
    console.error("Error fetching cart:", error);
    return { pageProps: [] };
  }
};

export default cartView;
