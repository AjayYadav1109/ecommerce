import HalfStarSvg from "@/assets/HalfStarSvg";
import {
  ARRIVAL_PRODUCTS,
  SELLING_PRODUCTS,
} from "@/imports/allproducts/apis/api/api";
import Flex from "@/imports/allproducts/atoms/Flex";
import { useRouter } from "next/router";
import styled from "styled-components";

const ProductArrival = () => {
  const router = useRouter();

  const handleProduct = (id) => () => {
    router.push(`/products/${id}`);
  };

  const handleShowAllProduct = () => {
    router.push(
      "/product-collection/cid=65784fb62c03ca6b8ee2cf33&sid=65785509e29e11e1cdcc3077"
    );
  };

  return (
    <Flex justifyContent="center" alignItems="center" fullWidth>
      <Container
        justifyContent="center"
        alignItems="center"
        direction="column"
        fullWidth
      >
        <MainTitle>NEW ARRIVALS</MainTitle>
        <ArrivalProduct>
          {ARRIVAL_PRODUCTS.map((items) => (
            <ProductBox
              direction="column"
              key={items.title}
              onClick={handleProduct(items.id)}
            >
              <ProductImg imageUrl={items.src} />
              <ProductTitle>{items.title}</ProductTitle>
              <RatingWrap>
                <Flex>
                  {items.star}
                  <HalfStarSvg />
                </Flex>
                <Rating>{items.rating}</Rating>
              </RatingWrap>
              <PriceDetails>
                <PriceText>{items.rate}</PriceText>
                <DiscountText>{items.discount}</DiscountText>
                {items.offer && <DiscountPer>{items.offer}</DiscountPer>}
              </PriceDetails>
            </ProductBox>
          ))}
        </ArrivalProduct>
        <ViewButton onClick={handleShowAllProduct}>View All</ViewButton>
        <Border />
        <MainTitle>TOP SELLING</MainTitle>
        <ArrivalProduct>
          {SELLING_PRODUCTS.map((items) => (
            <ProductBox
              direction="column"
              key={items.title}
              onClick={handleProduct(items.id)}
            >
              <ProductImg imageUrl={items.src} />
              <ProductTitle>{items.title}</ProductTitle>
              <RatingWrap>
                <Flex>{items.star}</Flex>
                <Rating>{items.rating}</Rating>
              </RatingWrap>
              <PriceDetails>
                <PriceText>{items.rate}</PriceText>
                <DiscountText>{items.discount}</DiscountText>
                {items.offer && <DiscountPer>{items.offer}</DiscountPer>}
              </PriceDetails>
            </ProductBox>
          ))}
        </ArrivalProduct>
        <ViewButton onClick={handleShowAllProduct}>View All</ViewButton>
      </Container>
    </Flex>
  );
};

export default ProductArrival;

const Border = styled.div`
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 1px;
`;

const ViewButton = styled.button`
  padding: 13px 54px;
  border-radius: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-family: "Satoshi";
  font-size: 16px;
  background-color: #fff;

  &:hover {
    background-color: #f0eeed;
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`;

const DiscountPer = styled(Flex)`
  border-radius: 15px;
  background: rgba(255, 51, 51, 0.1);
  padding: 6px 14px;
  color: #f33;
  font-family: "Satoshi";
  font-size: 12px;
`;

const DiscountText = styled(Flex)`
  color: rgba(0, 0, 0, 0.4);
  font-family: "SatoshiBold";
  font-size: 24px;
  text-decoration: line-through;
`;

const PriceText = styled(Flex)`
  font-family: "SatoshiBold";
  font-size: 24px;
`;

const PriceDetails = styled(Flex)`
  gap: 10px;
`;

const Rating = styled(Flex)`
  color: rgba(0, 0, 0, 0.6);
  font-family: "SatoshiLight";
  font-size: 14px;
`;

const RatingWrap = styled(Flex)`
  gap: 13px;
`;

const ProductTitle = styled(Flex)`
  font-family: "SatoshiBold";
  font-size: 20px;
`;

const ProductImg = styled.div`
  width: 275px;
  height: 278px;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const ProductBox = styled(Flex)`
  gap: 10px;
`;

const ArrivalProduct = styled.div`
  gap: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  place-items: center;
  row-gap: 50px;
`;

const MainTitle = styled(Flex)`
  font-family: "IntegralCF";
  font-size: 48px;

  @media (max-width: 520px) {
    font-size: 32px;
  }
`;

const Container = styled(Flex)`
  max-width: 1240px;
  padding: 0 10px;
  gap: 55px;

  @media (max-width: 890px) {
    gap: 35px;
  }
`;
