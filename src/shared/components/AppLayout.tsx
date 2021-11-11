import React from "react";
import { FooterLayout } from "./FooterLayout";
import { HeaderLayout } from "./HeaderLayout";

export const AppLayout: React.FC = ({children}) => {
  return (
    <div>
        <HeaderLayout />
      <div>{children}</div>
        <FooterLayout />
    </div>
  );
};
