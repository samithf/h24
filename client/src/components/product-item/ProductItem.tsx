import React from "react";
import styled from "@emotion/styled";
import Button from "../ui/button/Button";

const StyledProductItem = styled.article`
  padding: 10px;
  border: 1px solid #f3f3f3;
  img {
    width: 100%;
  }
  p {
    font-weight: bold;
    font-size: 1.1em;
  }
`;

const ProductItem = ({ item }: any) => {
  return (
    <StyledProductItem>
      <img src={item.images[0].path} />
      <div>{item.prices.regular.value}</div>
      <p>{item.name}</p>
      <div>
        <Button>Add to cart</Button>
      </div>
    </StyledProductItem>
  );
};

export default ProductItem;
