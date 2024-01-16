import { handleSingleProductApi } from "@/imports/allproducts/apis/api/api";
import { getSingleProduct } from "@/imports/allproducts/apis/slice/productSlice";
import Footer from "@/imports/landing/ui/components/Footer";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Header = dynamic(() => import("@/imports/landing/ui/components/Header"), {
  ssr: false,
});

const ProductAllDetails = dynamic(
  () => import("@/imports/productsview/ui/components/pages/ProductAllDetails"),
  {
    ssr: false,
  }
);

const productView = ({ pageProps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(pageProps));
  }, []);

  return (
    <>
      <Header />
      <ProductAllDetails />
      <Footer />
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
