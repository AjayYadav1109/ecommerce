import AppleSvg from "@/assets/CardSvg/AppleSvg";
import GpaySvg from "@/assets/CardSvg/GpaySvg";
import MasterSvg from "@/assets/CardSvg/MasterSvg";
import PaypalSvg from "@/assets/CardSvg/PaypalSvg";
import VisaSvg from "@/assets/CardSvg/VisaSvg";
import HandlerSvg from "@/assets/HandlerSvg";
import MsgSvg from "@/assets/MsgSvg";
import Flex from "@/imports/allproducts/atoms/Flex";
import { useState } from "react";
import styled, { css } from "styled-components";
import { company, faq, help, resources } from "./constants/constants";

const Footer = () => {
  const [inputBox, setInputBox] = useState("");

  const inputHandler = (e) => setInputBox(e.target.value);

  return (
    <Container
      direction="column"
      justifyContent="center"
      alignItems="center"
      fullWidth
    >
      <InputWrap justifyContent="space-between" alignItems="center" fullWidth>
        <Offer>STAY UPTO DATE ABOUT OUR LATEST OFFERS</Offer>
        <InputSib direction="column">
          <InputParent alignItems="center">
            <MsgSvg />
            <InputBox
              type="text"
              placeholder="Enter your email address"
              onChange={inputHandler}
              value={inputBox}
            />
          </InputParent>
          <SubButton>Subscribe to Newsletter</SubButton>
        </InputSib>
      </InputWrap>
      <Wrapper justifyContent="space-between" alignItems="center" fullWidth>
        <LogoData direction="column" justifyContent="space-between">
          <Logo>SHOP.CO</Logo>
          <Para>
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </Para>
          <HandlerSvg />
        </LogoData>
        <CompWrap justifyContent="space-between" fullWidth>
          <Company direction="column">
            <Comp>COMPANY</Comp>
            <Flex direction="column">
              {company.map((item) => (
                <Items selected direction="column">
                  {item}
                </Items>
              ))}
            </Flex>
          </Company>
          <Company direction="column">
            <Comp>HELP</Comp>
            <Flex direction="column">
              {help.map((item) => (
                <Items selected direction="column">
                  {item}
                </Items>
              ))}
            </Flex>
          </Company>
          <Company direction="column">
            <Comp>FAQ</Comp>
            <Flex direction="column">
              {faq.map((item) => (
                <Items selected direction="column">
                  {item}
                </Items>
              ))}
            </Flex>
          </Company>
          <Company direction="column">
            <Comp>RESOURCES</Comp>
            <Flex direction="column">
              {resources.map((item) => (
                <Items selected direction="column">
                  {item}
                </Items>
              ))}
            </Flex>
          </Company>
        </CompWrap>
      </Wrapper>
      <FootWrap justifyContent="space-between" alignItems="center" fullWidth>
        <CopyRight>Shop.co © 2000-2023, All Rights Reserved</CopyRight>
        <CardSvg>
          <VisaSvg />
          <MasterSvg />
          <PaypalSvg />
          <AppleSvg />
          <GpaySvg />
        </CardSvg>
      </FootWrap>
    </Container>
  );
};

export default Footer;

const Container = styled(Flex)`
  background: #f0f0f0;
  position: relative;
`;

const InputWrap = styled(Flex)`
  max-width: 1240px;
  padding: 36px 64px;
  background-color: #000;
  border-radius: 20px;
  position: absolute;
  width: 95%;
  top: -90px;

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 9px 24px;
    gap: 32px;
  }
`;

const CompWrap = styled(Flex)``;

const Items = styled(Flex)`
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  line-height: 37px;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      &:hover {
        text-decoration: underline;
      }
    `}
`;

const Offer = styled.div`
  font-family: "Integral CF";
  font-size: 40px;
  font-weight: 700;
  background-color: #000;
  width: 50%;
  color: #ffffff;

  @media (max-width: 950px) {
    font-size: 32px;
    width: 100%;
    text-align: center;
  }
`;

const InputSib = styled(Flex)`
  gap: 14px;
  background-color: #000;
`;

const InputParent = styled(Flex)`
  width: 349px;
  padding: 12px 16px;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  border-radius: 62px;
  background-color: #fff;
  gap: 12px;
`;

const InputBox = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`;

const SubButton = styled.button`
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
  width: 349px;
  padding: 12px 16px;
  border-radius: 62px;
  cursor: pointer;
  &:hover {
    background-color: #d8d8d8;
  }
`;

const Wrapper = styled(Flex)`
  max-width: 1240px;
  padding: 140px 0 50px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 950px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;

const LogoData = styled(Flex)`
  width: 248px;
  gap: 25px;
`;

const Company = styled.div`
  gap: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const Logo = styled.div`
  font-family: "Integral CF";
  font-weight: 700;
  font-size: 33px;
`;
const Para = styled.div`
  font-family: "Satoshi";
  font-weight: 400;
`;

const Comp = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 3px;
`;

const FootWrap = styled(Flex)`
  max-width: 1240px;
  padding: 25px 0 88px 0;
  flex-wrap: wrap;
  @media (max-width: 950px) {
    justify-content: center;
    gap: 15px;
  }
`;

const CopyRight = styled.div`
  font-family: "Satoshi";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const CardSvg = styled(Flex)`
  width: 281px;
  gap: 12px;
`;
