import styled from "styled-components";
import ArrowSvg from "@/assets/ArrowSvg";
import DeleteSvg from "@/assets/DeleteSvg";
import DecrementSvg from "@/assets/DecrementSvg";
import IncrementSvg from "@/assets/IncrementSvg";
import FrameSvg from "@/assets/FrameSvg";
import ArrowBoldSvg from "@/assets/ArrowBoldSvg";
import { withData } from "@/imports/allproducts/ui/components/api/context/data.context";
import { useRouter } from "next/router";
import StarSvg from "@/assets/StarSvg";
import nookies from "nookies";
import { BASE_URL } from "@/config";

const CartProduct = () => {
  const router = useRouter();
  const {
    state: { allCart },
    handleDataState,
  } = withData();
  const { token } = nookies.get({});

  const getCart = async (token) => {
    const response = await fetch(`${BASE_URL}/cart/carts`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      handleDataState("allCart", responseData.cartItems);
    }
  };

  const incrementHandler = async (id) => {
    const response = await fetch(`${BASE_URL}/cart/carts?productId=${id}`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      getCart(token);
    }
  };

  const decrementHandler = async (id) => {
    const response = await fetch(`${BASE_URL}/cart/carts?itemId=${id}`, {
      method: "PATCH",
      headers: {
        Authorization: token,
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      getCart(token);
    }
  };

  const removeHandler = async (id) => {
    const response = await fetch(`${BASE_URL}/cart/carts?itemId=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      getCart(token);
    }
  };

  const subtotal = allCart.reduce((acc, item) => {
    return acc + item.productId.price * item.quantity;
  }, 0);

  const discount = subtotal * 0.2;

  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;
  return (
    <Container>
      <Wrapper>
        <TopHead>
          <Home onClick={() => router.push("/")}>Home</Home>
          <ArrowSvg />
          <Cart>Cart</Cart>
        </TopHead>
        <YourCart>YOUR CART</YourCart>
        {allCart.length === 0 ? (
          <EmptyBag>
            <Gif
              src="https://cdn.dribbble.com/users/2022451/screenshots/5557745/empty_bag.gif"
              alt="empty-cart"
            />
            <EmptyCart>Hey, it feels so light!</EmptyCart>
            <Empty>There is nothing in your bag. Let's add some items.</Empty>
            <BackBtn
              onClick={() =>
                router.push("product-collection/65785509e29e11e1cdcc3077")
              }
            >
              ADD ITEMS FROM PRODUCT LIST
            </BackBtn>
          </EmptyBag>
        ) : (
          <MainCart>
            <ProductCart>
              {allCart.map((items) => (
                <MainDetail key={items._id}>
                  <CartDetail key={items.price}>
                    <Img
                      src={items.productId.product_img}
                      alt="product-image"
                    />
                    <Count>
                      <Delete>
                        <Title>{items.productId.product_name}</Title>
                        <Del onClick={() => removeHandler(items._id)}>
                          <DeleteSvg />
                        </Del>
                      </Delete>
                      <Size>
                        {[...Array(Number(items.productId.rating))].map(
                          (_, i) => (
                            <StarSvg key={i} />
                          )
                        )}
                      </Size>
                      <PriceSvg>
                        <Price>₹{items.productId.price}</Price>
                        <Btn>
                          <Decrement
                            onClick={() =>
                              incrementHandler(items.productId._id)
                            }
                          >
                            <DecrementSvg />
                          </Decrement>
                          <One>{items.quantity}</One>
                          <Increment
                            onClick={
                              items.quantity > 1
                                ? () => decrementHandler(items._id)
                                : null
                            }
                          >
                            <IncrementSvg />
                          </Increment>
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
                  <SubTotal>₹{subtotal}</SubTotal>
                </TotalContent>
                <TotalContent>
                  <Total>Discount (-20%)</Total>
                  <Discount>-₹{discount}</Discount>
                </TotalContent>
                <TotalContent>
                  <Total>Delivery Fee</Total>
                  <SubTotal>₹{deliveryFee}</SubTotal>
                </TotalContent>
                <Margin />
                <TotalContent>
                  <Totals>Total</Totals>
                  <FinalTotal>₹{total}</FinalTotal>
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
        )}
      </Wrapper>
    </Container>
  );
};

export default CartProduct;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
`;

const Gif = styled.img`
  width: 50%;
`;

const Increment = styled.div``;

const Decrement = styled.div``;

const Empty = styled.div`
  font-size: 16px;
  font-family: "Satoshi";
  font-weight: 500;
`;

const EmptyBag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const EmptyCart = styled.div`
  font-size: 20px;
  font-family: "Satoshi";
  font-weight: 700;
`;

const BackBtn = styled.button`
  padding: 10px;
  border: 1px solid #ff3f6c;
  background-color: white;
  cursor: pointer;
  color: #ff3f6c;
  font-size: 16px;
  font-family: "Satoshi";
  font-weight: 700;
`;

const Wrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  height: 100vh;
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
  height: 75%;
  overflow: auto;
  padding: 20px 24px;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 170px;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
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
