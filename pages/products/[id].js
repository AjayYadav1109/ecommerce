import { handleSingleProductApi } from "@/imports/allproducts/apis/api/api";
import { withData } from "@/imports/allproducts/apis/context/data.context";
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
    const response = await handleSingleProductApi(id);
    return { pageProps: response.product };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { pageProps: [] };
  }
};

export default productView;
