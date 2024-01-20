import CalvinSvg from "@/assets/BrandSvg/CalvinSvg";
import GucciSvg from "@/assets/BrandSvg/GucciSvg";
import PradaSvg from "@/assets/BrandSvg/PradaSvg";
import VersaceSvg from "@/assets/BrandSvg/VersaceSvg";
import ZaraSvg from "@/assets/BrandSvg/ZaraSvg";
import Flex from "@/imports/allproducts/atoms/Flex";
import styled from "styled-components";

const BrandSvg = () => {
  return (
    <LogoSection justifyContent="center" alignItems="center" fullWidth>
      <Container justifyContent="space-between" alignItems="center" fullWidth>
        <VersaceSvg />
        <ZaraSvg />
        <GucciSvg />
        <PradaSvg />
        <CalvinSvg />
      </Container>
    </LogoSection>
  );
};

export default BrandSvg;

const Container = styled(Flex)`
  max-width: 1240px;
  padding: 43px 10px;

  @media (max-width: 890px) {
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 39px 10px;
    gap: 35px;

    svg {
      width: auto;
      height: 23px;
    }
  }
`;

const LogoSection = styled(Flex)`
  background-color: #000;
`;
