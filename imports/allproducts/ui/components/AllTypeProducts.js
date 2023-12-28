import ArrowSvg from "@/assets/ArrowSvg";
import BlackSvg from "@/assets/ColorSvg/BlackSvg";
import BlueSvg from "@/assets/ColorSvg/BlueSvg";
import IndigoSvg from "@/assets/ColorSvg/IndigoSvg";
import LightGreenSvg from "@/assets/ColorSvg/LightGreenSvg";
import LightPurpleSvg from "@/assets/ColorSvg/LightPurpleSvg";
import OrangeSvg from "@/assets/ColorSvg/OrangeSvg";
import PinkSvg from "@/assets/ColorSvg/PinkSvg";
import RedSvg from "@/assets/ColorSvg/RedSvg";
import WhiteSvg from "@/assets/ColorSvg/WhiteSvg";
import YellowSvg from "@/assets/ColorSvg/YellowSvg";
import FilterSvg from "@/assets/FilterSvg";
import UpperArrowSvg from "@/assets/UpperArrowSvg";
import CorrectSvg from "@/assets/ColorSvg/Correct";
import styled, { css } from "styled-components";
import DropdownSvg from "@/assets/DropdownSvg";
import StarSvg from "@/assets/StarSvg";
import { useRouter } from "next/router";
import ReactSlider from "react-slider";
import { useEffect } from "react";
import { withData } from "./api/context/data.context";

const MultipleProductsOne = [
  {
    title: "Gradient Graphic T-shirt",
    rating: "3/5",
    rate: "$145",
    star: [...Array(3)].map((_, i) => <StarSvg key={i} />),
    src: "/image20.png",
    alt: "image-20",
    id: 10,
  },
  {
    title: "Polo with Tipping Details",
    rating: "4/5",
    rate: "$180",
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    src: "/image21.png",
    alt: "image-21",
    id: 11,
  },
  {
    title: "Black Striped T-shirt",
    rating: "5/5",
    rate: "$120",
    star: [...Array(5)].map((_, i) => <StarSvg key={i} />),
    src: "/image22.png",
    alt: "image-22",
    discount: "$150",
    offer: "-30%",
    id: 12,
  },
];

const MultipleProductsTwo = [
  {
    title: "Skinny Fit Jeans",
    id: 2,
    rating: "3/5",
    rate: "$240",
    discount: "$260",
    offer: "-20%",
    star: [...Array(3)].map((_, i) => <StarSvg key={i} />),
    src: "/image8.png",
    alt: "image-2",
  },
  {
    title: "Checkered Shirt",
    id: 3,
    rating: "4/5",
    rate: "$180",
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    src: "/image9.png",
    alt: "image-3",
  },
  {
    title: "Sleeve Striped T-shirt",
    id: 4,
    rating: "4/5",
    rate: "$130",
    discount: "$160",
    offer: "-30%",
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    src: "/image10.png",
    alt: "image-4",
  },
];

const MultipleProductsThree = [
  {
    title: "Vertical Striped Shirt",
    rating: "5/5",
    rate: "$212",
    star: [...Array(5)].map((_, i) => <StarSvg key={i} />),
    src: "/image11.png",
    alt: "image-5",
    discount: "$232",
    offer: "-20%",
    id: 5,
  },
  {
    title: "Courage Graphic T-shirt",
    rating: "4/5",
    rate: "$145",
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    src: "/image12.png",
    alt: "image-6",
    id: 6,
  },
  {
    title: "Loose Fit Bermuda Shorts",
    rating: "3/5",
    rate: "$80",
    star: [...Array(3)].map((_, i) => <StarSvg key={i} />),
    src: "/image13.png",
    alt: "image-7",
    id: 7,
  },
];

