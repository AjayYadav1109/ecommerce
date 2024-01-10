import { handleCartApi } from "@/imports/allproducts/apis/api/api";
import { getAllCart } from "@/imports/allproducts/apis/slice/cartSlice";
import dynamic from "next/dynamic";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

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
      <CartProduct />
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
