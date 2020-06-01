import React from "react";
import { Router } from "@reach/router";
import { FeedLayout } from "./components/FeedLayout";
import { Feed } from "./views/Feed";

export const AppRoutes = () => {
  return (
    <Router>
      <FeedLayout path="/">
        <Feed path="/" />
      </FeedLayout>
    </Router>
  );
};
