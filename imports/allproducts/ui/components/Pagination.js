import LeftArrowSvg from "@/assets/LeftArrowSvg";
import RightArrowSvg from "@/assets/RightArrowSvg";
import styled from "styled-components";

const Pagination = () => {
  return (
    <Container>
      <Wrapper>
        <Page>
          <Margin />
        </Page>
        <Page>
          <MainPage>
            <Previous>
              <LeftArrowSvg />
              <PreviousBack>Previous</PreviousBack>
            </Previous>
            <Count>
              <One>1</One>
              <Rest>2</Rest>
              <Rest>3</Rest>
              <Rest>...</Rest>
              <Rest>8</Rest>
              <Rest>9</Rest>
              <Rest>10</Rest>
            </Count>
            <Next>
              <PreviousBack>Next</PreviousBack>
              <RightArrowSvg />
            </Next>
          </MainPage>
        </Page>
      </Wrapper>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1240px;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 172px;
`;

const Page = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Margin = styled.div`
  background: rgba(0, 0, 0, 0.1);
  height: 1px;
  width: 75%;
  margin: 30px 0 22px 0;
`;

const MainPage = styled.div`
  display: flex;
  gap: 216px;
  align-items: center;
  width: 75%;
`;

const Count = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Previous = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px 14px;
  background: #fff;
  cursor: pointer;
  &:hover {
    background-color: #d8d8d8;
  }
`;

const Next = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px 14px;
  background: #fff;
  cursor: pointer;
  &:hover {
    background-color: #d8d8d8;
  }
`;

const PreviousBack = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 14px;
  font-weight: 500;
`;

const One = styled.div`
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.06);
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #d8d8d8;
  }
`;

const Rest = styled(One)`
  background-color: white;
`;
