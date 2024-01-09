import { useState } from "react";
import styled from "styled-components";
import SearchSvg from "@/assets/SearchSvg";
import Profile from "@/assets/Profile";
import Cart from "@/assets/Cart";
import LoginModal from "./LoginModal";
import { withData } from "@/imports/allproducts/apis/context/data.context";
import { useRouter } from "next/router";
import nookies, { destroyCookie } from "nookies";
import Loader from "@/imports/allproducts/atoms/Loader";
import { handleFilterApi } from "@/imports/allproducts/apis/api/api";
import Flex from "@/imports/allproducts/atoms/Flex";

const Header = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const {
    state: { allCategory, subcategory, allCart, isLoading },
    handleDataState,
  } = withData();
  const router = useRouter();
  const { token } = nookies.get({});
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const logoutHandler = () => {
    destroyCookie({}, "token", { path: "/" });
    router.push("/");
  };

  const getSubcategory = (id) => async () => {
    handleDataState("isLoading", true);
    try {
      if (subcategory[0]?.categoryId !== id) {
        const response = await handleFilterApi(id);
        const subcategories = response?.category?.subcategories;
        handleDataState("subcategory", subcategories);
      }
    } catch (error) {
      console.error(error);
    }
    handleDataState("isLoading", false);
  };
  const quantity = allCart?.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const productHandler = (cid, sid) => () =>
    router.push(`/product-collection/cid=${cid}&sid=${sid}`);

  const cartRouteHandler = () => router.push("cartview");

  const profileHandler = () => setShowModal(true);

  return (
    <>
      <Container alignItems="center" justifyContent="center" fullWidth>
        <Wrapper alignItems="center" justifyContent="center" fullWidth>
          <Logo>SHOP.CO</Logo>
          {allCategory?.map((category) => (
            <Icon
              alignItems="center"
              onMouseEnter={getSubcategory(category._id)}
              key={category._id}
            >
              <Shop alignItems="center">{category.category_name}</Shop>
              <Dropdown>
                {isLoading ? (
                  <Loader />
                ) : (
                  <>
                    {subcategory.map((sub) => (
                      <AllSub key={sub._id}>
                        <Sub onClick={productHandler(sub.categoryId, sub._id)}>
                          {sub.subcategory_name}
                        </Sub>
                      </AllSub>
                    ))}
                  </>
                )}
              </Dropdown>
            </Icon>
          ))}
          <Search fullWidth>
            <WrapSearch fullWidth>
              <Svg>
                <SearchSvg />
              </Svg>
              <Input
                type="text"
                placeholder="Search for products..."
                onChange={searchHandler}
                value={search}
              />
            </WrapSearch>
          </Search>
          <Carts alignItems="center">
            <CartSvg onClick={cartRouteHandler}>
              <Cart />
              {token && <Quantity>{quantity}</Quantity>}
            </CartSvg>
            {!token ? (
              <ProfileSvg onClick={profileHandler}>
                <Profile />
              </ProfileSvg>
            ) : (
              <LargeSize
                onClick={logoutHandler}
                justifyContent="center"
                alignItems="center"
              >
                <Large>Logout</Large>
              </LargeSize>
            )}
          </Carts>
        </Wrapper>
      </Container>
      {showModal && <LoginModal setShowModal={setShowModal} />}
    </>
  );
};

export default Header;

const BodyWrapper = styled(Flex)``;

const Dropdown = styled.div`
  top: 96px;
  background-color: #fff;
  width: 50%;
  display: none;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  position: absolute;
`;

const Container = styled(Flex)`
  background: #fff;
  position: relative;
  z-index: 2;
`;

const AllSub = styled.div`
  background-color: white;
  width: 100%;
  justify-content: flex-start;
  padding: 5px;
`;

const Quantity = styled.div`
  color: white;
  background-color: green;
  padding: 2px 4px;
  top: -22px;
  left: 5px;
  position: absolute;
`;

const LargeSize = styled(Flex)`
  border-radius: 62px;
  background: #000;
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background-color: #454545;
  }
`;

const Large = styled.div`
  color: #fff;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
`;

const Sub = styled.div`
  font-size: 12px;
  font-family: "Satoshi";
  font-weight: 500;
  cursor: pointer;
  &:hover {
    font-family: "Satoshi";
    font-weight: 700;
  }
`;
const Wrapper = styled(Flex)`
  height: 96px;
  gap: 40px;
  max-width: 1240px;
`;

const Logo = styled.div`
  font-size: 32px;
  font-family: "Integral CF";
  font-weight: 700;
  color: #000;
`;

const Icon = styled(Flex)`
  color: #000;
  height: 96px;
  font-family: "Satoshi";
  font-weight: 600;

  &:hover {
    border-bottom: 4px solid #0db7af;

    ${Dropdown} {
      display: flex;
    }
  }
`;

const Search = styled(Flex)`
  color: #000;
  max-width: 577px;
  border-radius: 62px;
  background: #f0f0f0;
`;

const Carts = styled(Flex)`
  color: #000;
  gap: 14px;
`;

const Input = styled.input`
  border-radius: 62px;
  background: #f0f0f0;
  width: 100%;
  border: transparent;
  color: #000;
  font-family: "Satoshi";
  font-weight: 400;
  &:focus {
    outline: none;
  }
`;

const Svg = styled.div`
  width: 24px;
  height: 24px;
`;

const WrapSearch = styled(Flex)`
  padding: 12px 16px;
  gap: 12px;
`;

const Shop = styled(Flex)`
  gap: 4px;
  cursor: pointer;
`;

const CartSvg = styled.div`
  cursor: pointer;
  position: relative;
`;

const ProfileSvg = styled.div`
  cursor: pointer;
`;
