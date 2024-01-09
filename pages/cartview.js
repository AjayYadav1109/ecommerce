import { handleCartApi } from "@/imports/allproducts/apis/api/api";
import { withData } from "@/imports/allproducts/apis/context/data.context";
import dynamic from "next/dynamic";
import { parseCookies } from "nookies";
import { useEffect } from "react";

const CartProduct = dynamic(
  () => import("@/imports/cartview/ui/components/CartProduct"),
  {
    ssr: false,
  }
);

const cartView = ({ pageProps }) => {
  const { handleDataState } = withData();

  useEffect(() => {
    handleDataState("allCart", pageProps);
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
