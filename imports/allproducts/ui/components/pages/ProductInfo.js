import styled from "styled-components";
import AllTypeProducts from "../AllTypeProducts";

import Flex from "@/imports/allproducts/atoms/Flex";

const ProductInfo = () => {
  return (
    <ProductSection fullWidth>
      <AllTypeProducts />
    </ProductSection>
  );
};

export default ProductInfo;

const ProductSection = styled(Flex)``;
