import HalfStarSvg from "@/assets/HalfStarSvg";
import StarSvg from "@/assets/StarSvg";
import Link from "next/link";
import styled from "styled-components";

const ArrivalProducts = [
  {
    title: "T-shirt with Tape Details",
    id: 1,
    rating: "4.5/5",
    rate: "$120",
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    src: "/image7.png",
    alt: "image-1",
  },
  {
    title: "Skinny Fit Jeans",
    id: 2,
    rating: "3.5/5",
    rate: "$240",
    discount: "$260",
    offer: "-20%",
    star: [...Array(3)].map((_, i) => <StarSvg key={i} />),
    src: "/image8.png",
    alt: "image-2",
  },
  {
    title: "Checkered Shirt",
    id: 3,
    rating: "4.5/5",
    rate: "$180",
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    src: "/image9.png",
    alt: "image-3",
  },
  {
    title: "Sleeve Striped T-shirt",
    id: 4,
    rating: "4.5/5",
    rate: "$130",
    discount: "$160",
    offer: "-30%",
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    src: "/image10.png",
    alt: "image-4",
  },
];

const SellingProducts = [
  {
    title: "Vertical Striped Shirt",
    rating: "5/5",
    rate: "$212",
    star: [...Array(5)].map((_, i) => <StarSvg key={i} />),
    src: "/image11.png",
    alt: "image-5",
    discount: "$232",
    offer: "-20%",
    id: 5,
  },
  {
    title: "Courage Graphic T-shirt",
    rating: "4/5",
    rate: "$145",
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    src: "/image12.png",
    alt: "image-6",
    id: 6,
  },
  {
    title: "Loose Fit Bermuda Shorts",
    rating: "3/5",
    rate: "$80",
    star: [...Array(3)].map((_, i) => <StarSvg key={i} />),
    src: "/image13.png",
    alt: "image-7",
    id: 7,
  },
  {
    title: "Faded Skinny Jeans",
    rating: "4/5",
    rate: "$210",
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    src: "/image14.png",
    alt: "image-8",
    id: 8,
  },
];

const ProductArrival = () => {
  return (
    <Container>
      <Wrapper>
        <Arrival>
          <ArrPara>NEW ARRIVALS</ArrPara>
          <ArrivalProduct>
            {ArrivalProducts.map((items) => (
              <Link href={`/products/${items.id}`} key={items.title}>
                <MainDiv>
                  <MainImg src={items.src} alt={items.alt} />
                  <Title>{items.title}</Title>
                  <StarRating>
                    <Div>
                      {items.star}
                      <HalfStarSvg />
                    </Div>
                    <Rating>{items.rating}</Rating>
                  </StarRating>
                  <DisRate>
                    <Rate>{items.rate}</Rate>
                    <Discount>{items.discount}</Discount>
                    {items.offer ? <DisPer>{items.offer}</DisPer> : ""}
                  </DisRate>
                </MainDiv>
              </Link>
            ))}
          </ArrivalProduct>
          <ButtonSpace>
            <Link href="/product-collection/cid=65784fb62c03ca6b8ee2cf33&sid=65785509e29e11e1cdcc3077">
              <ViewButton>View All</ViewButton>
            </Link>
          </ButtonSpace>
        </Arrival>
        <Margin></Margin>
        <Selling>
          <SellPara>TOP SELLING</SellPara>
          <SellingProduct>
            {SellingProducts.map((items) => (
              <Link href={`/products/${items.id}`} key={items.title}>
                <MainDiv>
                  <MainImg src={items.src} alt={items.alt} />
                  <Title>{items.title}</Title>
                  <StarRating>
                    <Div>{items.star}</Div>
                    <Rating>{items.rating}</Rating>
                  </StarRating>
                  <DisRate>
                    <Rate>{items.rate}</Rate>
                    <Discount>{items.discount}</Discount>
                    {items.offer ? <DisPer>{items.offer}</DisPer> : ""}
                  </DisRate>
                </MainDiv>
              </Link>
            ))}
          </SellingProduct>
          <ButtonSpace>
            <Link href="/product-collection/cid=65784fb62c03ca6b8ee2cf33&sid=65785509e29e11e1cdcc3077">
              <ViewButtonTwo>View All</ViewButtonTwo>
            </Link>
          </ButtonSpace>
        </Selling>
      </Wrapper>
    </Container>
  );
};

export default ProductArrival;

const Container = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 96px;
  flex-direction: column;
`;

const Wrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Arrival = styled.div`
  display: flex;
  flex-direction: column;
`;

const Selling = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArrPara = styled.div`
  font-family: "Integral CF";
  font-size: 48px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin: 72px 0 55px 0;
`;

const Div = styled.div``;

const SellPara = styled.div`
  font-family: "Integral CF";
  font-size: 48px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin: 72px 0 55px 0;
`;

const ViewButton = styled.button`
  padding: 16px 54px;
  border-radius: 62px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
  margin: 36px 0 0 0;
  width: 218px;
  background-color: white;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

const ViewButtonTwo = styled.button`
  padding: 16px 54px;
  border-radius: 62px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
  margin: 36px 0 80px 0;
  width: 218px;
  background-color: white;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

const ArrivalProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const SellingProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Title = styled.div`
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 700;
`;

const StarRating = styled.div`
  display: flex;
  gap: 13px;
`;

const Rating = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 14px;
  font-weight: 400;
`;
const Rate = styled.div`
  font-family: "Satoshi";
  font-size: 24px;
  font-weight: 700;
`;

const Discount = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-family: "Satoshi";
  font-size: 24px;
  font-weight: 700;
  text-decoration: line-through;
`;

const DisPer = styled.div`
  border-radius: 62px;
  background: rgba(255, 51, 51, 0.1);
  width: 58px;
  padding: 6px 14px;
  color: #f33;
  font-family: "Satoshi";
  font-size: 12px;
  font-weight: 500;
`;

const DisRate = styled.div`
  display: flex;
  gap: 10px;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MainImg = styled.img`
  border-radius: 20px;
`;

const Margin = styled.div`
  background: rgba(0, 0, 0, 0.1);
  max-width: 1240px;
  width: 100%;
  height: 1px;
  margin: 64px 0 0 0;
`;

const ButtonSpace = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
