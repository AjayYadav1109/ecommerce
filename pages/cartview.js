import { withData } from "@/imports/allproducts/ui/components/api/context/data.context";
import CartProduct from "@/imports/cartview/ui/components/CartProduct";
import { parseCookies } from "nookies";
import { useEffect } from "react";

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
    const response = await fetch("http://localhost:8080/api/cart/carts", {
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
