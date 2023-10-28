import DownWardSvg from "@/assets/DownWardSvg";
import FilterSvg from "@/assets/FilterSvg";
import styled from "styled-components";
import StarSvg from "@/assets/StarSvg";
import ThreeDotsSvg from "@/assets/ThreeDotsSvg";
import VerifiedSvg from "@/assets/VerifiedSvg";

const Reviews = [
  {
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    title: "Samantha D.",
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "Posted on August 14, 2023",
  },
  {
    star: [...Array(3)].map((_, i) => <StarSvg key={i} />),
    title: "Ethan R.",
    review:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    date: "Posted on August 16, 2023",
  },
  {
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    title: "Liam K.",
    review:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    date: "Posted on August 18, 2023",
  },
];

const SecondReview = [
  {
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    title: "Alex M.",
    review:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: "Posted on August 15, 2023",
  },
  {
    star: [...Array(4)].map((_, i) => <StarSvg key={i} />),
    title: "Olivia P.",
    review:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    date: "Posted on August 17, 2023",
  },
  {
    star: [...Array(5)].map((_, i) => <StarSvg key={i} />),
    title: "Ava H.",
    review:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    date: "Posted on August 19, 2023",
  },
];

const ProductReview = () => {
  return (
    <Container>
      <Wrapper>
        <ReviewHead>
          <ProductInfo>Product Details</ProductInfo>
          <Rating>Rating & Reviews</Rating>
          <Faq>FAQs</Faq>
        </ReviewHead>
        <Margin />
        <ReviewButtons>
          <AllReview>
            <AllPara>All Reviews</AllPara>
            <ReviewCount>(451)</ReviewCount>
          </AllReview>
          <ReviewDirect>
            <FilterBtn>
              <FilterSvg />
            </FilterBtn>
            <LatestBtn>
              <LatestSvg>
                Latest <DownWardSvg />
              </LatestSvg>
            </LatestBtn>
            <WriteBtn>
              <WriteReview>Write a Review</WriteReview>
            </WriteBtn>
          </ReviewDirect>
        </ReviewButtons>
        <ReviewContent>
          {Reviews.map((item) => (
            <ReviewBox key={item.title}>
              <DotsSvg>
                <ReviewStar>{item.star}</ReviewStar>
                <ThreeDotsSvg />
              </DotsSvg>
              <VerifySvg>
                <ReviewTitle>{item.title}</ReviewTitle>
                <VerifiedSvg />
              </VerifySvg>
              <ReviewInfo>{item.review}</ReviewInfo>
              <ReviewDate>{item.date}</ReviewDate>
            </ReviewBox>
          ))}
          {SecondReview.map((item) => (
            <ReviewBox key={item.title}>
              <DotsSvg>
                <ReviewStar>{item.star}</ReviewStar>
                <ThreeDotsSvg />
              </DotsSvg>
              <VerifySvg>
                <ReviewTitle>{item.title}</ReviewTitle>
                <VerifiedSvg />
              </VerifySvg>
              <ReviewInfo>{item.review}</ReviewInfo>
              <ReviewDate>{item.date}</ReviewDate>
            </ReviewBox>
          ))}
        </ReviewContent>
        <MoreReview>
          <MoreReviewBtn>Load More Reviews</MoreReviewBtn>
        </MoreReview>
      </Wrapper>
    </Container>
  );
};

export default ProductReview;

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

const ReviewHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 24px;
`;

const ProductInfo = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 400;
`;

const Rating = styled.div`
  color: #000;
  text-align: center;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 500;
`;

const Faq = styled.div`
  color: rgba(0, 0, 0, 0.6);
  text-align: right;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 400;
`;

const ReviewButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
`;

const ReviewContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
`;

const Margin = styled.div`
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 1px;
`;

const AllReview = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const AllPara = styled.div`
  font-family: "Satoshi";
  font-size: 24px;
  font-weight: 700;
`;

const ReviewCount = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
`;

const ReviewDirect = styled.div`
  display: flex;
  gap: 10px;
`;

const FilterBtn = styled.div`
  border-radius: 62px;
  background: #f0f0f0;
  display: flex;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #d8d8d8;
  }
`;

const LatestBtn = styled.div`
  border-radius: 62px;
  background: #f0f0f0;
  display: flex;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #d8d8d8;
  }
`;

const LatestSvg = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const WriteBtn = styled.div`
  border-radius: 62px;
  background: #000;
  display: flex;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #454545;
  }
`;

const WriteReview = styled.div`
  color: #fff;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
`;

const ReviewBox = styled.div`
  width: 610px;
  margin-top: 20px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 28px 32px;
  flex-direction: column;
  flex-wrap: wrap;
`;

const ReviewStar = styled.div`
  display: flex;
  gap: 6px;
`;

const ReviewTitle = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 700;
  margin: 19px 0 16px 0;
`;

const ReviewInfo = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
`;

const ReviewDate = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
`;

const DotsSvg = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const VerifySvg = styled.div`
  display: flex;
  align-items: center;
`;

const MoreReview = styled.div`
  border-radius: 62px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 16px 54px;
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;
  cursor: pointer;
  &:hover {
    background-color: #d8d8d8;
  }
`;

const MoreReviewBtn = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
`;
