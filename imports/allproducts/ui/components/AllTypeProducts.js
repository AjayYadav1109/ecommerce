import ArrowSvg from "@/assets/ArrowSvg";
import styled, { css, keyframes } from "styled-components";
import DropdownSvg from "@/assets/DropdownSvg";
import StarSvg from "@/assets/StarSvg";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedSubcategory } from "../../apis/slice/categorySlice";
import Flex from "../../atoms/Flex";
import { ALL_SIZES, PAGE_NUMBER } from "../../apis/api/api";
import LeftArrowSvg from "@/assets/LeftArrowSvg";
import RightArrowSvg from "@/assets/RightArrowSvg";
import useWindowSize from "@/imports/landing/ui/hooks/useWindowSize";
import FilterSvg from "@/assets/FilterSvg";
import { useState } from "react";
import CloseSlider from "@/assets/CloseSlider";

const AllTypeProducts = () => {
  const router = useRouter();
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const subcategory = useSelector((store) => store.category.subcategory);
  const product = useSelector((store) => store.product.products);
  const selectedSubcategory = useSelector(
    (store) => store.category.selectedSubcategory
  );
  const [openFilter, setOpenFilter] = useState(false);

  const HandleProduct = (id) => () => router.push(`/products/${id}`);

  const filterHandler = (cid, sid) => () => {
    dispatch(getSelectedSubcategory(sid));
    router.push(`/product-collection/cid=${cid}&sid=${sid}`);
  };

  const homeHandler = () => router.push("/");
  const handleShowFilter = () => setOpenFilter(!openFilter);
  const isDesktop = width > 890;

  return (
    <Flex justifyContent="center" alignItems="center" fullWidth>
      <Container direction="column" fullWidth>
        <Border />
        <TopSection alignItems="center" fullWidth>
          <HomeLink onClick={homeHandler}>Home</HomeLink>
          <ArrowSvg />
          <CategoryText>{selectedSubcategory?.subcategory_name}</CategoryText>
        </TopSection>
        <ProductContent fullWidth>
          <FilterContainer
            direction="column"
            isDesktop={isDesktop}
            openFilter={openFilter}
          >
            <Flex justifyContent="space-between" alignItems="center" fullWidth>
              <FilterTitle>Filters</FilterTitle>
              {!isDesktop && (
                <FilterSvgWrap onClick={handleShowFilter}>
                  <CloseSlider />
                </FilterSvgWrap>
              )}
            </Flex>
            <Border />
            <SubcatTextWrap direction="column" fullWidth>
              {subcategory?.map((sub) => (
                <SubcategoryText
                  fullWidth
                  onClick={filterHandler(sub.categoryId, sub._id)}
                  key={sub._id}
                  active={sub._id === selectedSubcategory?._id}
                >
                  {sub.subcategory_name}
                </SubcategoryText>
              ))}
            </SubcatTextWrap>
            <Border />
            <FilterTitle>Size</FilterTitle>
            <ButtonList fullWidth wrap="wrap">
              {ALL_SIZES.map((v) => (
                <SizeButton
                  justifyContent="center"
                  alignItems="center"
                  active={v === "Large"}
                >
                  {v}
                </SizeButton>
              ))}
            </ButtonList>
            <Border />
            <ApplyBtn justifyContent="center" alignItems="center" fullWidth>
              Apply Filter
            </ApplyBtn>
          </FilterContainer>
          <ProductsList direction="column" fullWidth>
            <Flex alignItems="center" justifyContent="space-between" fullWidth>
              <MainTitle>{selectedSubcategory?.subcategory_name}</MainTitle>
              <DiscHead alignItems="center">
                Showing 1-10 of 100 Products
                {isDesktop && (
                  <PopularText justifyContent="center" alignItems="center">
                    Sort by: Most Popular <DropdownSvg />
                  </PopularText>
                )}
              </DiscHead>
            </Flex>
            <SellingProduct>
              {product?.map((items) => (
                <ProductBox
                  direction="column"
                  key={items._id}
                  onClick={HandleProduct(items._id)}
                >
                  <ProductImg imageUrl={items.product_img} />
                  <ProductTitle>{items.product_name}</ProductTitle>
                  <RatingWrap>
                    {items.rating &&
                      [...Array(Number(items.rating))].map((_, i) => (
                        <StarSvg key={i} />
                      ))}
                    <Rating>{items.rating}/5</Rating>
                  </RatingWrap>
                  <PriceDetails>
                    <PriceText>₹{items.price}</PriceText>
                    <DiscountText>{items.discount}</DiscountText>
                    {items.offer && <DiscountPer>-{items.offer}%</DiscountPer>}
                  </PriceDetails>
                </ProductBox>
              ))}
            </SellingProduct>
            {!isDesktop && (
              <FilterWrap
                justifyContent="center"
                alignItems="center"
                fullWidth
                onClick={handleShowFilter}
              >
                <FilterSvg />
                Filter
              </FilterWrap>
            )}
            <Border />
            <PaginationContainer
              justifyContent="space-between"
              alignItems="center"
              fullWidth
            >
              <NextPaginationBtn justifyContent="center" alignItems="center">
                <LeftArrowSvg />
                {isDesktop && "Previous"}
              </NextPaginationBtn>
              <PageNumWrap>
                {PAGE_NUMBER.map((v) => (
                  <PageNumber
                    justifyContent="center"
                    alignItems="center"
                    active={v === "1"}
                  >
                    {v}
                  </PageNumber>
                ))}
              </PageNumWrap>
              <NextPaginationBtn justifyContent="center" alignItems="center">
                {isDesktop && "Next"}
                <RightArrowSvg />
              </NextPaginationBtn>
            </PaginationContainer>
          </ProductsList>
        </ProductContent>
      </Container>
    </Flex>
  );
};

