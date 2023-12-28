import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchSvg from "@/assets/SearchSvg";
import DropdownSvg from "@/assets/DropdownSvg";
import Profile from "@/assets/Profile";
import Cart from "@/assets/Cart";
import LoginModal from "./LoginModal";
import { withData } from "@/imports/allproducts/ui/components/api/context/data.context";
import { useRouter } from "next/router";
import nookies, { destroyCookie } from "nookies";

const Header = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSubcategory, setShowSubcategory] = useState(false);
  const {
    state: { allCategory, subcategory, allCart },
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

  useEffect(() => {
    getCategory();
    getCart(token);
  }, []);

  useEffect(() => {
    getCart(token);
  }, [token]);

  const getCategory = async () => {
    const response = await fetch(
      "http://localhost:8080/api/category/categories",
      { method: "GET" }
    );
    if (response.ok) {
      const responseData = await response.json();
      handleDataState("allCategory", responseData.category);
    }
  };

  const getSubcategory = async (id) => {
    if (subcategory[0]?.categoryId !== id) {
      const response = await fetch(
        `http://localhost:8080/api/subcategory/subcategories?categoryId=${id}`,
        { method: "GET" }
      );
      if (response.ok) {
        const responseData = await response.json();
        handleDataState("subcategory", responseData.category.subcategories);
        setShowSubcategory(true);
      }
    } else {
      setShowSubcategory(true);
    }
  };

  const getCart = async (token) => {
    const response = await fetch("http://localhost:8080/api/cart/carts", {
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

  const quantity = allCart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const productHandler = (id) => {
    router.push(`/product-collection/${id}`);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Logo>SHOP.CO</Logo>
          {allCategory.map((category) => (
            <Icon
              onMouseEnter={() => getSubcategory(category._id)}
              key={category._id}
            >
              <Shop>{category.category_name}</Shop>
            </Icon>
          ))}
          {/* <Shop>
              <p>Shop</p>
              <DropdownSvg />
            </Shop>
            <Sale>On Sale</Sale>
            <Arrival>New Arrivals</Arrival>
            <Brand>Brands</Brand> */}
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
            <CartSvg onClick={() => router.push("cartview")}>
              <Cart />
              {token && <Quantity>{quantity}</Quantity>}
            </CartSvg>
            {!token ? (
              <ProfileSvg onClick={() => setShowModal(true)}>
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
      {showSubcategory && (
        <Dropdown onMouseLeave={() => setShowSubcategory(false)}>
          {subcategory.map((sub) => (
            <AllSub key={sub._id}>
              <Sub onClick={() => productHandler(sub._id)}>
                {sub.subcategory_name}
              </Sub>
            </AllSub>
          ))}
        </Dropdown>
      )}
    </>
  );
};

export default Header;

// Header.getInitialProps = async () => {
//   try {
//     const response = await fetch(
//       "http://localhost:8080/api/category/categories",
//       { method: "GET" }
//     );
//     if (response.ok) {
//       const responseData = await response.json();
//       return { allCategory: responseData.category };
//     } else {
//       return { allCategory: null };
//     }
//   } catch (error) {
//     console.error("Error fetching subcategories:", error);
//     return { allCategory: null };
//   }
// };

const Container = styled.div`
  width: 100%;
  background: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  z-index: 2;
`;

const Dropdown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  position: absolute;
  z-index: 2;
`;

const AllSub = styled.div`
  background-color: white;
  width: 45%;
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
  gap: 24px;
  align-items: center;
  font-family: "Satoshi";
  font-weight: 600;
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
  position: relative;
`;

const ProfileSvg = styled.div`
  cursor: pointer;
`;
