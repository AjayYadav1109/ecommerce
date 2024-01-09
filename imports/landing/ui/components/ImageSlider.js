import styled from "styled-components";
import Slider from "react-slick";
import LeftArrowSvg from "@/assets/LeftArrowSvg";
import RightArrowSvg from "@/assets/RightArrowSvg";
import StarSvg from "@/assets/StarSvg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const ClientDetails = [
  {
    client: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    client: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    client: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

const ImageContent = () => {
  return (
    <SliderContainer>
      {ClientDetails.map((items) => (
        <SliderBox key={items.client}>
          <StarContent>
            {[...Array(5)].map((_, i) => (
              <StarSvg key={i} />
            ))}
          </StarContent>
          <Client>{items.client}</Client>
          <ReviewPara>{items.review}</ReviewPara>
        </SliderBox>
      ))}
    </SliderContainer>
  );
};

const ImageSlider = () => {
  const slider = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <Wrapper>
        <Heading>OUR HAPPY CUSTOMERS</Heading>
        <ButtonContainer>
          <Arrow onClick={() => slider.current.slickPrev()}>
            <LeftArrowSvg />
          </Arrow>
          <Arrow onClick={() => slider.current.slickNext()}>
            <RightArrowSvg />
          </Arrow>
        </ButtonContainer>
        <Slider ref={(c) => (slider.current = c)} {...settings}>
          {[...Array(2)].map((_, i) => (
            <ImageContent key={i} />
          ))}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default ImageSlider;

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
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

const Heading = styled.div`
  font-family: "Integral CF";
  font-size: 48px;
  font-weight: 700;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 40px 0 170px 0;
`;

const SliderBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 28px 32px;
  gap: 15px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const StarContent = styled.div`
  display: flex;
  gap: 6px;
`;

const Client = styled.div`
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 700;
`;

const ReviewPara = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
`;

const Arrow = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: transparent;
`;
