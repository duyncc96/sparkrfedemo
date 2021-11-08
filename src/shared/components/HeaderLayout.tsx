import React from "react";
import styled from "styled-components";

const HeaderRow = styled.div`
  background-color: #001529;
  color: white;
  justify-content: center;
  height: 100%;
  line-height: 1;
  display: flex;
  align-items: center;
  margin: auto;
`;

export const HeaderLayout: React.FC = () => {
  return <HeaderRow>Header</HeaderRow>;
};
