import { BASE_URL } from "@/config";
import { withData } from "@/imports/allproducts/ui/components/api/context/data.context";
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
    const response = await fetch(`${BASE_URL}/cart/carts`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      return { pageProps: responseData.cartItems };
    } else {
      throw new Error("API request failed");
    }
  } catch (error) {
    console.log("Error fetching cart:", error);
    return { pageProps: null };
  }
};

export default cartView;
