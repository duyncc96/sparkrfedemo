import { Layout } from "antd";
import React from "react";
import styled from "styled-components";
import { FooterLayout } from "./FooterLayout";
import { HeaderLayout } from "./HeaderLayout";
const { Header, Footer, Content } = Layout;
const StyledHeader = styled(Header)`
  background-color: #001529;
  padding: 0 50px;
  height: 55px;
  position: fixed;
  width: 100%;
  z-index: 2;
  @media screen and (max-width: 420px) {
    padding: 0 16px;
  }
`;
const StyledContent = styled(Content)`
  padding: 0 20px;
  margin: 70px auto;
  width: 100%;
  position: relative;
  display: flex;
  @media screen and (max-width: 350px) {
    padding: 0 4px;
  }
`;
const StyledFooter = styled(Footer)`
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 55px;
  background-color: #001529;
`;
const StyledLayout = styled(Layout)`
  display: flex;
  background: #f5f5f5;
  height: 100%;
`;
export const AppLayout: React.FC = ({children}) => {
  return (
    <StyledLayout>
      <StyledHeader>
        <HeaderLayout />
      </StyledHeader>
      <StyledContent>{children}</StyledContent>
      <StyledFooter>
        <FooterLayout />
      </StyledFooter>
    </StyledLayout>
  );
};
