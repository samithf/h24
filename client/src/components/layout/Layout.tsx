import styled from "@emotion/styled";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const StyledLayout = styled.section`
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
`;

const Layout: React.FC = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Sidebar />
      <MainContent>{children}</MainContent>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
