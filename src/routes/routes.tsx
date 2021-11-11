import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Loading } from "../shared/components/Loading";
import { AuthRoutes } from "./AuthRoutes";
import { HomeRoutes } from "./HomeRoutes";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <AuthRoutes />
        <HomeRoutes />
      </Suspense>
    </BrowserRouter>
  );
};
