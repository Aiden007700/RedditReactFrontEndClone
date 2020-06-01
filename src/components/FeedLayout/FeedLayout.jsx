import React from "react";
import { NavBar } from "../NavBar";
import { FeedStyled } from "./styledFeedLayout";

export const FeedLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <FeedStyled>{children}</FeedStyled>
    </>
  );
};
