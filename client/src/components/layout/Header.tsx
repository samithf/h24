import React from "react";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
  color: #000000;
  height: 70px;
  grid-area: header;
  background-color: #f3f3f3;
`;

const Header = () => {
  return <StyledHeader>HOME24</StyledHeader>;
};

export default Header;
