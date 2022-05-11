import React from "react";
import styled from "@emotion/styled";

const StyledMain = styled.main`
  grid-area: content;
  grid-column: span 2;
`;

const MainContent: React.FC = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default MainContent;
