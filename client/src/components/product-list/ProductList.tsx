import styled from "@emotion/styled";
import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../hooks/useProducts";
import ProductItem from "../product-item/ProductItem";

const StyledProductSection = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 10px;
`;

const ProductList = () => {
  const { products } = useContext(ProductContext);
  return (
    <StyledProductSection>
      {products.data
        ? products.data.categories.map((category) => {
            return category.categoryArticles.articles.map((article) => {
              return <ProductItem item={article} />;
            });
          })
        : null}
    </StyledProductSection>
  );
};

export default ProductList;
