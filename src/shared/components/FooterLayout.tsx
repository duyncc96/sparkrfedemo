import { Layout, Row, Typography } from "antd";
import React from "react";
import styled from "styled-components";
const { Text } = Typography;
const { Footer } = Layout;
const FixedFooter = styled(Footer)`
  position: fixed;
  z-index: 1;
  bottom: 0;
  width: 100%;
  height: 55px;
  background-color: #001529;
  left: 0;
`;
const FooterText = styled(Text)`
  color: white;
  margin-top: -5px;
`;
export const FooterLayout: React.FC = () => {
  return (
    <FixedFooter>
      <Row style={{ display: "flex" }} justify="center">
        <FooterText>Sparkr &copy;2021</FooterText>
      </Row>
    </FixedFooter>
  );
};
