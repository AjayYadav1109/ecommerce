import { useState } from "react";
import styled from "styled-components";
import SearchSvg from "@/assets/SearchSvg";
import Profile from "@/assets/Profile";
import Cart from "@/assets/Cart";
import LoginModal from "./LoginModal";
import { useRouter } from "next/router";
import nookies, { destroyCookie } from "nookies";
import Flex from "@/imports/allproducts/atoms/Flex";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSubcategories,
  getSubcategory,
} from "@/imports/allproducts/apis/slice/categorySlice";
import useWindowSize from "../hooks/useWindowSize";
import CloseSlider from "@/assets/CloseSlider";
import OpenSlider from "@/assets/OpenSlider";
import Sidebar from "./Sidebar";

const Header = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const dispatch = useDispatch();
  const allCategory = useSelector((store) => store.category.allCategory);
  const allCart = useSelector((store) => store.cart.allCart);
  const subcategory = useSelector((store) => store.category.subcategory);
  const router = useRouter();
  const { width } = useWindowSize();
  const { token } = nookies.get({});
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const logoutHandler = () => {
    destroyCookie({}, "token", { path: "/" });
    router.push("/");
  };

  const getAllSubcategory = (id) => async () => {
    dispatch(fetchSubcategories({ id, subcategory, dispatch, getSubcategory }));
  };

  const quantity = allCart?.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const productHandler = (cid, sid) => () =>
    router.push(`/product-collection/cid=${cid}&sid=${sid}`);

  const cartRouteHandler = () => router.push("cartview");

  const profileHandler = () => setShowModal(true);
  const toggleSidebar = () => setShowSideBar(!showSideBar);

  const isDesktop = width > 950;

  return (
    <>
      <Container alignItems="center" justifyContent="center" fullWidth>
        <Wrapper alignItems="center" justifyContent="space-between" fullWidth>
          <Logo>SHOP.CO</Logo>
          <RightSection
            alignItems="center"
            justifyContent="space-between"
            fullWidth
          >
            {isDesktop && (
              <NavLink
                alignItems="center"
                justifyContent="space-evenly"
                fullWidth
              >
                {allCategory?.map((category) => (
                  <Icon
                    alignItems="center"
                    onMouseEnter={getAllSubcategory(category._id)}
                    key={category._id}
                  >
                    <Shop alignItems="center">{category.category_name}</Shop>
                    <Dropdown>
                      {subcategory.map((sub) => (
                        <AllSub key={sub._id}>
                          <Sub
                            onClick={productHandler(sub.categoryId, sub._id)}
                          >
                            {sub.subcategory_name}
                          </Sub>
                        </AllSub>
                      ))}
                    </Dropdown>
                  </Icon>
                ))}
              </NavLink>
            )}

            <Search fullWidth>
              <WrapSearch fullWidth>
                <Svg>
                  <SearchSvg />
                </Svg>
                <Input
                  type="text"
                  placeholder="Search..."
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
            <MobileNavToggle onClick={toggleSidebar}>
              {showSideBar ? <CloseSlider /> : <OpenSlider />}
            </MobileNavToggle>
            {showSideBar && <Sidebar />}
          </RightSection>
        </Wrapper>
      </Container>
      {showModal && <LoginModal setShowModal={setShowModal} />}
    </>
  );
};

export default Header;

const MobileNavToggle = styled.div`
  display: none;

  svg {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    display: flex;
    z-index: 99999;
  }
`;

const RightSection = styled(Flex)`
  gap: 15px;

  @media (max-width: 950px) {
    justify-content: flex-end;
  }
`;

const NavLink = styled(Flex)`
  gap: 15px;
`;

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
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
`;

const AllSub = styled.div`
  background-color: white;
  width: 100%;
  justify-content: flex-start;
  padding: 5px;
`;

const Quantity = styled.div`
  font-family: "Satoshi";
  font-weight: 700;
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
  gap: 35px;
  max-width: 1240px;
  padding: 10px;
`;

const Logo = styled.div`
  font-size: 32px;
  font-family: "Integral CF";
  font-weight: 700;
  color: #000;
  cursor: pointer;
  line-height: 1;
`;

const Icon = styled(Flex)`
  color: #000;
  height: 70px;
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
  padding: 5px;
  width: 100%;
  min-width: 60px;
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
  padding: 6px 12px;
  gap: 5px;
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
