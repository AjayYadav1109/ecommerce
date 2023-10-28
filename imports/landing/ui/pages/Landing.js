import React from "react";
import HomePage from "@/imports/landing/ui/components/HomePage";
import BrandSvg from "@/imports/landing/ui/components/BrandSvg";
import ProductArrival from "../components/ProductArrival";
import DressStyle from "../components/DressStyle";
import ImageSlider from "../components/ImageSlider";

const Landing = () => {
  return (
    <section>
      <HomePage />
      <BrandSvg />
      <ProductArrival />
      <DressStyle />
      <ImageSlider />
    </section>
  );
};

export default Landing;
