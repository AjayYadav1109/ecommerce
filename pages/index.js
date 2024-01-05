import Footer from "@/imports/landing/ui/components/Footer";
import dynamic from "next/dynamic";
import LandingPage from "@/imports/landing/ui/pages/Landing";
import { Fragment, useEffect } from "react";
import { withData } from "@/imports/allproducts/ui/components/api/context/data.context";
import nookies, { parseCookies } from "nookies";
import { BASE_URL } from "@/config";
// const LandingPage = dynamic(
//   () => import("@/imports/landing/ui/pages/Landing"),
//   {
//     ssr: false,
//   }
// );
const Header = dynamic(() => import("@/imports/landing/ui/components/Header"), {
  ssr: false,
});
// const Footer = dynamic(() => import("@/imports/landing/ui/components/Footer"), {
//   ssr: false,
// });

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

  const categoryResponse = fetch(`${BASE_URL}/category/categories`, {
    method: "GET",
  }).then((res) => res.json());

  const cartResponse = fetch(`${BASE_URL}/cart/carts`, {
    method: "GET",
    headers: { Authorization: token },
  }).then((res) => res.json());

  return Promise.all([categoryResponse, cartResponse])
    .then(([categoryData, cartData]) => {
      return {
        categoryData: categoryData.category,
        cartData: cartData.cartItems,
      };
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return { categoryData: null, cartData: null };
    });
};

export default LandingHomePage;
