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
      <Container>
        <Wrapper>
          <Logo>SHOP.CO</Logo>
          {allCategory?.map((category) => (
            <Icon
              onMouseEnter={getSubcategory(category._id)}
              key={category._id}
            >
              <Shop>{category.category_name}</Shop>
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
          <Search>
            <WrapSearch>
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
          <Carts>
            <CartSvg onClick={cartRouteHandler}>
              <Cart />
              {token && <Quantity>{quantity}</Quantity>}
            </CartSvg>
            {!token ? (
              <ProfileSvg onClick={profileHandler}>
                <Profile />
              </ProfileSvg>
            ) : (
              <LargeSize onClick={logoutHandler}>
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

const Container = styled.div`
  width: 100%;
  background: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
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

const LargeSize = styled.div`
  border-radius: 62px;
  background: #000;
  display: flex;
  padding: 6px 12px;
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
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 96px;
  gap: 40px;
  max-width: 1240px;
  width: 100%;
  justify-content: center;
`;

const Logo = styled.div`
  font-size: 32px;
  font-family: "Integral CF";
  font-weight: 700;
  color: #000;
`;

const Icon = styled.div`
  color: #000;
  display: flex;
  align-items: center;
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

const Search = styled.div`
  display: flex;
  color: #000;
  max-width: 577px;
  width: 100%;
  border-radius: 62px;
  background: #f0f0f0;
`;

const Carts = styled.div`
  color: #000;
  display: flex;
  align-items: center;
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

const WrapSearch = styled.div`
  display: flex;
  padding: 12px 16px;
  gap: 12px;
  width: 100%;
`;

const Shop = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
`;

const CartSvg = styled.div`
  cursor: pointer;
  position: relative;
`;

const ProfileSvg = styled.div`
  cursor: pointer;
`;
