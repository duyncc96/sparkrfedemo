import { Button, Card, Layout, Row, Typography } from "antd";
import React from "react";
import styled from "styled-components";

// import {Main} from './Main'

const { Text } = Typography;

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const StyledContent = styled(Layout.Content)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledFooter = styled(Layout.Footer)`
  text-align: center;
`;

const StyledCard = styled(Card)`
  /* margin: 20vh auto; */
  width: 25%;
  min-width: 400px;
  padding: 0;
  border-color: rgba(0, 0, 0, 0.09);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  @media screen and (max-width: 400px) {
    min-width: 320px;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
  border-color: rgba(0, 0, 0, 0.09);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  font-weight: bold;
`;

const StyledIcon = styled.img`
  width: 18px;
  /* height: auto; */
  margin-right: 8px;
`;

export const Login: React.FC = () => {
  return (
    <StyledLayout>
      <StyledContent>
        <StyledCard actions={[]}>
          <Row style={{ display: "flex" }} justify="center" align="middle">
            Images
          </Row>
          <Row>
            <StyledButton size="large" type="default">
              <StyledIcon src="../images/google-logo.svg" alt="" />
              Login with Google
            </StyledButton>
          </Row>
          <br />
        </StyledCard>
      </StyledContent>
      <StyledFooter>
        <Text>Sparkr &copy;2021</Text>
      </StyledFooter>
    </StyledLayout>
  );
};
