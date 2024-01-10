import {
  handleFilterApi,
  handleProductApi,
} from "@/imports/allproducts/apis/api/api";
import {
  getSelectedSubcategory,
  getSubcategory,
} from "@/imports/allproducts/apis/slice/categorySlice";
import { getProduct } from "@/imports/allproducts/apis/slice/productSlice";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ProductInfo = dynamic(
  () => import("@/imports/allproducts/ui/components/pages/ProductInfo"),
  {
    ssr: false,
  }
);

const productCollection = ({ productData, filterData }) => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubcategory(filterData));
    dispatch(getProduct(productData.products));
    dispatch(getSelectedSubcategory(productData));
  }, [id]);

  return (
    <>
      <ProductInfo />
    </>
  );
};

productCollection.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const params = new URLSearchParams(id);

  const cid = params.get("cid");
  const sid = params.get("sid");

  try {
    const res = await Promise.all([
      handleProductApi(sid),
      handleFilterApi(cid),
    ]);
    return {
      productData: res[0].subcategories,
      filterData: res[1].category.subcategories,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { productData: [], filterData: [] };
  }
};

export default productCollection;
