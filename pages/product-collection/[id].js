import { withData } from "@/imports/allproducts/ui/components/api/context/data.context";
import ProductInfo from "@/imports/allproducts/ui/components/pages/ProductInfo";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
    `http://localhost:8080/api/product/products?subcategoryId=${sid}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());

  const filterResponse = await fetch(
    `http://localhost:8080/api/subcategory/subcategories?categoryId=${cid}`,
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
  // try {
  //   const response = await fetch(
  //     `http://localhost:8080/api/subcategory/subcategories?categoryId=${cid}`,
  //     {
  //       method: "GET",
  //     }
  //   );
  //   if (response.ok) {
  //     const responseData = await response.json();
  //     return { pageProps: responseData };
  //   } else {
  //     throw new Error("API request failed");
  //   }
  // } catch (error) {
  //   console.error("Error fetching subcategories:", error);
  //   return { pageProps: null };
  // }
};

export default productCollection;
