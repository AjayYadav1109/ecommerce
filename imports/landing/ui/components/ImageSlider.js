import styled from "styled-components";
import Slider from "react-slick";
import LeftArrowSvg from "@/assets/LeftArrowSvg";
import RightArrowSvg from "@/assets/RightArrowSvg";
import StarSvg from "@/assets/StarSvg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { REVIEW_DETAILS } from "@/imports/allproducts/apis/api/api";
import Flex from "@/imports/allproducts/atoms/Flex";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slider = useRef(null);
  const handlePrevious = () => slider?.current?.slickPrev();
  const handleNext = () => slider?.current?.slickNext();

  return (
    <SliderSection justifyContent="center" alignItems="center" fullWidth>
      <Container direction="column" fullWidth>
        <TopSection
          justifyContent="space-between"
          alignItems="flex-end"
          fullWidth
        >
          <MainTitle>OUR HAPPY CUSTOMERS</MainTitle>
          <ButtonContainer>
            <ArrowBtn onClick={handlePrevious}>
              <LeftArrowSvg />
            </ArrowBtn>
            <ArrowBtn onClick={handleNext}>
              <RightArrowSvg />
            </ArrowBtn>
          </ButtonContainer>
        </TopSection>

        <FeedbackWrap fullWidth>
          <Slider ref={slider} {...settings}>
            {REVIEW_DETAILS.map((items) => (
              <SliderBox key={items.client}>
                <StarContent>
                  {[...Array(5)].map((_, i) => (
                    <StarSvg key={i} />
                  ))}
                </StarContent>
                <ClientName>{items.client}</ClientName>
                <ReviewText>{items.review}</ReviewText>
              </SliderBox>
            ))}
          </Slider>
        </FeedbackWrap>
      </Container>
    </SliderSection>
  );
};

export default ImageSlider;

const FeedbackWrap = styled.div`
  width: 100%;

  .slick-slider {
    width: 100%;
  }
  .slick-track {
    display: flex;
    gap: 20px;

    @media (max-width: 520px) {
      gap: 0;
    }
  }
`;

const ReviewText = styled(Flex)`
  color: rgba(0, 0, 0, 0.6);
  font-family: "SatoshiLight";
  font-size: 16px;
  overflow-y: auto;

  &::-webkit-scrollbar-thumb {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ClientName = styled(Flex)`
  font-family: "SatoshiBold";
  font-size: 20px;
`;

const StarContent = styled(Flex)`
  gap: 6px;
`;

const SliderBox = styled.div`
  width: 100%;
  height: 250px;
  padding: 28px 32px;
  gap: 15px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex !important;
  flex-direction: column;
`;

const ArrowBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const ButtonContainer = styled(Flex)`
  gap: 16px;
`;

const MainTitle = styled(Flex)`
  font-family: "IntegralCF";
  font-size: 48px;

  @media (max-width: 520px) {
    font-size: 30px;
  }
`;

const TopSection = styled(Flex)`
  gap: 50px;

  @media (max-width: 520px) {
    gap: 25px;
  }
`;

const Container = styled(Flex)`
  max-width: 1240px;
  padding: 0 10px;
  gap: 40px;
`;

const SliderSection = styled(Flex)``;
