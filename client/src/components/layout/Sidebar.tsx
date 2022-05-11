import React, { useContext } from "react";
import styled from "@emotion/styled";
import { ProductContext } from "../../hooks/useProducts";
import { useNavigate } from "react-router-dom";

const StyledSidebar = styled.aside`
  grid-area: sidebar;
  background-color: #f3f3f3;
  h3 {
    text-align: center;
  }
  ul {
    list-style: none;
    li {
      padding: 10px 0;
      :hover {
        background-color: #000000;
      }
    }
  }
`;

const Sidebar = () => {
  const { products } = useContext(ProductContext);

  const navigate = useNavigate();

  return (
    <StyledSidebar>
      <h3>Kategorien</h3>
      <nav>
        {(products as any).data ? (
          <ul>
            {(products as any).data.categories[0].childrenCategories.list.map(
              (product: any, index: number) => {
                return (
                  <li
                    key={index}
                    onClick={() => navigate(`/${product.urlPath}`)}
                  >
                    {product.name}
                  </li>
                );
              }
            )}
          </ul>
        ) : (
          <div>no products</div>
        )}
      </nav>
    </StyledSidebar>
  );
};

export default Sidebar;
