import styled from "styled-components";

const DressStyle = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>BROWSE BY DRESS STYLE</Heading>
        <ImgWrap>
          <MultiImg>
            <Div>
              <Dress>Casual</Dress>
              <Image src="/image18.png" alt="image-18" />
            </Div>
            <Div>
              <Dress>Formal</Dress>
              <Image src="/image16.png" alt="image-16" />
            </Div>
          </MultiImg>
          <MultiImg>
            <Div>
              <Dress>Party</Dress>
              <Image src="/image15.png" alt="image-15" />
            </Div>
            <Div>
              <Dress>Gym</Dress>
              <Image src="/image17.png" alt="image-17" />
            </Div>
          </MultiImg>
        </ImgWrap>
      </Wrapper>
    </Container>
  );
};

export default DressStyle;

const Container = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: #f0f0f0;
  margin: 0 0 80px 0;
`;

const Heading = styled.div`
  font-family: "Integral CF";
  font-size: 48px;
  font-weight: 700;
  margin: 70px 0 0 0;
`;

const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 76px 0;
`;

const Div = styled.div``;

const MultiImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Image = styled.img`
  border-radius: 20px;
  position: relative;
`;

const Dress = styled.div`
  font-family: "Satoshi";
  font-size: 36px;
  font-weight: 700;
  position: absolute;
  z-index: 1;
  padding: 30px 0 0 30px;
`;