export default AllTypeProducts;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FilterWrap = styled(Flex)`
  gap: 10px;
  background: #000;
  border-radius: 20px;
  padding: 10px 10px;
  cursor: pointer;
  position: sticky;
  bottom: 20px;
  color: #fff;

  svg {
    fill: #fff;
    stroke: #fff;
  }

  &:hover {
    background: #454545;
  }
`;

const PageNumber = styled(Flex)`
  border-radius: 8px;
  width: 40px;
  height: 40px;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background: rgba(0, 0, 0, 0.06);
    `}

  &:hover {
    background-color: #d8d8d8;
  }

  @media (max-width: 890px) {
    width: 36px;
    height: 36px;
  }
`;

const PageNumWrap = styled(Flex)`
  gap: 5px;
`;

const NextPaginationBtn = styled(Flex)`
  gap: 8px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px 14px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  font-family: "Satoshi";

  &:hover {
    background-color: #d8d8d8;
  }

  @media (max-width: 890px) {
    padding: 8px 10px;
  }
`;

const PaginationContainer = styled(Flex)`
  gap: 10px;
`;

const DiscountPer = styled(Flex)`
  border-radius: 15px;
  background: rgba(255, 51, 51, 0.1);
  padding: 6px 14px;
  color: #f33;
  font-family: "Satoshi";
  font-size: 12px;
`;

const DiscountText = styled(Flex)`
  color: rgba(0, 0, 0, 0.4);
  font-family: "SatoshiBold";
  font-size: 24px;
  text-decoration: line-through;
`;

const PriceText = styled(Flex)`
  font-family: "SatoshiBold";
  font-size: 24px;
`;

const PriceDetails = styled(Flex)`
  gap: 10px;
`;

const Rating = styled(Flex)`
  color: rgba(0, 0, 0, 0.6);
  font-family: "SatoshiLight";
  font-size: 14px;
`;
const RatingWrap = styled(Flex)`
  gap: 5px;
`;

const ProductTitle = styled(Flex)`
  font-family: "SatoshiBold";
  font-size: 20px;
`;

const ProductImg = styled.div`
  width: 275px;
  height: 278px;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const ProductBox = styled(Flex)`
  gap: 10px;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const SellingProduct = styled.div`
  gap: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  place-items: center;
  row-gap: 50px;
`;

const FilterSvgWrap = styled(Flex)`
  cursor: pointer;
  background: #f0f0f0;
  padding: 8px;
  border-radius: 30px;
`;

const PopularText = styled(Flex)`
  gap: 10px;
  color: #000;
  font-family: "Satoshi";
  font-size: 16px;
`;

const DiscHead = styled(Flex)`
  font-family: "SatoshiLight";
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  gap: 10px;
`;

const MainTitle = styled(Flex)`
  font-family: "SatoshiBold";
  font-size: 32px;
  color: #000;

  @media (max-width: 520px) {
    font-size: 24px;
  }
`;

const ProductsList = styled(Flex)`
  gap: 20px;
`;

const ApplyBtn = styled(Flex)`
  border-radius: 30px;
  background: #000;
  padding: 12px 12px;
  color: #fff;
  font-family: "Satoshi";
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #454545;
  }
`;

const SizeButton = styled(Flex)`
  border-radius: 30px;
  background: #f0f0f0;
  padding: 10px 20px;
  font-family: "SatoshiLight";
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background: #000;
      color: #fff;
    `}

  &:hover {
    background-color: #454545;
    color: #fff;
  }
`;

const ButtonList = styled(Flex)`
  gap: 6px;
`;

const SubcategoryText = styled(Flex)`
  color: rgba(0, 0, 0, 0.6);
  font-family: "SatoshiLight";
  font-size: 16px;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background-color: #f0f0f0;
      padding: 5px;
      border-radius: 5px;
    `}
`;

const SubcatTextWrap = styled(Flex)`
  gap: 20px;
`;

const FilterTitle = styled(Flex)`
  color: #000;
  font-family: "SatoshiBold";
  font-size: 20px;
`;

const FilterContainer = styled(Flex)`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 295px;
  padding: 20px 24px;
  gap: 24px;
  background: #fff;

  ${({ isDesktop }) =>
    !isDesktop &&
    css`
      display: none;
    `}

  ${({ openFilter }) =>
    openFilter &&
    css`
      display: flex;
      position: fixed;
      inset: 0;
      z-index: 10;
      overflow: auto;
      border-radius: 10px 10px 0 0;
    `}

  @media (max-width: 890px) {
    width: 100%;
  }
`;

const ProductContent = styled(Flex)`
  gap: 20px;
  position: relative;
`;

const CategoryText = styled(Flex)`
  color: #000;
  font-family: "SatoshiLight";
  font-size: 16px;
  cursor: pointer;
`;

const HomeLink = styled(Flex)`
  color: rgba(0, 0, 0, 0.6);
  font-family: "SatoshiLight";
  font-size: 16px;
  cursor: pointer;
`;

const TopSection = styled(Flex)`
  gap: 12px;
`;

const Border = styled.div`
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 1px;
`;

const Container = styled(Flex)`
  max-width: 1240px;
  margin-top: 70px;
  padding: 0 10px;
  gap: 24px;
`;
