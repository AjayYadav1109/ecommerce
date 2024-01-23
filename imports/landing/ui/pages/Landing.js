import React from "react";
import HomePage from "@/imports/landing/ui/components/HomePage";
import BrandSvg from "@/imports/landing/ui/components/BrandSvg";
import ProductArrival from "../components/ProductArrival";
import DressStyle from "../components/DressStyle";
import ImageSlider from "../components/ImageSlider";
import styled from "styled-components";
import Flex from "@/imports/allproducts/atoms/Flex";

const Landing = () => {
  return (
    <LandingSection direction="column" fullWidth>
      <HomePage />
      <ProductArrival />
      <DressStyle />
      <ImageSlider />
    </LandingSection>
  );
};

export default Landing;

const LandingSection = styled(Flex)`
  gap: 65px;

  @media (max-width: 890px) {
    gap: 25px;
  }
`;
