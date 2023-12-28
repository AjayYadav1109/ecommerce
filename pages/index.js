import Footer from "@/imports/landing/ui/components/Footer";
// import Header from "@/imports/landing/ui/components/Header";
import dynamic from "next/dynamic";
import LandingPage from "@/imports/landing/ui/pages/Landing";
import { Fragment } from "react";
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

const LandingHomePage = () => {
  return (
    <Fragment>
      <Header />
      <LandingPage />
      <Footer />
    </Fragment>
  );
};

export default LandingHomePage;
