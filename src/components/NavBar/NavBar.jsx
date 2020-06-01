import React from "react";
import { navigate } from "@reach/router";
import { Search } from "../Search";
import { NavBarWrapper, RedditLogo } from "./styledNavBar";
export const NavBar = () => {
  return (
    <NavBarWrapper>
      <RedditLogo onClick={() => navigate("/")} />
      <Search />
    </NavBarWrapper>
  );
};