const AllTypeProducts = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    state: { product, subcategory, selectedCategoryId, selectedSubcategory },
    handleDataState,
  } = withData();
  // const [toggle, setToggle] = useState({
  //   first: false,
  //   second: false,
  //   third: true,
  // });

  // const toggleHandler = (i) => {
  //   setToggle(!toggle);
  // };

  useEffect(() => {
    getProducts(id);
  }, [id]);

  useEffect(() => {
    getSubcategory(selectedCategoryId);
  }, [selectedCategoryId]);

  const getProducts = async (id) => {
    const response = await fetch(
      `http://localhost:8080/api/product/products?subcategoryId=${id}`,
      { method: "GET" }
    );
    if (response.ok) {
      const responseData = await response.json();
      handleDataState(
        "selectedCategoryId",
        responseData?.subcategories?.categoryId
      );
      handleDataState("selectedSubcategory", responseData.subcategories);
      handleDataState("product", responseData.subcategories.products);
    }
  };

  const getSubcategory = async (selectedCategoryId) => {
    const response = await fetch(
      `http://localhost:8080/api/subcategory/subcategories?categoryId=${selectedCategoryId}`,
      { method: "GET" }
    );
    if (response.ok) {
      const responseData = await response.json();
      handleDataState("subcategory", responseData.category.subcategories);
    }
  };

  const HandleProduct = (id) => {
    router.push(`/products/${id}`);
  };

  const filterHandler = (id) => {
    router.push(`/product-collection/${id}`);
    getProducts(id);
  };

  return (
    <Container>
      <Wrapper>
        <Margin />
        <TopHead>
          <Home onClick={() => router.push("/")}>Home</Home>
          <ArrowSvg />
          <Casual>{selectedSubcategory?.subcategory_name}</Casual>
        </TopHead>
        <ProductContent>
          <Filters>
            <FilterRow>
              <FilterName>Filters</FilterName>
            </FilterRow>
            <Margin />
            <Varities>
              {subcategory.map((sub) => (
                <VarGroup
                  onClick={() => filterHandler(sub._id)}
                  key={sub._id}
                  active={sub?._id === selectedSubcategory?._id}
                >
                  <VarityName>{sub.subcategory_name}</VarityName>
                </VarGroup>
              ))}
            </Varities>
            <Margin />
            <PriceSvg>
              <PriceContent>
                <Price>Price</Price>
                <UpperArrowSvg />
              </PriceContent>
              <SliderWrap>
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  defaultValue={[50, 250]}
                  ariaLabel={["Lower thumb", "Upper thumb"]}
                  ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                  renderThumb={(props, state) => (
                    <div {...props}>{state.valueNow}</div>
                  )}
                  pearling
                  minDistance={10}
                  min={50}
                  max={250}
                />
              </SliderWrap>
            </PriceSvg>
            <Margins />
            <PriceContent>
              <Price>Colors</Price>
              <UpperArrowSvg />
            </PriceContent>
            <ColorsSvg>
              <FirstRowColor>
                <LightGreenSvg />
                <RedSvg />
                <YellowSvg />
                <OrangeSvg />
                <BlueSvg />
              </FirstRowColor>
              <SecondRowColor>
                <IndigoCorrect>
                  <Indigo>
                    <IndigoSvg />
                  </Indigo>
                  <Correct>
                    <CorrectSvg />
                  </Correct>
                </IndigoCorrect>
                <LightPurpleSvg />
                <PinkSvg />
                <WhiteSvg />
                <BlackSvg />
              </SecondRowColor>
            </ColorsSvg>
            <Margin />
            <PriceContent>
              <Price>Size</Price>
              <UpperArrowSvg />
            </PriceContent>
            <ButtonList>
              <BtnBack
              // toggle={toggle.first}
              // selected={"first"}
              // onClick={() => toggleHandler("first")}
              >
                <Size>XX-Small</Size>
              </BtnBack>
              <BtnBack
              // toggle={toggle.second}
              // selected={"second"}
              // onClick={() => toggleHandler("second")}
              >
                <Size>X-Small</Size>
              </BtnBack>
              <BtnBack
              // toggle={toggle.third}
              // selected={"third"}
              // onClick={() => toggleHandler("third")}
              >
                <Size>Small</Size>
              </BtnBack>
              <BtnBack>
                <Size>Medium</Size>
              </BtnBack>
              <BtnLargeBack>
                <LargeSize>Large</LargeSize>
              </BtnLargeBack>
              <BtnBack>
                <Size>X-Large</Size>
              </BtnBack>
              <BtnBack>
                <Size>XX-Large</Size>
              </BtnBack>
              <BtnBack>
                <Size>3X-Large</Size>
              </BtnBack>
              <BtnBack>
                <Size>4X-Large</Size>
              </BtnBack>
            </ButtonList>
            <Margin />
            <ApplyBack>
              <ApplyBtn>Apply Filter</ApplyBtn>
            </ApplyBack>
          </Filters>
          <ProductsList>
            <MainHeadline>
              <Cas>{selectedSubcategory?.subcategory_name}</Cas>
              <MultiHead>
                <ShowProduct>Showing 1-10 of 100 Products</ShowProduct>
                <Sort>Sort by:</Sort>
                <Popular>Most Popular</Popular>
                <DropdownSvg />
              </MultiHead>
            </MainHeadline>
            <MultipleRow>
              <SellingProduct>
                {product.map((items) => (
                  <MainDiv
                    onClick={() => HandleProduct(items._id)}
                    key={items._id}
                  >
                    <MainImg src={items.product_img} alt="product" />
                    <Title>{items.product_name}</Title>
                    <StarRating>
                      {items.rating &&
                        [...Array(Number(items.rating))].map((_, i) => (
                          <StarSvg key={i} />
                        ))}
                      <Rating>{items.rating}/5</Rating>
                    </StarRating>
                    <DisRate>
                      <Rate>₹{items.price}</Rate>
                      <Discount>{items.discount}</Discount>
                      {items.offer ? <DisPer>-{items.offer}%</DisPer> : ""}
                    </DisRate>
                  </MainDiv>
                ))}
              </SellingProduct>
              <SellingProduct>
                {MultipleProductsTwo.map((items) => (
                  <MainDiv
                    onClick={() => HandleProduct(items.id)}
                    key={items.title}
                  >
                    <MainImg src={items.src} alt={items.alt} />
                    <Title>{items.title}</Title>
                    <StarRating>
                      <div>{items.star}</div>
                      <Rating>{items.rating}</Rating>
                    </StarRating>
                    <DisRate>
                      <Rate>{items.rate}</Rate>
                      <Discount>{items.discount}</Discount>
                      {items.offer ? <DisPer>{items.offer}</DisPer> : ""}
                    </DisRate>
                  </MainDiv>
                ))}
              </SellingProduct>
              <SellingProduct>
                {MultipleProductsThree.map((items) => (
                  <MainDiv
                    onClick={() => HandleProduct(items.id)}
                    key={items.title}
                  >
                    <MainImg src={items.src} alt={items.alt} />
                    <Title>{items.title}</Title>
                    <StarRating>
                      <div>{items.star}</div>
                      <Rating>{items.rating}</Rating>
                    </StarRating>
                    <DisRate>
                      <Rate>{items.rate}</Rate>
                      <Discount>{items.discount}</Discount>
                      {items.offer ? <DisPer>{items.offer}</DisPer> : ""}
                    </DisRate>
                  </MainDiv>
                ))}
              </SellingProduct>
            </MultipleRow>
          </ProductsList>
        </ProductContent>
      </Wrapper>
    </Container>
  );
};

