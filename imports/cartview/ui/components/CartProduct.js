import styled from "styled-components";
import ArrowSvg from "@/assets/ArrowSvg";
import DeleteSvg from "@/assets/DeleteSvg";
import DecrementSvg from "@/assets/DecrementSvg";
import IncrementSvg from "@/assets/IncrementSvg";
import FrameSvg from "@/assets/FrameSvg";
import ArrowBoldSvg from "@/assets/ArrowBoldSvg";

const MainCartProduct = [
  {
    src: "/image20.png",
    alt: "image-20",
    title: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: "$145",
  },
  {
    src: "/image9.png",
    alt: "image-3",
    title: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: "$180",
  },
  {
    src: "/image8.png",
    alt: "image-2",
    title: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: "$240",
  },
];

const CartProduct = () => {
  return (
    <Container>
      <Wrapper>
        <Margin />
        <TopHead>
          <Home>Home</Home>
          <ArrowSvg />
          <Cart>Cart</Cart>
        </TopHead>
        <YourCart>YOUR CART</YourCart>
        <MainCart>
          <ProductCart>
            {MainCartProduct.map((items) => (
              <MainDetail>
                <CartDetail key={items.price}>
                  <Img src={items.src} alt={items.alt} />
                  <Count>
                    <Delete>
                      <Title>{items.title}</Title>
                      <Del>
                        <DeleteSvg />
                      </Del>
                    </Delete>
                    <Size>Size: {items.size}</Size>
                    <Color>Color: {items.color}</Color>
                    <PriceSvg>
                      <Price>{items.price}</Price>
                      <Btn>
                        <DecrementSvg />
                        <One>1</One>
                        <IncrementSvg />
                      </Btn>
                    </PriceSvg>
                  </Count>
                </CartDetail>
                <Margin />
              </MainDetail>
            ))}
          </ProductCart>
          <Order>
            <Summary>Order Summary</Summary>
            <MainTotal>
              <TotalContent>
                <Total>Subtotal</Total>
                <SubTotal>$565</SubTotal>
              </TotalContent>
              <TotalContent>
                <Total>Discount (-20%)</Total>
                <Discount>-$113</Discount>
              </TotalContent>
              <TotalContent>
                <Total>Delivery Fee</Total>
                <SubTotal>$15</SubTotal>
              </TotalContent>
              <Margin />
              <TotalContent>
                <Totals>Total</Totals>
                <FinalTotal>$467</FinalTotal>
              </TotalContent>
            </MainTotal>
            <BtnList>
              <Frame>
                <FrameSvg />
                <Promo>Add promo code</Promo>
              </Frame>
              <ApplyBack>
                <ApplyBtn>Apply</ApplyBtn>
              </ApplyBack>
            </BtnList>
            <CheckBtn>
              <CheckOut>Go to Checkout</CheckOut>
              <ArrowBoldSvg />
            </CheckBtn>
          </Order>
        </MainCart>
      </Wrapper>
    </Container>
  );
};

export default CartProduct;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
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
  width: 100%;
`;

const MainDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TopHead = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Home = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

const Cart = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

const Del = styled.div`
  cursor: pointer;
`;

const YourCart = styled.div`
  color: #000;
  font-family: "Integral CF";
  font-size: 40px;
  font-weight: 700;
  margin: 24px 0 24px 0;
`;

const MainCart = styled.div`
  display: flex;
  gap: 20px;
`;

const ProductCart = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  width: 715px;
  padding: 20px 24px;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 170px;
`;

const Order = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  width: 505px;
  height: 458px;
  padding: 20px 24px;
  flex-direction: column;
  gap: 24px;
`;

const Img = styled.img`
  width: 125px;
  border-radius: 10px;
`;

const Title = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 700;
`;

const Size = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 14px;
  font-weight: 400;
`;

const Color = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 14px;
  font-weight: 400;
`;

const Price = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 24px;
  font-weight: 700;
`;

const CartDetail = styled.div`
  display: flex;
  gap: 16px;
`;

const Count = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`;

const Delete = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const PriceSvg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Btn = styled.div`
  display: flex;
  gap: 20px;
  border-radius: 62px;
  background: #f0f0f0;
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const One = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 14px;
  font-weight: 500;
`;

const Summary = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 24px;
  font-weight: 700;
`;

const MainTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TotalContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Total = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 400;
`;

const Totals = styled(Total)`
  color: #000;
`;

const SubTotal = styled.div`
  color: #000;
  text-align: right;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 700;
`;

const Discount = styled(SubTotal)`
  color: #f33;
`;

const FinalTotal = styled(SubTotal)`
  font-size: 24px;
`;

const BtnList = styled.div`
  display: flex;
  gap: 12px;
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

const Frame = styled.div`
  border-radius: 62px;
  background: #f0f0f0;
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
  cursor: pointer;
  &:hover {
    background-color: #d8d8d8;
  }
`;

const Promo = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
`;

const ApplyBack = styled.div`
  border-radius: 62px;
  background: #000;
  display: flex;
  width: 119px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  &:hover {
    background-color: #454545;
  }
`;

const ApplyBtn = styled.div`
  color: #fff;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
`;
