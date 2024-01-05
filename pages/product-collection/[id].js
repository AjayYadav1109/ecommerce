import { BASE_URL } from "@/config";
import { withData } from "@/imports/allproducts/ui/components/api/context/data.context";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProductInfo = dynamic(
  () => import("@/imports/allproducts/ui/components/pages/ProductInfo"),
  {
    ssr: false,
  }
);

const productCollection = ({ productData, filterData }) => {
  const router = useRouter();
  const { id } = router.query;
  const { handleDataState } = withData();
  useEffect(() => {
    handleDataState("subcategory", filterData);
    handleDataState("product", productData.products);
    handleDataState("selectedSubcategory", productData);
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

  const productResponse = await fetch(
    `${BASE_URL}/product/products?subcategoryId=${sid}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());

  const filterResponse = await fetch(
    `${BASE_URL}/subcategory/subcategories?categoryId=${cid}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());

  return Promise.all([productResponse, filterResponse])
    .then(([productData, filterData]) => {
      return {
        productData: productData.subcategories,
        filterData: filterData.category.subcategories,
      };
    })
    .catch((error) => {
      console.log("Error fetching data:", error);
      return { productData: null, filterData: null };
    });
};

export default productCollection;
