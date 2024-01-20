import Flex from "@/imports/allproducts/atoms/Flex";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import { useRouter } from "next/router";
import { CLIENTDETAILS } from "@/imports/allproducts/apis/api/api";

const HomePage = () => {
  const { width } = useWindowSize();
  const router = useRouter();

  const handleProductCollection = () => {
    router.push(
      "/product-collection/cid=65784fb62c03ca6b8ee2cf33&sid=65785509e29e11e1cdcc3077"
    );
  };
  const isDesktop = width > 890;
  return (
    <HeroSection
      justifyContent="center"
      alignItems="center"
      direction="column"
      fullWidth
    >
      <Container isDesktop={isDesktop} fullWidth>
        <DetailsBox justifyContent="center" direction="column" fullWidth>
          <MainTitle>FIND CLOTHES THAT MATCHES YOUR STYLE</MainTitle>
          <Discription>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </Discription>
          <ShopButton onClick={handleProductCollection}>Shop Now</ShopButton>
          <OtherDetails fullWidth>
            {CLIENTDETAILS.map((v) => (
              <ClientDetails direction="column">
                <TotalClients>{v.clients}</TotalClients>
                <ClientDisc>{v.discription}</ClientDisc>
              </ClientDetails>
            ))}
          </OtherDetails>
        </DetailsBox>
      </Container>
    </HeroSection>
  );
};

export default HomePage;

const ShopButton = styled.button`
  padding: 13px 54px;
  border-radius: 30px;
  background-color: #000;
  color: #fff;
  font-family: "Satoshi";
  font-size: 16px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #454545;
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`;

const ClientDisc = styled(Flex)`
  color: rgba(0, 0, 0, 0.6);
  font-family: "SatoshiLight";
  font-size: 16px;

  @media (max-width: 520px) {
    font-size: 12px;
  }
`;

const TotalClients = styled(Flex)`
  font-family: "SatoshiBold";
  font-size: 40px;

  @media (max-width: 520px) {
    font-size: 26px;
  }
`;

const ClientDetails = styled(Flex)``;

const OtherDetails = styled(Flex)`
  gap: 40px;

  @media (max-width: 520px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const Discription = styled(Flex)`
  font-family: "Satoshi";
  font-size: 16px;
`;

const MainTitle = styled(Flex)`
  font-family: "IntegralCF";
  font-size: 55px;

  @media (max-width: 890px) {
    font-size: 47px;
  }

  @media (max-width: 520px) {
    font-size: 36px;
  }
`;

const DetailsBox = styled(Flex)`
  gap: 32px;
  padding: 103px 0;
  width: 50%;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 890px) {
    padding: 40px 0;
  }

  @media (max-width: 520px) {
    width: 100%;
    padding: 40px 0;
  }
`;

const Container = styled(Flex)`
  max-width: 1240px;
  padding: 10px;
`;

const HeroSection = styled(Flex)`
  margin-top: 15px;
  background: #f2f0f1;
`;
