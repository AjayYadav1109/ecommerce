import styled from "styled-components";
import ArrowSvg from "@/assets/ArrowSvg";
import DeleteSvg from "@/assets/DeleteSvg";
import DecrementSvg from "@/assets/DecrementSvg";
import IncrementSvg from "@/assets/IncrementSvg";
import FrameSvg from "@/assets/FrameSvg";
import ArrowBoldSvg from "@/assets/ArrowBoldSvg";
import { useRouter } from "next/router";
import StarSvg from "@/assets/StarSvg";
import nookies from "nookies";
import { useDispatch, useSelector } from "react-redux";
import {
  cartDecrement,
  cartDelete,
  cartIncrement,
  getAllCart,
} from "@/imports/allproducts/apis/slice/cartSlice";
import Flex from "@/imports/allproducts/atoms/Flex";

const CartProduct = () => {
  const router = useRouter();
  const allCart = useSelector((store) => store.cart.allCart);
  const { token } = nookies.get({});
  const dispatch = useDispatch();

  const incrementHandler = (id) => async () => {
    dispatch(cartIncrement({ id, token, updateCartItemQuantity }));
  };

  const decrementHandler = (id) => async () => {
    dispatch(cartDecrement({ id, token, updateCartItemQuantity }));
  };

  const removeHandler = (id) => async () => {
    dispatch(cartDelete({ id, token, updateCartItem }));
  };

  const updateCartItemQuantity = (id, newQuantity) => {
    const updatedCart = allCart.map((item) => {
      if (item?.productId?._id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    dispatch(getAllCart(updatedCart));
  };

  const updateCartItem = (id) => {
    const updatedCart = allCart.filter((item) => item._id !== id);
    dispatch(getAllCart(updatedCart));
  };

  const homeHandler = () => router.push("/");

  const backBtnHandler = () =>
    router.push(
      "/product-collection/cid=65784fb62c03ca6b8ee2cf33&sid=65785509e29e11e1cdcc3077"
    );

  const subtotal = allCart?.reduce((acc, item) => {
    return acc + item.productId.price * item.quantity;
  }, 0);

  const discount = subtotal * 0.2;

  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;
  return (
    <Container direction="column" justifyContent="center" alignItems="center">
      <Wrapper direction="column">
        <TopHead alignItems="center">
          <Home onClick={homeHandler}>Home</Home>
          <ArrowSvg />
          <Cart>Cart</Cart>
        </TopHead>
        <YourCart>YOUR CART</YourCart>
        {allCart?.length === 0 ? (
          <EmptyBag
            direction="column"
            justifyContent="center"
            alignItems="center"
            fullWidth
          >
            <Gif
              src="https://cdn.dribbble.com/users/2022451/screenshots/5557745/empty_bag.gif"
              alt="empty-cart"
            />
            <EmptyCart>Hey, it feels so light!</EmptyCart>
            <Empty>There is nothing in your bag. Let's add some items.</Empty>
            <BackBtn onClick={backBtnHandler}>
              ADD ITEMS FROM PRODUCT LIST
            </BackBtn>
          </EmptyBag>
        ) : (
          <MainCart fullWidth>
            <ProductCart direction="column" fullWidth>
              {allCart?.map((items) => (
                <MainDetail key={items._id} direction="column" fullWidth>
                  <CartDetail key={items.price} fullWidth>
                    <Img
                      src={items.productId.product_img}
                      alt="product-image"
                    />
                    <Count direction="column" fullWidth>
                      <Delete
                        justifyContent="space-between"
                        alignItems="center"
                        fullWidth
                      >
                        <Title>{items.productId.product_name}</Title>
                        <Del onClick={removeHandler(items._id)}>
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
                      <PriceSvg
                        justifyContent="space-between"
                        alignItems="center"
                        fullWidth
                      >
                        <Price>₹{items.productId.price}</Price>
                        <Btn justifyContent="center" alignItems="center">
                          <div onClick={incrementHandler(items.productId._id)}>
                            <DecrementSvg />
                          </div>
                          <One>{items.quantity}</One>
                          <div
                            onClick={
                              items.quantity > 1
                                ? decrementHandler(items._id)
                                : null
                            }
                          >
                            <IncrementSvg />
                          </div>
                        </Btn>
                      </PriceSvg>
                    </Count>
                  </CartDetail>
                  <Margin />
                </MainDetail>
              ))}
            </ProductCart>
            <Order direction="column">
              <Summary>Order Summary</Summary>
              <MainTotal direction="column" fullWidth>
                <Flex justifyContent="space-between" fullWidth>
                  <Total>Subtotal</Total>
                  <SubTotal>₹{subtotal}</SubTotal>
                </Flex>
                <Flex justifyContent="space-between" fullWidth>
                  <Total>Discount (-20%)</Total>
                  <Discount>-₹{discount}</Discount>
                </Flex>
                <Flex justifyContent="space-between" fullWidth>
                  <Total>Delivery Fee</Total>
                  <SubTotal>₹{deliveryFee}</SubTotal>
                </Flex>
                <Margin />
                <Flex justifyContent="space-between" fullWidth>
                  <Totals>Total</Totals>
                  <FinalTotal>₹{total}</FinalTotal>
                </Flex>
              </MainTotal>
              <BtnList fullWidth>
                <Frame alignItems="flex-start">
                  <FrameSvg />
                  <Promo>Add promo code</Promo>
                </Frame>
                <ApplyBack justifyContent="center" alignItems="center">
                  <ApplyBtn>Apply</ApplyBtn>
                </ApplyBack>
              </BtnList>
              <CheckBtn justifyContent="center" alignItems="center" fullWidth>
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

const Container = styled(Flex)`
  background-color: #fbfbfb;
  margin-top: 96px;
`;

const Gif = styled.img`
  width: 50%;
`;

const Empty = styled.div`
  font-size: 16px;
  font-family: "Satoshi";
  font-weight: 500;
`;

const EmptyBag = styled(Flex)`
  gap: 20px;
  margin-bottom: 170px;
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

const Wrapper = styled(Flex)`
  max-width: 1240px;
  width: 90%;
  gap: 24px;
`;

const Margin = styled.div`
  background: rgba(0, 0, 0, 0.1);
  height: 1px;
  width: 100%;
`;

const MainDetail = styled(Flex)`
  gap: 24px;
`;

const TopHead = styled(Flex)`
  margin-top: 24px;
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
  font-family: "IntegralCF";
  font-size: 40px;
  font-weight: 700;
`;

const MainCart = styled(Flex)`
  gap: 20px;
  margin-bottom: 170px;
  @media (max-width: 950px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ProductCart = styled(Flex)`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 60%;
  height: 75%;
  overflow: auto;
  padding: 20px 24px;
  gap: 24px;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`;

const Order = styled(Flex)`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 40%;
  height: 458px;
  padding: 20px 24px;
  gap: 24px;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

const Img = styled.img`
  border-radius: 10px;
  width: 125px;
  height: 125px;
  object-position: center;
  object-fit: cover;
  overflow: hidden;

  @media (max-width: 950px) {
    width: 100px;
    height: 100px;
  }
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

const Price = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 24px;
  font-weight: 700;
`;

const CartDetail = styled(Flex)`
  gap: 16px;
`;

const Count = styled(Flex)`
  gap: 2px;
`;

const Delete = styled(Flex)``;

const PriceSvg = styled(Flex)``;

const Btn = styled(Flex)`
  gap: 20px;
  border-radius: 62px;
  background: #f0f0f0;
  padding: 12px 20px;
  cursor: pointer;
  @media (max-width: 950px) {
    padding: 6px 10px;
    gap: 10px;
  }
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

const MainTotal = styled(Flex)`
  gap: 20px;
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

const BtnList = styled(Flex)`
  gap: 12px;
`;

const CheckBtn = styled(Flex)`
  border-radius: 62px;
  background: #000;
  padding: 16px 54px;
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

const Frame = styled(Flex)`
  border-radius: 62px;
  background: #f0f0f0;
  padding: 12px 16px;
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

const ApplyBack = styled(Flex)`
  border-radius: 62px;
  background: #000;
  width: 119px;
  padding: 12px 16px;
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
