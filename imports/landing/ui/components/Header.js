import { useState } from "react";
import styled, { css } from "styled-components";
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

const Header = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
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

  const handleSubcategory = (id) => async () => {
    if (!isDesktop) {
      setActiveCategory(id === activeCategory ? null : id);
    }
    dispatch(fetchSubcategories({ id, subcategory, dispatch, getSubcategory }));
  };

  const quantity = allCart?.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const productHandler = (cid, sid) => () =>
    router.push(`/product-collection/cid=${cid}&sid=${sid}`);

  const cartRouteHandler = () => router.push("cartview");
  const handleRedirectHome = () => router.push("/");

  const profileHandler = () => setShowModal(true);
  const toggleSidebar = () => setShowSideBar(!showSideBar);

  const isDesktop = width > 890;

  return (
    <HeaderSection justifyContent="center" alignItems="center" fullWidth>
      <Container justifyContent="space-between" alignItems="center" fullWidth>
        <LeftSection justifyContent="space-between" alignItems="center">
          {!isDesktop && (
            <MobileNavToggle onClick={toggleSidebar}>
              {showSideBar ? <CloseSlider /> : <OpenSlider />}
            </MobileNavToggle>
          )}
          <LogoSection onClick={handleRedirectHome}>SHOP.CO</LogoSection>
        </LeftSection>
        <RightSection
          justifyContent="space-between"
          alignItems="center"
          fullWidth
        >
          <Navbar
            alignItems="center"
            justifyContent="space-evenly"
            fullWidth
            onSidebar={!showSideBar && !isDesktop}
          >
            {allCategory?.map((category) => (
              <CategoryText
                key={category._id}
                onMouseEnter={
                  isDesktop ? getAllSubcategory(category._id) : null
                }
                onClick={handleSubcategory(category._id)}
                isDesk={isDesktop}
                showDropdown={activeCategory === category._id}
              >
                {category.category_name}
                <Dropdown>
                  {subcategory.map((sub) => (
                    <SubcategoryText
                      key={sub._id}
                      onClick={productHandler(sub.categoryId, sub._id)}
                    >
                      {sub.subcategory_name}
                    </SubcategoryText>
                  ))}
                </Dropdown>
              </CategoryText>
            ))}
          </Navbar>
          {isDesktop ? (
            <SearchWrapper fullWidth alignItems="center">
              <SvgWrap>
                <SearchSvg />
              </SvgWrap>
              <SearchInput
                type="text"
                placeholder="Search for products..."
                onChange={searchHandler}
                value={search}
              />
            </SearchWrapper>
          ) : (
            <SvgWrap>
              <SearchSvg />
            </SvgWrap>
          )}
          <CartSvgWrap onClick={cartRouteHandler}>
            <Cart />
            {token && <Quantity>{quantity}</Quantity>}
          </CartSvgWrap>
          <ProfileSvgWrap>
            <Profile />
            <MoreDetails
              direction="column"
              fullWidth
              alignItems="center"
              justifyContent="center"
            >
              {!token ? (
                <FieldButton onClick={profileHandler}>Login</FieldButton>
              ) : (
                <FieldButton onClick={logoutHandler}>Logout</FieldButton>
              )}
            </MoreDetails>
          </ProfileSvgWrap>
        </RightSection>
      </Container>
      {showModal && <LoginModal setShowModal={setShowModal} />}
    </HeaderSection>
  );
};

export default Header;

const Quantity = styled.div`
  position: absolute;
  font-family: "SatoshiBold";
  padding: 2px 4px;
  top: -5px;
  right: -5px;
  background: green;
  border-radius: 50%;
  font-size: 11px;
`;

const FieldButton = styled.button`
  cursor: pointer;
  background-color: #000;
  color: #fff;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  font-size: 18px;
  border: none;

  &:hover {
    background-color: #454545;
  }
`;

const MoreDetails = styled(Flex)`
  display: none;
  position: absolute;
  right: 0;
  top: 100%;
  width: 95px;
  background: #fff;
  padding: 5px;
  gap: 5px;
  border-radius: 5px;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  width: 100%;
  font-family: "SatoshiLight";
  &:focus {
    outline: none;
  }
`;

const CartSvgWrap = styled(Flex)`
  position: relative;
  cursor: pointer;
`;

const ProfileSvgWrap = styled(Flex)`
  position: relative;
  cursor: pointer;
  &:hover {
    ${MoreDetails} {
      display: flex;
    }
  }
`;

const SvgWrap = styled(Flex)`
  cursor: pointer;
`;

const SearchWrapper = styled(Flex)`
  padding: 5px;
  gap: 12px;
  max-width: 300px;
  background-color: #f0f0f0;
  border-radius: 3px;

  @media (max-width: 1024px) {
    max-width: 175px;
  }
`;

const SubcategoryText = styled(Flex)`
  font-family: "Satoshi";
  cursor: pointer;
  &:hover {
    font-family: "SatoshiBold";
  }
`;

const Dropdown = styled(Flex)`
  top: 70%;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  width: auto;
  display: none;
  flex-direction: column;
  position: absolute;
  padding: 10px;
  gap: 10px;

  @media (max-width: 890px) {
    position: relative;
    width: 100%;
    left: 10px;
  }
`;

const CategoryText = styled(Flex)`
  cursor: pointer;
  ${({ isDesk }) =>
    isDesk &&
    css`
      &:hover {
        border-bottom: 4px solid #0db7af;

        ${Dropdown} {
          display: flex;
        }
      }
    `}

  @media (max-width: 890px) {
    flex-direction: column;
    position: relative;

    ${({ showDropdown }) =>
      showDropdown &&
      css`
        ${Dropdown} {
          display: flex;
        }
      `}
  }
`;

const Navbar = styled(Flex)`
  ${({ onSidebar }) =>
    onSidebar &&
    css`
      display: none;
    `}

  @media (max-width: 890px) {
    position: absolute;
    flex-direction: column;
    background-color: #fff;
    min-height: 100vh;
    left: 0;
    top: 100%;
    gap: 20px;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
  }
`;

const RightSection = styled(Flex)`
  gap: 10px;

  @media (max-width: 890px) {
    justify-content: flex-end;
  }
`;

const MobileNavToggle = styled(Flex)`
  z-index: 99999;
  svg {
    cursor: pointer;
  }
`;

const LogoSection = styled.div`
  font-family: "IntegralCF";
  font-size: 30px;
  cursor: pointer;
  line-height: 1;

  @media (max-width: 890px) {
    font-size: 25px;
  }
`;

const LeftSection = styled(Flex)`
  gap: 16px;
`;

const Container = styled(Flex)`
  gap: 35px;
  max-width: 1240px;
  padding: 15px 10px;

  @media (max-width: 890px) {
    padding: 10px;
  }
`;

const HeaderSection = styled(Flex)`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  gap: 5px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
`;
