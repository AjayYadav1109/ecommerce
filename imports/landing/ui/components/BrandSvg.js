import CalvinSvg from "@/assets/BrandSvg/CalvinSvg";
import GucciSvg from "@/assets/BrandSvg/GucciSvg";
import PradaSvg from "@/assets/BrandSvg/PradaSvg";
import VersaceSvg from "@/assets/BrandSvg/VersaceSvg";
import ZaraSvg from "@/assets/BrandSvg/ZaraSvg";
import styled from "styled-components";

const BrandSvg = () => {
  return (
    <Container>
      <Wrapper>
        <SecondBox>
          <div>
            <VersaceSvg />
          </div>
          <div>
            <ZaraSvg />
          </div>
          <div>
            <GucciSvg />
          </div>
          <div>
            <PradaSvg />
          </div>
          <div>
            <CalvinSvg />
          </div>
        </SecondBox>
      </Wrapper>
    </Container>
  );
};

export default BrandSvg;

const Container = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const SecondBox = styled.div`
  display: flex;
  gap: 106px;
  max-width: 1240px;
  align-items: center;
  width: 100%;
  margin: 44px 100px;
`;
