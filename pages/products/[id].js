import { BASE_URL } from "@/config";
import { withData } from "@/imports/allproducts/ui/components/api/context/data.context";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const ProductAllDetails = dynamic(
  () => import("@/imports/productsview/ui/components/pages/ProductAllDetails"),
  {
    ssr: false,
  }
);

const productView = ({ pageProps }) => {
  const { handleDataState } = withData();
  useEffect(() => {
    handleDataState("singleProduct", pageProps);
  }, []);
  return (
    <>
      <ProductAllDetails />
    </>
  );
};

productView.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  try {
    const response = await fetch(
      `${BASE_URL}/product/product?productId=${id}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const responseData = await response.json();
      return { pageProps: responseData.product };
    } else {
      throw new Error("API request failed");
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return { pageProps: null };
  }
};

export default productView;
