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
import { COMPANY, FAQ, HELP, RESOURCES } from "./constants/constants";

const Footer = () => {
  const [inputBox, setInputBox] = useState("");

  const handleChange = (e) => setInputBox(e.target.value);

  return (
    <FooterSection justifyContent="center" alignItems="center" fullWidth>
      <Container
        justifyContent="center"
        alignItems="center"
        direction="column"
        fullWidth
      >
        <OfferDetailsWrap
          justifyContent="space-between"
          alignItems="center"
          fullWidth
        >
          <OfferTitle>STAY UPTO DATE ABOUT OUR LATEST OFFERS</OfferTitle>
          <InputGroup direction="column">
            <InputWrap alignItems="center">
              <MsgSvg />
              <InputBox
                type="text"
                placeholder="Enter your email address"
                onChange={handleChange}
                value={inputBox}
              />
            </InputWrap>
            <SubscribeButton>Subscribe to Newsletter</SubscribeButton>
          </InputGroup>
        </OfferDetailsWrap>
        <OtherDetails
          justifyContent="space-between"
          alignItems="center"
          fullWidth
        >
          <LogoData direction="column" justifyContent="space-between">
            <Logo>SHOP.CO</Logo>
            <Discription>
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </Discription>
            <HandlerSvg />
          </LogoData>
          <LinkWrap>
            <Company direction="column">
              <Comp>COMPANY</Comp>
              <Flex direction="column">
                {COMPANY.map((item) => (
                  <Items selected direction="column">
                    {item}
                  </Items>
                ))}
              </Flex>
            </Company>
            <Company direction="column">
              <Comp>HELP</Comp>
              <Flex direction="column">
                {HELP.map((item) => (
                  <Items selected direction="column">
                    {item}
                  </Items>
                ))}
              </Flex>
            </Company>
            <Company direction="column">
              <Comp>FAQ</Comp>
              <Flex direction="column">
                {FAQ.map((item) => (
                  <Items selected direction="column">
                    {item}
                  </Items>
                ))}
              </Flex>
            </Company>
            <Company direction="column">
              <Comp>RESOURCES</Comp>
              <Flex direction="column">
                {RESOURCES.map((item) => (
                  <Items selected direction="column">
                    {item}
                  </Items>
                ))}
              </Flex>
            </Company>
          </LinkWrap>
        </OtherDetails>
        <Border />
        <CopyRightWrap
          justifyContent="space-between"
          alignItems="center"
          fullWidth
        >
          <CopyRightText fullWidth>
            Shop.co © 2000-2023, All Rights Reserved
          </CopyRightText>
          <CardSvg justifyContent="space-between">
            <VisaSvg />
            <MasterSvg />
            <PaypalSvg />
            <AppleSvg />
            <GpaySvg />
          </CardSvg>
        </CopyRightWrap>
      </Container>
    </FooterSection>
  );
};

export default Footer;

const Border = styled.div`
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 1px;
`;

const CardSvg = styled(Flex)`
  gap: 12px;
  width: 280px;

  @media (max-width: 890px) {
    justify-content: center;
  }
`;

const CopyRightText = styled(Flex)`
  font-family: "SatoshiLight";
  font-size: 14px;

  @media (max-width: 890px) {
    justify-content: center;
  }
`;

const CopyRightWrap = styled(Flex)`
  @media (max-width: 890px) {
    justify-content: center;
    flex-direction: column;
    gap: 15px;
  }
`;

const Items = styled(Flex)`
  font-family: "SatoshiLight";
  font-size: 16px;
  line-height: 30px;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      &:hover {
        text-decoration: underline;
      }
    `}
`;

const Comp = styled(Flex)`
  color: #000;
  font-family: "SatoshiBold";
  font-size: 16px;
  letter-spacing: 3px;
`;

const Company = styled(Flex)`
  width: 160px;
`;

const LinkWrap = styled.div`
  width: 100%;
  gap: 20px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));

  @media (max-width: 1025px) {
    gap: 55px;
  }

  @media (max-width: 890px) {
    gap: 20px;
    place-items: self-start;
  }
`;

const Discription = styled(Flex)`
  font-family: "SatoshiLight";
`;

const Logo = styled(Flex)`
  font-family: "IntegralCF";
  font-size: 33px;
`;

const LogoData = styled(Flex)`
  gap: 25px;
  width: 35%;

  @media (max-width: 1025px) {
    width: 50%;
  }

  @media (max-width: 890px) {
    width: 100%;
  }
`;

const OtherDetails = styled(Flex)`
  gap: 35px;

  @media (max-width: 1025px) {
    flex-direction: column;
    gap: 50px;
    align-items: flex-start;
  }
`;

const SubscribeButton = styled.button`
  font-family: "Satoshi";
  font-size: 16px;
  width: 100%;
  padding: 12px 16px;
  border-radius: 62px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #d8d8d8;
  }
`;

const InputBox = styled.input`
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`;

const InputWrap = styled(Flex)`
  width: 100%;
  padding: 12px 16px;
  font-family: "SatoshiLight";
  font-size: 16px;
  border-radius: 62px;
  background-color: #fff;
  gap: 12px;
`;

const InputGroup = styled(Flex)`
  gap: 14px;
  width: 40%;

  @media (max-width: 890px) {
    width: 100%;
  }
`;

const OfferTitle = styled(Flex)`
  font-family: "IntegralCF";
  font-size: 40px;
  background-color: #000;
  width: 50%;
  color: #ffffff;

  @media (max-width: 890px) {
    font-size: 32px;
    text-align: center;
    justify-content: center;
    width: 70%;
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`;

const OfferDetailsWrap = styled(Flex)`
  padding: 36px 64px;
  background-color: #000;
  border-radius: 20px;

  @media (max-width: 890px) {
    flex-direction: column;
    padding: 28px 24px;
    gap: 32px;
  }
`;

const Container = styled(Flex)`
  max-width: 1240px;
  padding: 50px 10px;
  gap: 50px;
`;

const FooterSection = styled(Flex)`
  background: #f0f0f0;
  margin-top: 70px;
`;
