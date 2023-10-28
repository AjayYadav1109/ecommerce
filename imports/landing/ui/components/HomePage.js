import BigStar from "@/assets/BigStar";
import Star from "@/assets/Star";
import Link from "next/link";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <FirstBox>
          <Paras>
            <BigPara>
              <BoldPara>FIND CLOTHES THAT MATCHES YOUR STYLE</BoldPara>
              <Big>
                <BigStar />
              </Big>
            </BigPara>
            <SmallPara>
              <Para>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </Para>
              <Small>
                <Star />
              </Small>
            </SmallPara>
          </Paras>
          <div>
            <Link href="/products">
              <ShopButton>Shop Now</ShopButton>
            </Link>
          </div>
          <Details>
            <div>
              <Number>200+</Number>
              <Brand>International Brands</Brand>
            </div>
            <div>
              <Number>2,000+</Number>
              <Brand>High-Quality Products</Brand>
            </div>
            <div>
              <Number>30,000+</Number>
              <Brand>Happy Customers</Brand>
            </div>
          </Details>
        </FirstBox>
      </Wrapper>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image: url("Rectangle.jpg");
    background-repeat: no-repeat;
    background-size: contain;
    padding-top: 46.04166666666667%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1240px;
  width: 100%;
  z-index: 1;
`;

const BigPara = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SmallPara = styled.div`
  max-width: 1240px;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FirstBox = styled.div`
  /* width: 50%; */
`;

const Paras = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const BoldPara = styled.div`
  font-family: "Integral CF";
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  margin: 103px 0 0 0;
  width: 50%;
`;

const Para = styled.div`
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  width: 545px;
  margin: 32px 0 32px 0;
`;

const ShopButton = styled.button`
  width: 210px;
  padding: 16px 54px;
  border-radius: 62px;
  background-color: #000;
  color: #fff;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #454545;
  }
`;

const Details = styled.div`
  display: flex;
  gap: 64px;
  justify-content: space-between;
  margin: 48px 0 116px 0;
  width: 50%;
`;

const Number = styled.div`
  font-family: "Satoshi";
  font-size: 40px;
  font-weight: 700;
`;

const Brand = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
`;

const Small = styled.div`
  width: 56px;
`;

const Big = styled.div`
  width: 104px;
`;
