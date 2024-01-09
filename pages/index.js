import Footer from "@/imports/landing/ui/components/Footer";
import dynamic from "next/dynamic";
import LandingPage from "@/imports/landing/ui/pages/Landing";
import { Fragment, useEffect } from "react";
import { withData } from "@/imports/allproducts/apis/context/data.context";
import nookies, { parseCookies } from "nookies";
import {
  handleCartApi,
  handleCategoryApi,
} from "@/imports/allproducts/apis/api/api";

const Header = dynamic(() => import("@/imports/landing/ui/components/Header"), {
  ssr: false,
});

const LandingHomePage = ({ categoryData, cartData }) => {
  const { handleDataState } = withData();
  const { token } = nookies.get({});
  useEffect(() => {
    handleDataState("allCategory", categoryData);
  }, []);

  useEffect(() => {
    handleDataState("allCart", cartData);
  }, [token]);

  return (
    <Fragment>
      <Header />
      <LandingPage />
      <Footer />
    </Fragment>
  );
};

LandingHomePage.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx);
  try {
    if (!token) {
      const res = await handleCategoryApi();
      return { categoryData: res.category };
    } else {
      const res = await Promise.all([
        handleCategoryApi(),
        handleCartApi(token),
      ]);
      return {
        categoryData: res[0].category,
        cartData: res[1].cartItems,
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return { categoryData: [], cartData: [] };
  }
};

export default LandingHomePage;