export default AllTypeProducts;

const SliderWrap = styled.div`
  .example-track.example-track-0 {
    height: 10px;
    background-color: gray;
  }

  .example-track.example-track-1 {
    height: 10px;
    background-color: blue;
  }

  .example-track.example-track-2 {
    height: 10px;
    background-color: gray;
  }

  .example-thumb {
    font-size: 0.9em;
    text-align: center;
    background-color: black;
    color: white;
    cursor: pointer;
    border: 5px solid black;
    border-radius: 8px;
  }
`;

const VarGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  gap: 20px;

  ${({ active }) =>
    active &&
    css`
      background-color: #f0f0f0;
      padding: 5px;
      border-radius: 10px;
    `}
`;

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

const Margins = styled.div`
  background: rgba(0, 0, 0, 0.1);
  height: 1px;
  width: 100%;
  margin-top: 50px;
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

const Casual = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

const ProductContent = styled.div`
  display: flex;
  gap: 21px;
`;

const Filters = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  width: 295px;
  padding: 20px 24px;
  flex-direction: column;
  margin-top: 24px;
`;

const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FilterRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  cursor: pointer;
`;
const FilterName = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 700;
`;

const Varities = styled.div`
  margin: 24px 0 24px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Varity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const VarityName = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
`;

const PriceSvg = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 20px 0;
  cursor: pointer;
`;

const Price = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 700;
`;

const BrightPer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 4px;
  margin-bottom: 24px;
`;

const BrightPrice = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 14px;
  font-weight: 500;
`;

const ColorsSvg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

const FirstRowColor = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SecondRowColor = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonList = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const BtnBack = styled.div`
  border-radius: 62px;
  /* background: ${(props) => (props.selected ? "black" : "#F0F0F0")}; */
  display: flex;
  background: #f0f0f0;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #d8d8d8;
  }
`;

const Size = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 14px;
  font-weight: 400;
`;

const BtnLargeBack = styled(BtnBack)`
  border-radius: 62px;
  background: #000;
  cursor: pointer;
  &:hover {
    background-color: #454545;
  }
`;

const LargeSize = styled(Size)`
  color: #fff;
  font-weight: 500;
`;

const VaritiesExtra = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ApplyBack = styled.div`
  margin-top: 24px;
  border-radius: 62px;
  background: #000;
  display: flex;
  padding: 16px 54px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #454545;
  }
`;

const ApplyBtn = styled.div`
  color: #fff;
  font-family: "Satoshi";
  font-size: 14px;
  font-weight: 500;
`;

const IndigoCorrect = styled.div`
  display: flex;
`;

const Indigo = styled.div`
  position: relative;
  cursor: pointer;
`;

const Correct = styled.div`
  position: absolute;
  margin: 10px;
  cursor: pointer;
`;

const MainHeadline = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  justify-content: space-between;
`;
const Cas = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 32px;
  font-weight: 700;
`;

const MultiHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ShowProduct = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
`;

const Sort = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
`;

const Popular = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
`;

const SellingProduct = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 700;
`;

const StarRating = styled.div`
  display: flex;
  gap: 13px;
`;

const Rating = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 14px;
  font-weight: 400;
`;
const Rate = styled.div`
  font-family: "Satoshi";
  font-size: 24px;
  font-weight: 700;
`;

const Discount = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-family: "Satoshi";
  font-size: 24px;
  font-weight: 700;
  text-decoration: line-through;
`;

const DisPer = styled.div`
  border-radius: 62px;
  background: rgba(255, 51, 51, 0.1);
  width: 58px;
  padding: 7px 14px;
  color: #f33;
  font-family: "Satoshi";
  font-size: 12px;
  font-weight: 500;
`;

const DisRate = styled.div`
  display: flex;
  gap: 10px;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MainImg = styled.img`
  border-radius: 20px;
  width: 250px;
  height: 250px;
`;

const MultipleRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;
