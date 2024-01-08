import ArrowSvg from "@/assets/ArrowSvg";
import styled from "styled-components";
import StarSvg from "@/assets/StarSvg";
import BrownSvg from "@/assets/ColorSvg/BrownSvg";
import GreenSvg from "@/assets/ColorSvg/GreenSvg";
import PurpleSvg from "@/assets/ColorSvg/PurpleSvg";
import CorrectSvg from "@/assets/ColorSvg/Correct";
import { useState } from "react";
import { useRouter } from "next/router";
import { withData } from "@/imports/allproducts/apis/context/data.context";
import nookies from "nookies";
import { handleAddToCartApi } from "@/imports/allproducts/apis/api/api";

const ProductsDetails = () => {
  const {
    state: { singleProduct },
  } = withData();
  const { token } = nookies.get({});
  const router = useRouter();
  const { id } = router.query;
  const [showCart, setShowCart] = useState(false);

  const cartHandler = (id) => async () => {
    try {
      const response = await handleAddToCartApi(id, token);
      setShowCart(true);
    } catch (error) {
      console.error(error);
    }
  };

  const checkoutHandler = () => router.push("/cartview");

  const homeHandler = () => router.push("/");

  return (
    <Container>
      <Wrapper>
        <Margin />
        <HeadTag>
          <Head onClick={homeHandler}>Home</Head>
          <ArrowSvg />
          <Head>Shop</Head>
          <ArrowSvg />
          <Head>Men</Head>
          <ArrowSvg />
          <Head>T-shirts</Head>
        </HeadTag>
        <ImageContentWrapper>
          <ImgWrap>
            <SmallImg>
              <Div>
                <ImageTag src="/image2.png" alt="image-2" />
              </Div>
              <Div>
                <ImageTag src="/image5.png" alt="image-5" />
              </Div>
              <Div>
                <ImageTag src="/image6.png" alt="image-6" />
              </Div>
            </SmallImg>
            <Img src={singleProduct?.product_img} alt="image-1" />
          </ImgWrap>
          <Content>
            <Title>{singleProduct?.product_name}</Title>
            <StarRating>
              <StarSvgs>
                {singleProduct?.rating &&
                  [...Array(Number(singleProduct?.rating))].map((_, i) => (
                    <StarSvg key={i} />
                  ))}
              </StarSvgs>
              <Rating>{singleProduct?.rating}/5</Rating>
            </StarRating>
            <Rate>
              <Price>₹{singleProduct?.price}</Price>
              <Discount>₹{singleProduct?.discount}</Discount>
              <Offer>
                <DisPer>-{singleProduct?.offer}%</DisPer>
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
              {
                <AddCart
                  onClick={!showCart ? cartHandler(id) : checkoutHandler}
                >
                  <Cart>{!showCart ? "Add To Cart" : "Go To Cart ➔"}</Cart>
                </AddCart>
              }
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

const Img = styled.img`
  border-radius: 20px;
  width: 450px;
  height: 540px;
`;

const Margin = styled.div`
  background: rgba(0, 0, 0, 0.1);
  height: 1px;
`;

const Div = styled.div``;

const ImageTag = styled.img``;

const HeadTag = styled.div`
  margin: 24px 0 0 0;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Head = styled.div`
  cursor: pointer;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
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

const AddCart = styled.div`
  border-radius: 62px;
  background: #000;
  display: flex;
  gap: 20px;
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
  display: flex;
  font-size: 16px;
  font-weight: 500;
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
