import { DRESS_STYLE } from "@/imports/allproducts/apis/api/api";
import Flex from "@/imports/allproducts/atoms/Flex";
import styled from "styled-components";

const DressStyle = () => {
  return (
    <DressingSection justifyContent="center" alignItems="center" fullWidth>
      <Container
        justifyContent="center"
        alignItems="center"
        direction="column"
        fullWidth
      >
        <MainTitle>BROWSE BY DRESS STYLE</MainTitle>
        <StylesWrap>
          {DRESS_STYLE.map((v) => (
            <Details>
              <DressTitle>{v.title}</DressTitle>
              <Image imageUrl={v.src} />
            </Details>
          ))}
        </StylesWrap>
      </Container>
    </DressingSection>
  );
};

export default DressStyle;

const Image = styled.div`
  width: 500px;
  height: 300px;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 890px) {
    width: 350px;
    height: 210px;
  }

  @media (max-width: 520px) {
    width: 250px;
    height: 150px;
    border-radius: 10px;
  }
`;

const DressTitle = styled(Flex)`
  font-family: "SatoshiBold";
  font-size: 36px;
  position: absolute;
  z-index: 1;
  top: 30px;
  left: 30px;

  @media (max-width: 890px) {
    font-size: 28px;
    top: 15px;
    left: 15px;
  }
`;

const Details = styled(Flex)`
  position: relative;
`;

const StylesWrap = styled.div`
  gap: 15px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  place-items: center;
  row-gap: 35px;

  @media (max-width: 890px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    row-gap: 20px;
  }
`;

const MainTitle = styled(Flex)`
  font-family: "IntegralCF";
  font-size: 48px;
  text-align: center;

  @media (max-width: 520px) {
    font-size: 36px;
  }
`;

const Container = styled(Flex)`
  max-width: 1240px;
  border-radius: 20px;
  background: #f0f0f0;
  padding: 64px;
  gap: 64px;

  @media (max-width: 890px) {
    gap: 28px;
  }

  @media (max-width: 520px) {
    padding: 24px;
    border-radius: 10px;
  }
`;

const DressingSection = styled(Flex)`
  padding: 0 10px;
`;
