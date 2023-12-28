import styled from "styled-components";
import StarSvg from "@/assets/StarSvg";
import Link from "next/link";

const Suggestion = [
  {
    title: "Polo with Contrast Trims",
    rating: "4/5",
    rate: "₹212",
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    src: "/image19.png",
    alt: "image-19",
    discount: "₹242",
    offer: "-20%",
    id: 9,
  },
  {
    title: "Gradient Graphic T-shirt",
    rating: "3/5",
    rate: "₹145",
    star: [...Array(3)].map((_, i) => <StarSvg key={i} />),
    src: "/image20.png",
    alt: "image-20",
    id: 10,
  },
  {
    title: "Polo with Tipping Details",
    rating: "4/5",
    rate: "₹180",
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    src: "/image21.png",
    alt: "image-21",
    id: 11,
  },
  {
    title: "Black Striped T-shirt",
    rating: "5/5",
    rate: "₹120",
    star: [...Array(5)].map((_, i) => <StarSvg key={i} />),
    src: "/image22.png",
    alt: "image-22",
    discount: "₹150",
    offer: "-30%",
    id: 12,
  },
];

const SuggestionProduct = () => {
  return (
    <Container>
      <Wrapper>
        <LikePara>YOU MIGHT ALSO LIKE</LikePara>
        <ProductSuggest>
          {Suggestion.map((items) => (
            <Link href={`/products/${items.id}`} key={items.title}>
              <MainDiv key={items.title}>
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
            </Link>
          ))}
        </ProductSuggest>
      </Wrapper>
    </Container>
  );
};

export default SuggestionProduct;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LikePara = styled.div`
  color: #000;
  text-align: center;
  font-family: "Integral CF";
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const ProductSuggest = styled.div`
  display: flex;
  gap: 21px;
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
  padding: 6px 14px;
  color: #f33;
  font-family: "Satoshi";
  font-size: 12px;
  font-weight: 500;
`;

const DisRate = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 168px;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MainImg = styled.img`
  border-radius: 20px;
`;
