import { useState } from "react";
import styled from "styled-components";
import SearchSvg from "@/assets/SearchSvg";
import DropdownSvg from "@/assets/DropdownSvg";
import Profile from "@/assets/Profile";
import Cart from "@/assets/Cart";

const Header = () => {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Container>
      <Wrapper>
        <Logo>SHOP.CO</Logo>
        <Icon>
          <Shop>
            <p>Shop</p>
            <DropdownSvg />
          </Shop>
          <Sale>On Sale</Sale>
          <Arrival>New Arrivals</Arrival>
          <Brand>Brands</Brand>
        </Icon>
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
          <CartSvg>
            <Cart />
          </CartSvg>
          <ProfileSvg>
            <Profile />
          </ProfileSvg>
        </Carts>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  background: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
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
  gap: 24px;
  align-items: center;
  font-family: "Satoshi";
  font-weight: 400;
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

const Sale = styled.div`
  cursor: pointer;
`;
const Arrival = styled.div`
  cursor: pointer;
`;
const Brand = styled.div`
  cursor: pointer;
`;

const CartSvg = styled.div`
  cursor: pointer;
`;

const ProfileSvg = styled.div`
  cursor: pointer;
`;
