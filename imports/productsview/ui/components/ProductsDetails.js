import ArrowSvg from "@/assets/ArrowSvg";
import styled from "styled-components";
import StarSvg from "@/assets/StarSvg";
import BrownSvg from "@/assets/ColorSvg/BrownSvg";
import GreenSvg from "@/assets/ColorSvg/GreenSvg";
import PurpleSvg from "@/assets/ColorSvg/PurpleSvg";
import CorrectSvg from "@/assets/ColorSvg/Correct";
import DecrementSvg from "@/assets/DecrementSvg";
import IncrementSvg from "@/assets/IncrementSvg";
import ArrowBoldSvg from "@/assets/ArrowBoldSvg";
import { useState } from "react";
import Link from "next/link";

const ProductsDetails = () => {
  const [count, setCount] = useState(1);
  return (
    <Container>
      <Wrapper>
        <Margin />
        <HeadTag>
          <div>Home</div>
          <ArrowSvg />
          <div>Shop</div>
          <ArrowSvg />
          <div>Men</div>
          <ArrowSvg />
          <div>T-shirts</div>
        </HeadTag>
        <ImageContentWrapper>
          <ImgWrap>
            <SmallImg>
              <div>
                <img src="/image2.png" alt="image-2" />
              </div>
              <div>
                <img src="/image5.png" alt="image-5" />
              </div>
              <div>
                <img src="/image6.png" alt="image-6" />
              </div>
            </SmallImg>
            <div>
              <img src="/image1.png" alt="image-1" />
            </div>
          </ImgWrap>
          <Content>
            <Title>ONE LIFE GRAPHIC TSHIRT</Title>
            <StarRating>
              <StarSvgs>
                {[...Array(4)].map((_, i) => (
                  <StarSvg key={i} />
                ))}
              </StarSvgs>
              <Rating>4/5</Rating>
            </StarRating>
            <Rate>
              <Price>$260</Price>
              <Discount>$300</Discount>
              <Offer>
                <DisPer>-40%</DisPer>
              </Offer>
            </Rate>
            <Description>
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </Description>
            <Margin />
            <SelectColor>Select Colors</SelectColor>
            <Color>
              <BrownCorrect>
                <Brown>
                  <BrownSvg />
                </Brown>
                <Correct>
                  <CorrectSvg />
                </Correct>
              </BrownCorrect>
              <Green>
                <GreenSvg />
              </Green>
              <Purple>
                <PurpleSvg />
              </Purple>
            </Color>
            <Margin />
            <Size>Choose Size</Size>
            <SizeContainer>
              <OuterSize>
                <ChooseSize>Small</ChooseSize>
              </OuterSize>
              <OuterSize>
                <ChooseSize>Medium</ChooseSize>
              </OuterSize>
              <LargeSize>
                <Large>Large</Large>
              </LargeSize>
              <OuterSize>
                <ChooseSize>X-Large</ChooseSize>
              </OuterSize>
            </SizeContainer>
            <Margin />
            <CartButton>
              <CartSize>
                <Increment onClick={() => setCount(count - 1)}>
                  <IncrementSvg />
                </Increment>
                <Count>{count}</Count>
                <Decrement onClick={() => setCount(count + 1)}>
                  <DecrementSvg />
                </Decrement>
              </CartSize>
              <AddCart onClick={() => setCount(count + 1)}>
                <Cart>Add to Cart</Cart>
              </AddCart>
              <Link href="/cartview">
                <CheckBtn>
                  <CheckOut>Cart</CheckOut>
                  <ArrowBoldSvg />
                </CheckBtn>
              </Link>
            </CartButton>
          </Content>
        </ImageContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default ProductsDetails;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Margin = styled.div`
  background: rgba(0, 0, 0, 0.1);
  height: 1px;
`;

const HeadTag = styled.div`
  margin: 24px 0 0 0;
  display: flex;
  align-items: center;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  gap: 4px;
`;

const Count = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
`;

const ImageContentWrapper = styled.div`
  margin-bottom: 80px;
  display: flex;
  gap: 40px;
`;

const ImgWrap = styled.div`
  margin: 36px 0 0 0;
  display: flex;
  gap: 14px;
`;

const SmallImg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Content = styled.div`
  margin: 24px 0 0 0;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-family: "Integral CF";
  font-size: 40px;
  font-weight: 700;
`;

const StarSvgs = styled.div`
  display: flex;
  gap: 7px;
`;

const StarRating = styled.div`
  display: flex;
  margin: 14px 0 0 0;
  gap: 16px;
`;

const Rating = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
`;

const Rate = styled.div`
  margin: 14px 0 0 0;
  display: flex;
  gap: 12px;
`;

const Price = styled.div`
  font-family: "Satoshi";
  font-size: 32px;
  font-weight: 700;
`;

const Discount = styled.div`
  color: rgba(0, 0, 0, 0.3);
  font-family: "Satoshi";
  font-size: 32px;
  font-weight: 700;
  text-decoration: line-through;
`;

const Offer = styled.div`
  border-radius: 62px;
  background: rgba(255, 51, 51, 0.1);
  display: inline-flex;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
`;

const DisPer = styled.div`
  color: #f33;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
`;

const Description = styled.div`
  margin: 20px 0 24px 0;
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
`;

const SelectColor = styled.div`
  margin: 24px 0 16px 0;
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
`;

const Color = styled.div`
  margin: 0 0 24px 0;
  display: flex;
  gap: 16px;
`;

const BrownCorrect = styled.div`
  display: flex;
`;

const Brown = styled.div`
  position: relative;
  cursor: pointer;
`;

const Correct = styled.div`
  position: absolute;
  margin: 10px;
  cursor: pointer;
`;

const Size = styled.div`
  margin: 24px 0 16px 0;
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
`;

const SizeContainer = styled.div`
  margin: 0 0 24px 0;
  display: flex;
  gap: 12px;
`;

const OuterSize = styled.div`
  border-radius: 62px;
  background: #f0f0f0;
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #d8d8d8;
  }
`;

const ChooseSize = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

const LargeSize = styled.div`
  border-radius: 62px;
  background: #000;
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #454545;
  }
`;

const Large = styled.div`
  color: #fff;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
`;

const CartButton = styled.div`
  margin: 24px 0 0 0;
  display: flex;
  gap: 20px;
`;

const CartSize = styled.div`
  border-radius: 62px;
  background: #f0f0f0;
  width: 178px;
  display: flex;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

const AddCart = styled.div`
  border-radius: 62px;
  background: #000;
  display: flex;
  width: 400px;
  padding: 16px 54px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
    background-color: #454545;
  }
`;

const Cart = styled.div`
  color: #fff;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
`;

const Increment = styled.div`
  cursor: pointer;
`;

const Decrement = styled.div`
  cursor: pointer;
`;

const Green = styled.div`
  cursor: pointer;
`;

const Purple = styled.div`
  cursor: pointer;
`;

const CheckBtn = styled.div`
  border-radius: 62px;
  background: #000;
  display: flex;
  padding: 16px 54px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  &:hover {
    background-color: #454545;
  }
`;

const CheckOut = styled.div`
  color: #fff;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
`;