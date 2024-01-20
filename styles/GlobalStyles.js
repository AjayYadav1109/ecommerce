import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
 font-family: 'IntegralCF';
 src: url(/fonts/vertopal.com_Fontspring-DEMO-integralcf-bold.ttf) format("truetype");
 font-weight: 700;
}

@font-face {
 font-family: 'SatoshiLight';
 src: url(/fonts/vertopal.com_Satoshi-Light.ttf) format("truetype");
 font-weight: 400;
}

@font-face {
 font-family: 'Satoshi';
 src: url(/fonts/vertopal.com_Satoshi-Medium.ttf) format("truetype");
 font-weight: 500;
}

@font-face {
 font-family: 'SatoshiBold';
 src: url(/fonts/vertopal.com_Satoshi-Bold.ttf) format("truetype");
 font-weight: 700;
}
`;

export default GlobalStyles;
