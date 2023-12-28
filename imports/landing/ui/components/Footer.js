import AppleSvg from "@/assets/CardSvg/AppleSvg";
import GpaySvg from "@/assets/CardSvg/GpaySvg";
import MasterSvg from "@/assets/CardSvg/MasterSvg";
import PaypalSvg from "@/assets/CardSvg/PaypalSvg";
import VisaSvg from "@/assets/CardSvg/VisaSvg";
import HandlerSvg from "@/assets/HandlerSvg";
import MsgSvg from "@/assets/MsgSvg";
import { useState } from "react";
import styled from "styled-components";

const Footer = () => {
  const [inputBox, setInputBox] = useState("");

  return (
    <Container>
      <InputWrap>
        <Wrap>
          <Offer>STAY UPTO DATE ABOUT OUR LATEST OFFERS</Offer>
          <InputSib>
            <InputParent>
              <MsgSvg />
              <InputBox
                type="text"
                placeholder="Enter your email address"
                onChange={(e) => setInputBox(e.target.value)}
                value={inputBox}
              />
            </InputParent>
            <SubButton>Subscribe to Newsletter</SubButton>
          </InputSib>
        </Wrap>
      </InputWrap>
      <Wrapper>
        <LogoData>
          <Logo>SHOP.CO</Logo>
          <Para>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </Para>
          <HandlerSvg />
        </LogoData>
        <Company>
          <Comp>COMPANY</Comp>
          <CompWrap>
            <View>About</View>
            <View>Features</View>
            <View>Works</View>
            <View>Career</View>
          </CompWrap>
        </Company>
        <Help>
          <Comp>HELP</Comp>
          <CompWrap>
            <View>Customer Support</View>
            <View>Delivery Details</View>
            <View>Terms & Conditions</View>
            <View>Privacy Policy</View>
          </CompWrap>
        </Help>
        <Faq>
          <Comp>FAQ</Comp>
          <CompWrap>
            <View>Account</View>
            <View>Manage Deliveries</View>
            <View>Orders</View>
            <View>Payments</View>
          </CompWrap>
        </Faq>
        <Resources>
          <Comp>RESOURCES</Comp>
          <CompWrap>
            <View>Free eBooks</View>
            <View>Development Tutorial</View>
            <View>How to - Blog</View>
            <View>Youtube Playlist</View>
          </CompWrap>
        </Resources>
      </Wrapper>
      <Margin></Margin>
      <FootWrap>
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

const Container = styled.div`
  width: 100%;
  background: #f0f0f0;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1240px;
  width: 100%;
  background-color: #000;
  border-radius: 20px;
  position: absolute;
  top: -90px;
`;

const Wrap = styled.div`
  padding: 36px 64px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Offer = styled.div`
  font-family: "Integral CF";
  font-size: 40px;
  font-weight: 700;
  background-color: #000;
  width: 50%;
  color: #ffffff;
`;

const InputSib = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: #000;
`;

const InputParent = styled.div`
  width: 349px;
  padding: 12px 16px;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  border-radius: 62px;
  background-color: #fff;
  display: flex;
  align-items: center;
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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1240px;
  width: 100%;
  justify-content: space-between;
  padding: 140px 0 50px 0;
`;

const LogoData = styled.div`
  width: 248px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
`;
const Company = styled.div`
  width: 104px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Help = styled.div`
  width: 136px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Faq = styled.div`
  width: 149px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Resources = styled.div`
  width: 149px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Logo = styled.div`
  font-family: "Integral CF";
  font-weight: 700;
  font-size: 33.455px;
`;
const Para = styled.div`
  font-family: "Satoshi";
  font-weight: 400;
  margin-bottom: 10px;
`;

const Comp = styled.div`
  color: #000;
  font-family: "Satoshi";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 3px;
`;

const CompWrap = styled.div`
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  line-height: 37px;
  cursor: pointer;
`;

const Margin = styled.div`
  background: rgba(0, 0, 0, 0.1);
  max-width: 1240px;
  width: 100%;
  height: 1px;
`;

const FootWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1240px;
  padding: 25px 0 88px 0;
  align-items: center;
`;

const CopyRight = styled.div`
  font-family: "Satoshi";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const CardSvg = styled.div`
  width: 281px;
  display: flex;
  gap: 12px;
`;

const View = styled.div`
  &:hover {
    text-decoration: underline;
  }
`;
